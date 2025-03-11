import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  imports: [NgFor],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.css'
})

export class MySkillsComponent {
  skills:string[];
  constructor() {
    this.skills = ["Django", "Angular", "Typescript", "HTML", "CSS", "Javascript", "Python", "SOLID Priciples", "Design Pattern", "Google Cloud Platform (GCP)", "Terraform", "kafka", "Docker(Beginner)", "Kubernetes (Beginner)", "CI/CD Pipeline", "Data Structure and algorithms", "Object-Oriented Programming", "Communication", "Analytical Thinking", "Detail Oriented"];
  }
}
