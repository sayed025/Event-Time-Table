import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-time-table',
  imports: [MatTabsModule, CommonModule],
  templateUrl: './event-time-table.html',
  styleUrl: './event-time-table.css',
})
export class EventTimeTable {
  weekDays: { dayName: string; date: string }[] = [];

  ngOnInit(): void {
    this.generateWeek();
  }

  generateWeek() {
    const startDate = new Date('2025-12-01'); // Week start
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
