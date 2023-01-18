import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Global } from '../global';

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
        Global.burger = document.getElementById("burger");
        Global.navContent = document.getElementById("navContent");
        Global.light = document.getElementById("light");
        Global.dark = document.getElementById("dark");

        if (window.matchMedia("(max-width: 1200px)").matches) {
            Global.toggleNav();
        }

        if (document.documentElement.getAttribute('data-theme') !== 'light') {
            void (Global.light != null && Global.light.classList.toggle('show'));
            void (Global.dark != null && Global.dark.classList.toggle('show'));
        }
    }

    onKeyEvent(route: string) {
        this.router.navigate([route], { relativeTo: this.route });
        this.closeNav();
    }

    toggleNav(): void {
        Global.toggleNav();
    }

    closeNav(): void {
        if (Global.navOpen && window.matchMedia("(max-width: 1200px)").matches) {
            Global.toggleNav();
        }
    }

    toggleTheme(): void {
        Global.toggleTheme();
    }

    currentPage(navItemTitle: string): boolean {
        return navItemTitle.toLowerCase() === Global.page.toLowerCase() ? true : false;
    }
}
