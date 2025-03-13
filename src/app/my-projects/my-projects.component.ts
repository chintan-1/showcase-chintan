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
      name: 'Chat Bot',
      description: 'Developed a RESTful chatbot API using FastAPI and integrated Google Gemini via LangChain for dynamic query\
handling',
      technologies: ['React', 'Node']
    }, 
    {
      name: 'Book Social Network',
      description: "Allows users to manage their book collections and interact with a community of book\
                lovers, featuring secure user registration with JWT validation, email validation, and comprehensive book\
                management including borrow,ing and return approval.",
      technologies: ['Angular', 'Firebase']
    },
    {
      name: 'DiscussIt',
      description: 'Crafted user authentication features covering registration, verification, and session management with JWT validation.\
Implemented REST APIs for efficient management of posts, comments, votes, alongside intuitive frontend components,\
for great user experience',
      technologies: ['Vue', 'MongoDB']
    }
  ]
  }
}
