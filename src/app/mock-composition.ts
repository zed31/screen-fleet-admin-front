import { Composition } from './composition';

export const COMPOSITIONS: Composition[] = [
    {
        RawId: '1',
        Name: 'First composition',
        InsertionDate: new Date(),
        UpdateTime: new Date(),
        HtmlContent: '<div id="first-data-inside" style="display: grid; max-height: 400px; height: 400px"><div id="one" style="border: 2px solid black; max-height: 600px; height: 600px; overflow: hidden;">Hello World!</div></div>'
    },
    {
        RawId: '2',
        Name: 'Second composition',
        InsertionDate: new Date(),
        UpdateTime: new Date(),
        HtmlContent: '<div id="first-data-inside" style="display: grid"> <h1>Hello World!</h1> </div>'
    },
    {
        RawId: '3',
        Name: 'Third composition',
        InsertionDate: new Date(),
        UpdateTime: new Date(),
        HtmlContent: '<div id="first-data-inside" style="display: grid"> <h1>Hello World!</h1> </div>'
    }
];
