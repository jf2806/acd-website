import { CommonModule } from '@angular/common';
import { startOfDay } from 'date-fns'
import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import { CalendarService } from '../../service/calender.service';
import { MatDialog } from '@angular/material/dialog';
import { EventDialogComponent } from '../event-dialog/event-dialog.component';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  ageClasses = ['Alle' ,'U12', 'U14', 'U16', 'U18', 'U20'];
  selectedAgeClass = 'Alle';

  isAgeClassDropdownOpen: boolean = false;
  events: any;

  constructor(
    private calendarService: CalendarService,
    private dialog: MatDialog
  ) {
    this.events = calendarService.events;
    this.calendarOptions.events = this.getFilteredEvents();
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    locale: 'de',
    height: '300px',
    contentHeight: 'auto',
    firstDay: 1,
    events: this.getFilteredEvents(),
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'ageClassDropdown'
    },
    customButtons: {
      ageClassDropdown: {
        text: this.getAgeClassButtonText(),
        click: () => {
          this.isAgeClassDropdownOpen = !this.isAgeClassDropdownOpen;
        }
      }
    },
    eventClick: this.handleEventClick.bind(this)
  }



  getFilteredEvents() {
    if(this.events) {
      return this.events.filter((event: any) =>
        event["ageClasses"].some((ageClass: any) => this.selectedAgeClass == ageClass)
      );
    } else {
      return [];
    }
    
  }

  onAgeClassChange(event: any) {
    this.selectedAgeClass = event.target.value;
    this.isAgeClassDropdownOpen = false;
    this.calendarOptions.events = this.getFilteredEvents();
    this.updateButtonText();
  }

  getAgeClassButtonText() {
    return `Altersklasse - ${this.selectedAgeClass}`;
  }

  updateButtonText() {
    const button = this.calendarOptions.customButtons?.['ageClassDropdown'];
    if(button) {
      button.text = this.getAgeClassButtonText();
    }
  }

  handleEventClick(e: any) {
    const event = e.event;

    this.dialog.open(EventDialogComponent, {
      data: {event}
    })
  }
}
