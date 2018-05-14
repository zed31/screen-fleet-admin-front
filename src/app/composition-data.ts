const HORIZONTAL_ALIGMENT = 'id="horizontal-align"';
const VERTICAL_ALIGNMENT = 'id="vertical-align"';

/** Class used to serialize a composition to a set of HTML element */
export class CompositionData {
    /** The Composition HTML element */
    private htmlElement: HTMLElement = null;

    /**
     * Constructor of the CompositionData class
     * @param htmlData The composition as string data
     */
    constructor(private htmlData: string) {
        this.htmlElement = document.createElement('div');
        this.htmlElement.innerHTML = htmlData;
        this.htmlElement = this.htmlElement.firstChild as HTMLElement;
    }

    /**
     * @returns a string that contains the innerData of the composition
     */
    public getData(): HTMLElement {
        return this.htmlElement;
    }

    /**
     * @returns A string containing the whole HTMLElement of the composition
     */
    public getCompositionAsString(): string {
        return this.htmlElement.outerHTML;
    }
}
