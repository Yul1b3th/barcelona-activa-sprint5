// escena.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { iStep } from '../../../interfaces/iStep.interface';
import { trigger, transition, query, style, animate, group } from '@angular/animations';

const left = [
  query(':enter, :leave', style({ position: 'absolute', width: '20rem' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(-200%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(200%)' }))], {
      optional: true,
    }),
  ]),
];

const right = [
  query(':enter, :leave', style({ position: 'absolute', width: '20rem%' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(200%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(-200%)' }))], {
      optional: true,
    }),
  ]),
];

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss',
  animations: [
    trigger('animSlider', [
      transition(':increment', right),
      transition(':decrement', left),
    ]),
  ],
})

export class EscenaComponent {
  counter: number = 0;
  @Input() onBoardingSteps: iStep[] = [];

  onNext() {
    if (this.counter != this.onBoardingSteps.length - 1) {
      this.counter++;
    }
  }

  onPrevious() {
    if (this.counter > 0) {
      this.counter--;
    }
  }

  // Método para cambiar a una frase específica al hacer clic en la boleta
  changeStep(index: number) {
    this.counter = index;
  }
}
