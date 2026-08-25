import { contact, markets, siteConfig } from '@/lib/site'

export const dynamic = 'force-static'

function pad(value) {
  return String(value).padStart(2, '0')
}

function nextOccurrence(dayIndex) {
  const now = new Date()
  const date = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const offset = (dayIndex - date.getDay() + 7) % 7
  date.setDate(date.getDate() + offset)
  return date
}

function formatDateTime(date, time) {
  const [hours, minutes] = time.split(':')
  return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}T${hours}${minutes}00`
}

function escapeText(value) {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\r?\n/g, '\\n')
}

function foldLine(line) {
  if (line.length <= 74) {
    return line
  }
  let output = line.slice(0, 74)
  let rest = line.slice(74)
  while (rest.length > 0) {
    output += `\r\n ${rest.slice(0, 73)}`
    rest = rest.slice(73)
  }
  return output
}

function buildIcs() {
  const stamp = `${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`

  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//L\'Étal d\'Hyères//Marchés de Hyères//FR',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'X-WR-CALNAME:Marchés – ' + siteConfig.name,
    'X-WR-TIMEZONE:Europe/Paris',
    'BEGIN:VTIMEZONE',
    'TZID:Europe/Paris',
    'BEGIN:DAYLIGHT',
    'TZOFFSETFROM:+0100',
    'TZOFFSETTO:+0200',
    'TZNAME:CEST',
    'DTSTART:19700329T020000',
    'RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU',
    'END:DAYLIGHT',
    'BEGIN:STANDARD',
    'TZOFFSETFROM:+0200',
    'TZOFFSETTO:+0100',
    'TZNAME:CET',
    'DTSTART:19701025T030000',
    'RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU',
    'END:STANDARD',
    'END:VTIMEZONE',
  ]

  for (const market of markets) {
    const start = nextOccurrence(market.dayIndex)
    const uidBase = market.day.toLowerCase() + '-' + market.dayIndex

    lines.push(
      'BEGIN:VEVENT',
      `UID:${uidBase}@modemarchehyeres.fr`,
      `DTSTAMP:${stamp}`,
      `DTSTART;TZID=Europe/Paris:${formatDateTime(start, market.start)}`,
      `DTEND;TZID=Europe/Paris:${formatDateTime(start, market.end)}`,
      'RRULE:FREQ=WEEKLY',
      `SUMMARY;LANG=fr:${escapeText(siteConfig.name + ' – ' + market.name)}`,
      `LOCATION:${escapeText(market.location + ', 83400 Hyères')}`,
      `DESCRIPTION;LANG=fr:${escapeText(
        'Votre stand de vêtements, accessoires et bijoux fantaisie vous attend ! ' +
          'Réservations : ' + contact.phoneDisplay
      )}`,
      'STATUS:CONFIRMED',
      'END:VEVENT'
    )
  }

  lines.push('END:VCALENDAR')

  return lines.map(foldLine).join('\r\n') + '\r\n'
}

export async function GET() {
  return new Response(buildIcs(), {
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': 'attachment; filename="marches-hyeres.ics"',
    },
  })
}
