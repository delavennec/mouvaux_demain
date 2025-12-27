import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Parse French date format (e.g., "12 Septembre 2025") to Date object
export function parseFrenchDate(dateString: string): Date {
  const frenchMonths: { [key: string]: number } = {
    'janvier': 0, 'février': 1, 'mars': 2, 'avril': 3, 'mai': 4, 'juin': 5,
    'juillet': 6, 'août': 7, 'septembre': 8, 'octobre': 9, 'novembre': 10, 'décembre': 11
  }
  
  const parts = dateString.toLowerCase().split(/\s+/)
  const day = parseInt(parts[0], 10)
  const month = frenchMonths[parts[1]]
  const year = parseInt(parts[2], 10)
  
  return new Date(year, month, day)
}

// Filter events that haven't passed yet
export function filterFutureEvents(events: any[]): any[] {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  return events.filter(event => {
    try {
      const eventDate = parseFrenchDate(event.date)
      return eventDate >= today
    } catch {
      // If parsing fails, include the event
      return true
    }
  })
}
