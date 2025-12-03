export interface Event {
  id: string;
  name: string;
  venue: string;
  date: string;
  startTime: string;
  endTime: string;
}

export interface Venue {
  id: string;
  name: string;
}

export const VENUES: Venue[] = [
  { id: 'venue1', name: 'Venue 1' },
  { id: 'venue2', name: 'Venue 2' },
  { id: 'venue3', name: 'Venue 3' },
  { id: 'venue4', name: 'Venue 4' },
];

export const DUMMY_EVENTS: Event[] = [
  {
    id: 'event1',
    name: 'Event 1',
    venue: 'Venue 1',
    date: '2025-12-02',
    startTime: '09:00',
    endTime: '09:30',
  },
  {
    id: 'event2',
    name: 'Event 2',
    venue: 'Venue 2',
    date: '2025-12-02',
    startTime: '10:00',
    endTime: '10:45',
  },
  {
    id: 'event3',
    name: 'Event 3',
    venue: 'Venue 1',
    date: '2025-12-03',
    startTime: '14:00',
    endTime: '14:30',
  },
  {
    id: 'event4',
    name: 'Event 4',
    venue: 'Venue 3',
    date: '2025-12-03',
    startTime: '15:15',
    endTime: '16:00',
  },
  {
    id: 'event5',
    name: 'Event 5',
    venue: 'Venue 2',
    date: '2025-12-04',
    startTime: '09:15',
    endTime: '09:45',
  },
  {
    id: 'event6',
    name: 'Event 6',
    venue: 'Venue 4',
    date: '2025-12-04',
    startTime: '11:00',
    endTime: '12:00',
  },
  {
    id: 'event7',
    name: 'Event 7',
    venue: 'Venue 1',
    date: '2025-12-05',
    startTime: '13:30',
    endTime: '14:15',
  },
];
