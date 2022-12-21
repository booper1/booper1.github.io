import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Global } from '../global';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    root: any = document.querySelector(':root');
    season: number = -1;

    constructor(private router: Router,
        private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        const d = new Date();
        let month = d.getMonth();
        this.season = Math.floor(((month + 1) % 12) / 3);

        this.setSeasonTheme();
    }

    setSeasonTheme(): void {
        switch (this.season) {
            case 0: { // Winter
                this.root.style.setProperty('--logo-theme-bg', '#151c36');
                this.root.style.setProperty('--logo-theme-1', '#b390b8');
                this.root.style.setProperty('--logo-theme-2', '#b5e5e7');
                this.root.style.setProperty('--logo-theme-3', '#0d72a1');
                break;
            }
            case 1: { // Spring
                this.root.style.setProperty('--logo-theme-bg', '#075452');
                this.root.style.setProperty('--logo-theme-1', '#75d481');
                this.root.style.setProperty('--logo-theme-2', '#f9e830');
                this.root.style.setProperty('--logo-theme-3', '#f36870');
                break;
            }
            case 2: { // Summer
                this.root.style.setProperty('--logo-theme-bg', '#3e4a74');
                this.root.style.setProperty('--logo-theme-1', '#ffad22');
                this.root.style.setProperty('--logo-theme-2', '#6b9e17');
                this.root.style.setProperty('--logo-theme-3', '#0299b1');
                break;
            }
            case 3: { // Autumn
                this.root.style.setProperty('--logo-theme-bg', '#404040');
                this.root.style.setProperty('--logo-theme-1', '#ce1c00');
                this.root.style.setProperty('--logo-theme-2', '#fc7b00');
                this.root.style.setProperty('--logo-theme-3', '#4a7912');
                break;
            }
        }
    }

    seasonCycle(): void {
        this.season++;
        this.season = this.season % 4;
        this.setSeasonTheme();
    }

    onKeyEvent(route: string) {
        this.router.navigate([route], { relativeTo: this.route });
    }
}
