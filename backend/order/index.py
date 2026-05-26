import json
import os
import smtplib
import urllib.request
import logging
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

logger = logging.getLogger()


def handler(event: dict, context) -> dict:
    """Принимает заявку на торт и отправляет уведомление на email и в Telegram."""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    date = body.get('date', '').strip()
    guests = body.get('guests', '').strip()
    filling = body.get('filling', '').strip()
    design = body.get('design', '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Имя и телефон обязательны'})
        }

    message_text = (
        f"🎂 Новая заявка на торт!\n\n"
        f"👤 Имя: {name}\n"
        f"📞 Телефон: {phone}\n"
        f"📅 Дата мероприятия: {date or 'не указана'}\n"
        f"👥 Количество гостей: {guests or 'не указано'}\n"
        f"🍰 Начинка: {filling or 'не указана'}\n"
        f"🎨 Пожелания по дизайну: {design or 'не указаны'}"
    )

    errors = []

    # Отправка в Telegram
    try:
        tg_token = os.environ.get('TELEGRAM_BOT_TOKEN', '')
        tg_chat_id = os.environ.get('TELEGRAM_CHAT_ID', '')
        if tg_token and tg_chat_id:
            tg_url = f"https://api.telegram.org/bot{tg_token}/sendMessage"
            tg_data = json.dumps({
                'chat_id': tg_chat_id,
                'text': message_text,
                'parse_mode': 'HTML'
            }).encode('utf-8')
            req = urllib.request.Request(tg_url, data=tg_data, headers={'Content-Type': 'application/json'})
            urllib.request.urlopen(req, timeout=10)
    except Exception as e:
        errors.append(f'Telegram: {str(e)}')
        logger.error(f'Telegram error: {str(e)}')

    # Отправка на Email
    try:
        smtp_from = os.environ.get('SMTP_FROM', '')
        smtp_password = os.environ.get('SMTP_PASSWORD', '')
        email_to = os.environ.get('EMAIL_TO', '')
        if smtp_from and smtp_password and email_to:
            msg = MIMEMultipart('alternative')
            msg['Subject'] = f'Новая заявка на торт от {name}'
            msg['From'] = smtp_from
            msg['To'] = email_to
            msg.attach(MIMEText(message_text, 'plain', 'utf-8'))
            with smtplib.SMTP_SSL('smtp.yandex.ru', 465) as server:
                server.login(smtp_from, smtp_password)
                server.sendmail(smtp_from, email_to, msg.as_string())
    except Exception as e:
        errors.append(f'Email: {str(e)}')
        logger.error(f'Email error: {str(e)}')

    logger.info(f'Order processed. Errors: {errors}')

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True, 'errors': errors})
    }