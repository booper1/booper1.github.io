import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Global } from './global';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private router: Router) {
    }

    ngOnInit(): void {
        Global.main = document.getElementById("main");

        const d = new Date();
        let month = d.getMonth();
        Global.season = Math.floor(((month + 1) % 12) / 3);

        Global.setSeasonTheme();

        document.documentElement.setAttribute('data-theme', 'light');
        if (localStorage.getItem('data-theme') === null) {
            localStorage.setItem('data-theme', 'light');
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                Global.toggleTheme();
            }
        }
        else {
            if (localStorage.getItem('data-theme') === 'dark') {
                Global.toggleTheme();
            }
        }
    }

    toggleNav(): void {
        Global.toggleNav();
    }

    checkBlur(): void {
        if (Global.main?.classList.contains("blur")) {
            Global.toggleNav();
        }
    }

    changeOfRoutes(event: any): void {
        Global.page = this.router.url.substring(1);
        if (Global.page === "") {
            Global.page = "home";
        }
    }

    onResize(event: any): void {
        if (Global.navOpen && window.matchMedia("(max-width: 1200px)").matches) {
            Global.toggleNav();
        }
        else if (!Global.navOpen && !window.matchMedia("(max-width: 1200px)").matches) {
            Global.toggleNav();
        }
    }
}
