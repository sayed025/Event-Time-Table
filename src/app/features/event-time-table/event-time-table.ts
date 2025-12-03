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

  ngOnInit(): void {
    this.generateWeek();
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
