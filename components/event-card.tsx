import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Mail } from "@/components/icons"
import type { Event as EventType } from '@/lib/events'

export function EventCard({ event, footer, centerTitle, compact, contactInline }: { event: EventType; footer?: React.ReactNode; centerTitle?: boolean; compact?: boolean; contactInline?: boolean }) {
  return (
    <Card className="hover:shadow-lg transition-shadow border-2 border-blue-500">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="md:w-48 flex-shrink-0">
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                <span className="font-semibold text-blue-600">{event.date}</span>
              </div>
              <div className="flex items-center justify-center">
                <Clock className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-blue-600">{event.time}</span>
              </div>
            </div>
            <div className="mt-2 text-center">
              <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                {event.type}
              </span>
            </div>
          </div>

          <div className="flex-1">
            <h3 className={`text-2xl font-semibold mb-3 text-gray-900 ${centerTitle ? 'text-center' : ''}`}>{event.title}</h3>
            {!compact && <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>}
            <div className="flex items-start text-gray-500 mb-1">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">{event.location}</span>
              </div>
              {event.contact && contactInline && (
                <div className="ml-4 text-sm text-gray-500">
                  <span>Pour tout renseignement : </span>
                  <span className="text-blue-700">{event.contact}</span>
                </div>
              )}
            </div>

            {footer && <div className="mt-1 text-sm text-gray-500">{footer}</div>}

            {!compact && !contactInline && event.contact && (
              <div className="flex items-center text-gray-500 mt-2">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">Pour tout renseignement : <span className="text-blue-700">{event.contact}</span></span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default EventCard
