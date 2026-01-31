import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from "./components/nav/nav";
import { Footer } from "./components/footer/footer";
import { Home } from "./components/home/home";
import { About } from "./components/about/about";
import { Skills } from "./components/skills/skills";
import { Projects } from "./components/projects/projects";

@Component({
  selector: 'app-root',
  imports: [Nav, Footer, Home, About, Skills, Projects],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lab1');
}
