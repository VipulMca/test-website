import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-website';
  txtOne: string = '';
  venueArray = [
    {
      type: 'When',
      Date: 'Saturday, June 12, 2021 at 4:00 PM',
      text: 'Reception to follow.',
    },
    {
      type: 'When',
      Date: 'Saturday, June 12, 2021 at 4:00 PM',
      text: 'Reception to follow.',
    },
    {
      type: 'When',
      Date: 'Saturday, June 12, 2021 at 4:00 PM',
      text: 'Reception to follow.',
    },
    {
      type: 'When',
      Date: 'Saturday, June 12, 2021 at 4:00 PM',
      text: 'Reception to follow.',
    },
  ];
  _album=[{
    image:'../assets/1.jpg'
  },
  {
    image:'../assets/blog-1.jpg'
  },
  {
    image:'../assets/3.jpeg'
  },
  {
    image:'../assets/4.jpg'
  },
  {
    image:'../assets/5.jpg'
  }, {
    image:'../assets/6.jpg'
  },
 
  ]
  constructor() {
    setTimeout(() => {
      this.txtOne = 'Lorem ipsum';
    }, 2 * 1000);
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
