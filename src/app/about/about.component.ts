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

    goToLink(url: string) {
        window.open(url, "_blank");
    }

    onKeyEvent(route: string) {
        this.router.navigate([route], { relativeTo: this.route.root });
    }
}
