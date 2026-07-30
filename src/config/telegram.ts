/**
 * Интеграция с Telegram-ботом для приёма заказов.
 * Токен и chat_id подставляются при деплое (см. README).
 *
 * ВАЖНО: токен виден в коде страницы — это неизбежно для статического
 * хостинга. Бот умеет только писать вам в чат, так что максимум вреда —
 * спам в этот чат. Не используйте токен основного бота с широкими правами.
 */
export const TELEGRAM_BOT_TOKEN = '8010863329:AAE5f_FtF7wKOAyRs-JAQIxeUDBX91ikBU4'
export const TELEGRAM_CHAT_ID = '334537290'

export function telegramConfigured() {
  return TELEGRAM_BOT_TOKEN.length > 10 && TELEGRAM_CHAT_ID.length > 0
}

export async function sendOrderToTelegram(text: string): Promise<boolean> {
  try {
    const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
        parse_mode: 'HTML',
      }),
    })
    const data = await res.json()
    return res.ok && data.ok === true
  } catch {
    return false
  }
}
