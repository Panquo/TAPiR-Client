import type { DeckGrid } from "./DeckGrid";

export class DeckPage {
    name: string
    route: string
    grid: DeckGrid
    img?: string
    icon?: string

    constructor(name: string, route: string, grid: DeckGrid, img: null | string, icon: null | string) {
        this.name = name
        this.route = route
        this.grid = grid
        icon ? this.icon = icon : null
        img ? this.img = img : null
    }
}