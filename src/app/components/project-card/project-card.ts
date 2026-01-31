import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-project-card',
    standalone: true,
    imports: [],
    templateUrl: './project-card.html',
    styleUrls: ['./project-card.css']
})
export class ProjectCard {
    @Input() project: any;
}
