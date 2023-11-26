// src/app/components/home/home.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsService } from '../../services/steps.service';
import { iStep } from '../../../interfaces/iStep.interface';
import { OpenCloseComponent } from '../open-close/open-close.component';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { CardSliderComponent } from '../card-slider/card-slider.component';
import { EscenaComponent } from '../escena/escena.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    OpenCloseComponent,
    ImageSliderComponent,
    CardSliderComponent,
    EscenaComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  onBoardingSteps: iStep[] = [];

  constructor(private stepsService: StepsService) { }

  ngOnInit(): void {
    this.onBoardingSteps = this.stepsService.getOnBoardingSteps();
  }
}
