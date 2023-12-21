import {defineStore} from 'pinia'
import {computed} from "vue";

export const useCalendarStore = defineStore('calendar', () => {

    const getEvents = () => {
        return {
            "bookings": [
                {
                    "id": 1,
                    "room": "101",
                    "startDate": "2023-08-01",
                    "endDate": "2023-08-05",
                    "status": "confirmed",
                    "guest": "John Doe"
                },
                {
                    "id": 2,
                    "room": "102",
                    "startDate": "2023-08-03",
                    "endDate": "2023-08-06",
                    "status": "pending",
                    "guest": "Alice Johnson"
                },
                {
                    "id": 3,
                    "room": "103",
                    "startDate": "2023-08-04",
                    "endDate": "2023-08-07",
                    "status": "confirmed",
                    "guest": "Bob Smith"
                },
                {
                    "id": 4,
                    "room": "104",
                    "startDate": "2023-08-10",
                    "endDate": "2023-08-12",
                    "status": "cancelled",
                    "guest": "Carol White"
                },
                {
                    "id": 5,
                    "room": "105",
                    "startDate": "2023-08-11",
                    "endDate": "2023-08-14",
                    "status": "confirmed",
                    "guest": "David Brown"
                },
                {
                    "id": 6,
                    "room": "201",
                    "startDate": "2023-08-15",
                    "endDate": "2023-08-18",
                    "status": "pending",
                    "guest": "Eve Green"
                },
                {
                    "id": 7,
                    "room": "202",
                    "startDate": "2023-08-20",
                    "endDate": "2023-08-22",
                    "status": "confirmed",
                    "guest": "Frank Black"
                },
            ]
        }
    }

    const events = computed(() => {
        let events = getEvents()
        if (events) {
            return events.bookings.map(event => {
                return {
                    id: 1,
                    room: event.room,
                    time: {start: event.startDate, end: event.endDate},
                    status: event.status,
                    isEditable: true,
                    color: getColorStatus(event.status),
                    guest: event.guest,
                    title: `room: ${event.room} (${event.guest})`,
                }
            })
        }

        return {}
    })

    const getColorStatus = (status) => {
        switch (status) {
            case 'confirmed':
                return 'green'
            case 'pending':
                return 'yellow'
            case 'cancelled':
                return 'red'
            default:
                return 'red';
        }
    }

    return {
        getEvents,
        events
    }
})