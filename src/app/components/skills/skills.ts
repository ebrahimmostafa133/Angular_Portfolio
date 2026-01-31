import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skills = [
    { name: 'HTML5 & CSS3', percent: 95, color: 'bg-primary' },
    { name: 'JavaScript (ES6+)', percent: 85, color: 'bg-warning text-dark' },
    { name: 'TypeScript', percent: 80, color: 'bg-info text-dark' },
    { name: 'Angular', percent: 85, color: 'bg-danger' },
    { name: 'React', percent: 50, color: 'bg-info' },
    { name: 'Bootstrap & Tailwind', percent: 95, color: 'bg-success' },
    { name: 'Git & GitHub', percent: 75, color: 'bg-secondary' },
  ];
}
