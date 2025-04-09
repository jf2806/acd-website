import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-event-dialog',
  standalone: true,
  imports: [MatIconModule, DatePipe, CommonModule],
  templateUrl: './event-dialog.component.html',
  styleUrl: './event-dialog.component.scss',
  providers: [DatePipe]
})
export class EventDialogComponent {
  private datePipe = inject(DatePipe);
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  formatDate(date: any) {
    return this.datePipe.transform(date, 'dd.MM.yyyy') + ' ' + this.datePipe.transform(date, 'HH:mm');
  }
}
