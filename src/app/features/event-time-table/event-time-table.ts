import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { Event, Venue, VENUES, DUMMY_EVENTS } from './data/dummy-data';

@Component({
  selector: 'app-event-time-table',
  imports: [MatTabsModule, CommonModule],
  templateUrl: './event-time-table.html',
  styleUrl: './event-time-table.css',
})
export class EventTimeTable implements OnInit {
  weekDays: { dayName: string; date: string }[] = [];
  venues: Venue[] = VENUES;
  events: Event[] = DUMMY_EVENTS;
  timeSlots: string[] = [];

  ngOnInit(): void {
    this.generateWeek();
    this.generateTimeSlots();
  }

  generateTimeSlots(): void {
    const startHour = 9;
    const endHour = 18;
    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const timeStr = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        this.timeSlots.push(timeStr);
      }
    }
  }

  getEventForSlot(date: string, time: string, venue: string): Event | null {
    return this.events.find(event => 
      event.date === date &&
      event.venue === venue && 
      this.isTimeInRange(time, event.startTime, event.endTime)
    ) || null;
  }

  isFirstSlotOfEvent(date: string, time: string, venue: string): boolean {
    const event = this.getEventForSlot(date, time, venue);
    if (!event) return false;
    return time === event.startTime;
  }

  getEventRowSpan(date: string, time: string, venue: string): number {
    const event = this.getEventForSlot(date, time, venue);
    if (!event) return 1;
    
    const startMinutes = this.timeToMinutes(event.startTime);
    const endMinutes = this.timeToMinutes(event.endTime);
    const duration = endMinutes - startMinutes;
    
    return duration / 15; // Each slot is 15 minutes
  }

  isTimeInRange(time: string, startTime: string, endTime: string): boolean {
    const timeMinutes = this.timeToMinutes(time);
    const startMinutes = this.timeToMinutes(startTime);
    const endMinutes = this.timeToMinutes(endTime);

    return timeMinutes >= startMinutes && timeMinutes < endMinutes;
  }

  timeToMinutes(time: string): number {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }

  generateWeek() {
    const startDate = new Date(); 
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);

      const dayName = currentDate.toLocaleDateString('en-US', {
        weekday: 'long',
      });
      const dateStr = currentDate.toLocaleDateString('en-CA'); 

      this.weekDays.push({ dayName, date: dateStr });
    }
  }
}
