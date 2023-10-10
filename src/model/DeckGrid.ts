import type { DeckAction } from "./DeckAction"

export abstract class DeckGrid {
    abstract layout: string
    actions: DeckAction[]

    constructor(actions: DeckAction[]) {
        this.actions = actions
    }
}

export class BaseGrid extends DeckGrid {
    layout: string = 'base';
}