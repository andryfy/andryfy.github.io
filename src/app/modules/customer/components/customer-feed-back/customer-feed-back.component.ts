import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';
moment.locale('fr');

@Component({
  selector: 'app-customer-feed-back',
  templateUrl: './customer-feed-back.component.html',
  styleUrls: ['./customer-feed-back.component.scss']
})
export class CustomerFeedBackComponent implements OnInit {
  moment = moment;

  data = [
    {
      author: 'Han Solo',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources' +
        '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      datetime:  new Date(1636397867285)
    },
    {
      author: 'Han Solo',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources' +
        '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      datetime: new Date(1636397832138)
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
