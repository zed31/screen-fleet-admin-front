const HORIZONTAL_ALIGMENT = 'id="horizontal-align"';
const VERTICAL_ALIGNMENT = 'id="vertical-align"';

/**
 * Class used to serialize a composition to a set of HTML element
 * @class CompositionData
 */
export class CompositionData {
    /** The Composition HTML element */
    private htmlElement: HTMLElement = null;

    /** Default of child div style */
    private defaultDivStyle = 'height: 600px; border: 2px solid black;' +
                            ' max-width: 100%; width: 100%; overflow: hidden';

    /**
     * Constructor of the CompositionData class
     * @constructor
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

    /**
     * Generate a div element
     * @param id The id of the element (make sure it's an unique one)
     * @returns an HTMLElement that represents a division
     */
    private generateDivElement(id: string): HTMLElement {
        const element = document.createElement('div');
        element.setAttribute('id', id);
        element.setAttribute('style', 'border: 2px solid; width: 100%; max-height: 100%; cursor: pointer; overflow: hidden');
        element.innerHTML = 'Inner html clickable';
        return element;
    }

    /**
     * Split an element by adding 2 new childs inside it
     * @param element The element being splitted
     */
    private splitElement(element: HTMLElement): HTMLElement {
        const firstChild = this.generateDivElement(element.id + '-inner-1');
        const secondChild = this.generateDivElement(element.id + '-inner-2');
        element.appendChild(firstChild).appendChild(secondChild);
        return element;
    }

    /**
     * Make an horizontal split inside the child composition
     * @param element The element being horizontally splitted
     * @returns the new HTMLElement with its childs
     */
    public splitHorizontal(element: HTMLElement): HTMLElement {
        element.setAttribute('style', 'display: grid; grid-template-rows: 1fr 1fr; overflow: hidden');
        element = this.splitElement(element);
        return element;
    }

    /**
     * Split an element in a vertical way
     * @param element The element being vertically splitted
     * @returns the splitted HTMLElement
     */
    public splitVertical(element: HTMLElement): HTMLElement {
        element.setAttribute('style', 'display: grid; grid-template-columns: 1fr 1fr; overflow: hidden');
        element = this.splitElement(element);
        return element;
    }

    /**
     * Generate a frame element
     * @param url The url of the Frame
     * @returns an HTMLElement that represents a frame
     */
    private createHTMLFrame(url: string): HTMLElement {
        const frame = document.createElement('iframe');
        const frameDiv = document.createElement('div');
        frame.setAttribute('src', url);
        frame.setAttribute('frameborder', '0');
        frameDiv.setAttribute('style', this.defaultDivStyle);
        frameDiv.appendChild(frame);
        return frameDiv;
    }

    /**
     * Insert an image inside the specific element
     * @param element The element where the image is inserted
     * @param url The url of the image
     * @returns an HTMLElement with the image inside it
     */
    public insertImageToElement(element: HTMLElement, url: string): HTMLElement {
        const child = this.htmlElement.querySelector('#' + element.id) as HTMLElement;

        if (!child) {
            return null;
        }

        child.innerHTML = '<img src="' + url + '" style="max-width: 100%; height: 100%" />';
        return child;
    }

    /**
     * Insert a video stream in a speicified HTMLElement
     * @param element The element where the video is inserted
     * @param url The url of the video stream
     * @returns An HTMLElement with the frame set
     */
    public insertStreamVideo(element: HTMLElement, url: string): HTMLElement {
        const frame = this.createHTMLFrame(url);
        frame.setAttribute('id', element.id);
        this.htmlElement.replaceChild(frame, element);
        return frame;
    }
}
