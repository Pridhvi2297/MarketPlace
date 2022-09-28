import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: '/folder/Login', icon: 'log-in' },
    { title: 'Trending', url: '/folder/Trending', icon: 'trending-up' },
    { title: 'Books', url: '/folder/Books', icon: 'book' },
    { title: 'Home Accessories', url: '/folder/Home Accessories', icon: 'tv' },
    { title: 'Computer', url: '/folder/Computer', icon: 'laptop' },
    { title: 'Mobile', url: '/folder/Mobile', icon: 'phone-portrait' },
    { title: 'Automotive', url: '/folder/Automotive', icon: 'car' },
  ];
  public labels = ['Cart', 'Save Later', 'Previous Orders'];
  constructor() {}
}
