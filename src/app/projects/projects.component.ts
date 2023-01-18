import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

    goToLink(url: string, newTab: boolean = true) {
        if (newTab) {
            window.open(url, "_blank");
        }
        else {
            window.open(url, "_self");
        }
    }
}
