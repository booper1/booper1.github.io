import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {
    constructor(private router: Router,
        private route: ActivatedRoute) {
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
