import { Component } from '@angular/core';
import { ProjectCard } from '../project-card/project-card';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = [
    {
      title: 'Social Media App',
      description: 'A social networking platform with real-time updates and user interactions.',
      image: '1.png',
      link: 'https://social-g7h6qmykg-ebrahim-mostafas-projects.vercel.app'
    },
    {
      title: 'E-commerce Project',
      description: 'Full-featured online store with product browsing, cart management, and checkout process.',
      image: '7.png',
      link: 'https://heroic-semifreddo-f8b898.netlify.app/'
    },
    {
      title: 'Note Project',
      description: 'Online note-taking app with CRUD functionality to create, edit, and delete notes.',
      image: '2.png',
      link: 'https://note-page-uqwi-46ucbsa65-ebrahim-mostafas-projects.vercel.app/'
    },
    {
      title: 'Bookmarker',
      description: 'CRUD app to manage and organize favorite websites using local storage.',
      image: '3.png',
      link: 'https://ebrahimmostafa133.github.io/Frontend-Diploma/JS-Assignment3/'
    },
    {
      title: 'Weather App',
      description: 'Fetches and displays real-time weather data from an external API.',
      image: '4.png',
      link: 'https://ebrahimmostafa133.github.io/Frontend-Diploma/JS-Assignment5/'
    },
    {
      title: 'Mealify',
      description: 'Responsive restaurant website showcasing menu items and gallery.',
      image: '5.png',
      link: 'https://ebrahimmostafa133.github.io/Frontend-Diploma/Assignment6/'
    },
    {
      title: 'Quote Generator',
      description: 'Random quote fetcher application using API integration.',
      image: '6.png',
      link: 'https://ebrahimmostafa133.github.io/Frontend-Diploma/JS-Assignment2/'
    }
  ];
}
