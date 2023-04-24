import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate(840, style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate(100, style({ opacity: 0, transform: 'translateY(-50px)' }))
      ])
    ])
  ]
})
export class BlogComponent {

}
