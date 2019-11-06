import { Component, Input, OnInit } from '@angular/core';
import { RootObject } from '../../shared/models/aboutMeList';
import aboutMe from '../../../assets/data/aboutMe.json';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Input() data: RootObject = aboutMe;

  constructor() { }

  ngOnInit() {
  }

}
