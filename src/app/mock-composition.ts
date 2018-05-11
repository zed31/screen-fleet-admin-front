import { Composition } from './composition';

export const COMPOSITIONS: Composition[] = [
    {
        RawId: '1',
        Name: 'First composition',
        InsertionDate: new Date(),
        UpdateTime: new Date(),
        HtmlContent: '<div id="first-data-inside" style="display: grid" ><div style="one" >Hello World!</div ></div >'
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
