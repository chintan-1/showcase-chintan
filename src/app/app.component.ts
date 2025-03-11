import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutMeComponent } from "./about-me/about-me.component";
import { MySkillsComponent } from "./my-skills/my-skills.component";
import { MyProjectsComponent } from "./my-projects/my-projects.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutMeComponent, MySkillsComponent, MyProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
