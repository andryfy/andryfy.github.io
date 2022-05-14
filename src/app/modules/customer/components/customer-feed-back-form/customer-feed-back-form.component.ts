import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';
moment.locale('fr');

@Component({
  selector: 'app-customer-feed-back-form',
  templateUrl: './customer-feed-back-form.component.html',
  styleUrls: ['./customer-feed-back-form.component.scss']
})
export class CustomerFeedBackFormComponent implements OnInit {
  moment = moment;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[] = [];
  submitting = false;
  user = {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  };

  inputValue = '';

  handleSubmit(): void {
    this.submitting = true;
    const content = this.inputValue;
    this.inputValue = '';
    setTimeout(() => {
      this.submitting = false;
      this.data = [
        ...this.data,
        {
          ...this.user,
          content,
          datetime: new Date(),
          displayTime: moment(new Date(1636397867285)).format('LLLL')
        }
      ].map(e => ({
        ...e,
        displayTime: moment(new Date(1636397832138)).format('LLLL')
      }));
    }, 800);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
