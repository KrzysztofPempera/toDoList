export interface NavLink {
    name: string;
    routerLink?: string;
}

export const navLinks: NavLink[] = [
    {
        name: 'Home',
        routerLink: "/"
    },
    {
        name: 'Login',
        routerLink: '/login'
    },
    {
        name: 'Logout'
    },
    {
        name: 'Register',
        routerLink: '/register'
    }
]
