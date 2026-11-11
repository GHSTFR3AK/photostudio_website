import { business } from '../data/site'

/**
 * Builds a direct WhatsApp chat URL with pre-filled message text.
 * Format: https://wa.me/{phone}?text={encodedText}
 */
export function waLink(message: string): string {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`
}
