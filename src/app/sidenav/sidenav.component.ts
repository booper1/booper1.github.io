import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { stateManager } from '../app-controller';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
    navItems: { title: string; icon: IconProp }[] = [
        { title: "Home", icon: "house"},
        { title: "About", icon: "user"},
        { title: "Projects", icon: "list-check"}
    ];

    constructor(private router: Router,
        private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        stateManager.burger = document.getElementById("burger");
        stateManager.navContent = document.getElementById("navContent");
        stateManager.light = document.getElementById("light");
        stateManager.dark = document.getElementById("dark");

        if (window.matchMedia("(max-width: 1200px)").matches) {
            stateManager.toggleNav();
        }

        if (document.documentElement.getAttribute('data-theme') !== 'light') {
            void (stateManager.light != null && stateManager.light.classList.toggle('show'));
            void (stateManager.dark != null && stateManager.dark.classList.toggle('show'));
        }
    }

    onKeyEvent(route: string) {
        this.router.navigate([route], { relativeTo: this.route });
        this.closeNav();
    }

    toggleNav(): void {
        stateManager.toggleNav();
    }

    closeNav(): void {
        if (stateManager.navOpen && window.matchMedia("(max-width: 1200px)").matches) {
            stateManager.toggleNav();
        }
    }

    toggleTheme(): void {
        stateManager.toggleTheme();
    }

    currentPage(navItemTitle: string): boolean {
        return navItemTitle.toLowerCase() === stateManager.page.toLowerCase() ? true : false;
    }
}
