import { Component, Input, OnInit } from '@angular/core';
import { RootObject } from '../../shared/models/aboutMeList';
import aboutMe from '../../../assets/data/aboutMe.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Input() data: RootObject = aboutMe;

  constructor() { }

  ngOnInit() {
  }

}
