import { Component, OnInit } from '@angular/core';
import { stateManager } from '../app-controller';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    ngOnInit(): void {
        if (stateManager.main != null) {
            stateManager.main.scrollTop = 0;
        }
    }

    goToLink(url: string, newTab: boolean = true) {
        if (newTab) {
            window.open(url, "_blank");
        }
        else {
            window.open(url, "_self");
        }
    }
}
