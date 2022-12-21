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
}
