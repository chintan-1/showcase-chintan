import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.css'
})

export class MySkillsComponent {
  skills:string[];
  constructor() {
    this.skills = ["Django", "Angular" ];
  }
}
