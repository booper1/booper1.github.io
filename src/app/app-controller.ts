export class stateManager {
    public static author: string = "Booper_1";

    public static burger: HTMLElement | null;
    public static navContent: HTMLElement | null;
    public static main: HTMLElement | null;
    public static light: HTMLElement | null;
    public static dark: HTMLElement | null;
    public static navOpen: boolean = true;
    public static season: number = -1;

    public static page: string = "";

    public static toggleNav(): void {
        void (this.burger != null && this.burger.classList.toggle('cross'));
        void (this.navContent != null && this.navContent.classList.toggle('hide'));
        this.navOpen = !this.navOpen;

        this.main?.classList.remove('blur');
        void (this.main != null && this.navOpen && window.matchMedia("(max-width: 1200px)").matches && this.main.classList.add('blur'));
    }

    public static toggleTheme(): void {
        void (this.light != null && this.light.classList.toggle('show'));
        void (this.dark != null && this.dark.classList.toggle('show'));

        if (document.documentElement.getAttribute('data-theme') !== 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('data-theme', 'light');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('data-theme', 'dark');
        }
    }

    public static setSeasonTheme(): void {
        switch (this.season) {
            case 0: { // Winter
                document.documentElement.setAttribute('season-theme', 'winter');
                break;
            }
            case 1: { // Spring
                document.documentElement.setAttribute('season-theme', 'spring');
                break;
            }
            case 2: { // Summer
                document.documentElement.setAttribute('season-theme', 'summer');
                break;
            }
            case 3: { // Autumn
                document.documentElement.setAttribute('season-theme', 'autumn');
                break;
            }
        }
    }
}
