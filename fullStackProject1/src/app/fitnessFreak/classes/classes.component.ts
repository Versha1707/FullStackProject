import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss'],
  animations: [
    trigger('slideAnimation', [
      transition(':increment', [
        style({ transform: 'translateX(100%)' }),
        animate('500ms ease-out', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-out', style({ transform: 'translateX(0%)' }))
      ])
    ])
  ]
})
export class ClassesComponent {

  constructor(private router:Router) {}

  cards = [
    { title: 'YOGA', content: 'Flexibilty | Mindful Transitions',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN33Vn0euUPaZy81EzEUeWneiudti6_bf3iw&s'}, 
    { title: 'ZUMBA', content: 'Plyo Agility | Endurance',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdrNvRkQqZDSvDsRohD5p9d9DrJwu2podLaw&s'},
    { title: 'AEROBICS', content: 'Core Strength | Fat Burn',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPGoXaCZBrepPiEV4ZJRWj6dbvH1cPCmTQkg&s' },
    { title: 'DANCE', content: 'Cardio | Endurance',image:'data:image/jpeg;base64,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' },
    { title: 'GYM', content: 'Muscle Gain | Strength',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLuftVtcw5vKSoQmiWPTl2p3Pr1sbbwzU6IA&s'},
  ];

  startIndex = 0;
  previousIndex = 0;

  get visibleCards() {
    return this.cards.slice(this.startIndex, this.startIndex + 3);
  }

  next() {
    if (this.startIndex + 3 < this.cards.length) {
      this.previousIndex = this.startIndex;
      this.startIndex++;
    }
  }

  previous() {
    if (this.startIndex > 0) {
      this.previousIndex = this.startIndex;
      this.startIndex--;
    }
  }

  explore(card:any){
    console.log("Card: ",card.title);

    switch(card.title){
      case "YOGA":
        this.router.navigate(['fitness/home/yoga'])
        break;
      case "GYM":
        this.router.navigate(['fitness/home/gym'])
        break;
      case "ZUMBA":
        this.router.navigate(['fitness/home/zumba'])
        break;
      case "AEROBICS":
        this.router.navigate(['fitness/home/aerobics'])
        break;
      case "DANCE":
        this.router.navigate(['fitness/home/dance'])
        break;
    }
  }

}
