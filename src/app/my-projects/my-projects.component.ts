import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  name: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-my-projects',
  imports: [NgFor],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.css'
})
export class MyProjectsComponent {
  projects: Project[];
  constructor() {
    this.projects = [{
      name: 'Project 1',
      description: "Allows users to manage their book collections and interact with a community of book\
                lovers, featuring secure user registration with JWT validation, email validation, and comprehensive book\
                management including borrowing and return approval.",
      technologies: ['Angular', 'Firebase']
    }, {
      name: 'Project 2',
      description: 'This is project 2',
      technologies: ['React', 'Node']
    }, {
      name: 'Project 3',
      description: 'This is project 3',
      technologies: ['Vue', 'MongoDB']
    }, {
      name: 'Project 2',
      description: 'This is project 2',
      technologies: ['React', 'Node']
    }, {
      name: 'Project 3',
      description: 'This is project 3',
      technologies: ['Vue', 'MongoDB']
    }
    , {
      name: 'Project 2',
      description: 'This is project 2',
      technologies: ['React', 'Node']
    }, {
      name: 'Project 3',
      description: 'This is project 3',
      technologies: ['Vue', 'MongoDB']
    }
  ]
  }
}
