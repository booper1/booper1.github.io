import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { stateManager } from './app-controller';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private router: Router) {
    }

    ngOnInit(): void {
        stateManager.main = document.getElementById("main");

        const d = new Date();
        let month = d.getMonth();
        stateManager.season = Math.floor(((month + 1) % 12) / 3);

        stateManager.setSeasonTheme();

        document.documentElement.setAttribute('data-theme', 'light');
        if (localStorage.getItem('data-theme') === null) {
            localStorage.setItem('data-theme', 'light');
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                stateManager.toggleTheme();
            }
        }
        else {
            if (localStorage.getItem('data-theme') === 'dark') {
                stateManager.toggleTheme();
            }
        }
    }

    toggleNav(): void {
        stateManager.toggleNav();
    }

    checkBlur(): void {
        if (stateManager.main?.classList.contains("blur")) {
            stateManager.toggleNav();
        }
    }

    changeOfRoutes(event: any): void {
        stateManager.page = this.router.url.substring(1);
        if (stateManager.page === "") {
            stateManager.page = "home";
        }
    }

    onResize(event: any): void {
        if (stateManager.navOpen && window.matchMedia("(max-width: 1200px)").matches) {
            stateManager.toggleNav();
        }
        else if (!stateManager.navOpen && !window.matchMedia("(max-width: 1200px)").matches) {
            stateManager.toggleNav();
        }
    }
}
