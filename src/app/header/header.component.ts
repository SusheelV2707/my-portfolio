import { Component, Input, OnInit } from '@angular/core';
import { RootObject } from '../shared/models/aboutMeList';
import aboutMe from '../../assets/data/aboutMe.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() data: RootObject = aboutMe;

  constructor() { }

  ngOnInit() {
  }

}
