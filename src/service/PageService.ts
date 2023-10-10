import { BaseAction, DeckAction } from './../model/DeckAction';
import { DeckPage } from './../model/DeckPage';
import * as fs from 'fs';
import { BaseGrid } from '../model/DeckGrid';
export class PageService {


    getAll(): DeckPage[] {
        const jsonString = fs.readFileSync('./src/sample/pages.json', 'utf-8');
        const jsonData = JSON.parse(jsonString);
        return jsonData.map((d: any) => new DeckPage(d.name, d.route, new BaseGrid(d.actions.map((a: string) => new BaseAction())), d.img, d.icon))
    }
}