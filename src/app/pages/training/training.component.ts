import { Component } from '@angular/core';
import { AppdataService } from '../../service/appdata.service';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [],
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss'
})
export class TrainingComponent {
  trainingData: any;

  constructor(
    private appdata: AppdataService
  ) {
    this.trainingData = appdata.trainingData;
  }
}
