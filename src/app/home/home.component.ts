import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Global } from '../global';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    constructor(private router: Router,
        private route: ActivatedRoute) {
    }

    seasonCycle(): void {
        Global.season++;
        Global.season = Global.season % 4;
        Global.setSeasonTheme();
    }
}
