export interface NavbarData {
    index?: number
    path: string
    icon?: string
    label: string
}

export const navbarData: NavbarData[] = [

    {
        index: 0,
        path: 'dashboard',
        icon:'fal fa-house',
        label:'Dashboard'
    },

    {
        index: 1,
        path: 'alumnos',
        icon:'fal fa-users',
        label:'Alumnos'
    }
]