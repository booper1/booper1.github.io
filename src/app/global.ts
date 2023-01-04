export class Global {
    public static author: string = "Booper_1";

    public static topBun: HTMLElement | null;
    public static patty: HTMLElement | null;
    public static botBun: HTMLElement | null;
    public static sidebar: HTMLElement | null;
    public static nav: HTMLElement | null;
    public static main: HTMLElement | null;
    public static light: HTMLElement | null;
    public static dark: HTMLElement | null;
    public static navOpen: boolean = true;
    public static season: number = -1;
    public static root: any = document.querySelector(':root');

    public static page: string = "";

    public static toggleNav(): void {
        Global.topBun != null ? Global.topBun.classList.toggle('angle') : console.log("Undefined");
        Global.patty != null ? Global.patty.classList.toggle('hide') : console.log("Undefined");
        Global.botBun != null ? Global.botBun.classList.toggle('angle') : console.log("Undefined");
        Global.sidebar != null ? Global.sidebar.classList.toggle('open') : console.log("Undefined");
        Global.nav != null ? Global.nav.classList.toggle('show') : console.log("Undefined");
        Global.main != null ? Global.main.classList.toggle('blur') : console.log("Undefined");
        Global.navOpen = !Global.navOpen;
    }

    public static toggleTheme(): void {
        Global.light != null ? Global.light.classList.toggle('show') : console.log("Undefined");
        Global.dark != null ? Global.dark.classList.toggle('show') : console.log("Undefined");

        if (document.documentElement.getAttribute('data-theme') !== 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('data-theme', 'light');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('data-theme', 'dark');
        }
    }

    public static isBlurred(): boolean {
        if (window.matchMedia("(max-width: 1200px)").matches && Global.main?.classList.contains("blur")) {
            return true;
        }
        return false;
    }

    public static setSeasonTheme(): void {
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
}
