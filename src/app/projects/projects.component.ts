import { Component, OnInit } from '@angular/core';
import { stateManager } from '../app-controller';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit  {
    ngOnInit(): void {
        if (stateManager.main != null) {
            stateManager.main.scrollTop = 0;
        }
    }

    goToLink(url: string) {
        window.open(url, "_blank");
    }
}
