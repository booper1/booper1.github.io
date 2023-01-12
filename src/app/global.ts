export class Global {
    public static author: string = "Booper_1";

    public static burger: HTMLElement | null;
    public static navContent: HTMLElement | null;
    public static main: HTMLElement | null;
    public static light: HTMLElement | null;
    public static dark: HTMLElement | null;
    public static navOpen: boolean = true;
    public static season: number = -1;
    public static root: any = document.querySelector(':root');

    public static page: string = "";

    public static toggleNav(): void {
        void (Global.burger != null && Global.burger.classList.toggle('cross'));
        void (Global.navContent != null && Global.navContent.classList.toggle('hide'));
        Global.navOpen = !Global.navOpen;

        Global.main?.classList.remove('blur');
        void (Global.main != null && Global.navOpen && window.matchMedia("(max-width: 1200px)").matches && Global.main.classList.add('blur'));
    }

    public static toggleTheme(): void {
        void (Global.light != null && Global.light.classList.toggle('show'));
        void (Global.dark != null && Global.dark.classList.toggle('show'));

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
