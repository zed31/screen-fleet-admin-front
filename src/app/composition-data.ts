const HORIZONTAL_ALIGMENT = 'id="horizontal-align"';
const VERTICAL_ALIGNMENT = 'id="vertical-align"';

/**
 * Class used to serialize a composition to a set of HTML element
 * @class CompositionData
 */
export class CompositionData {
    /** The Composition HTML element */
    private htmlElement: HTMLElement = null;

    /** Default border style of a div */
    private defaultBorderStyle = 'border: 2px solid black;';

    /** Default size of a div */
    private defaultDivSize = 'height: 600px; width: 100%;';

    /** Default size of a child div */
    private defaultChildDivSize = 'height: 100%; width: 100%;';

    /** Default overflow of a div */
    private defaultDivOverflow = 'overflow: hidden;';

    /** Cursor default attribute */
    private pointerCursor = 'cursor: pointer;';

    /** Default horizontal split */
    private horizontalSplit = 'display: grid; grid-template-rows: 1fr 1fr; ' +
                              this.defaultBorderStyle + ' ' + this.pointerCursor;

    /** Default vertical split */
    private verticalSplit = 'display: grid; grid-template-columns: 1fr 1fr; ' +
                            this.defaultBorderStyle + ' ' + this.pointerCursor;

    /** Default of child div style */
    private defaultDivStyle = this.defaultDivSize + ' ' +
                              this.defaultBorderStyle + ' ' + this.defaultDivOverflow;

    /** Default style of an inner divisition */
    private defaultDivChildStyle = this.defaultDivOverflow + ' ' + this.defaultBorderStyle;

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
     * @param parent The parent div of the element
     * @returns an HTMLElement that represents a division
     */
    private generateDivElement(id: string, parent: HTMLElement): HTMLElement {
        const element = document.createElement('div');
        element.setAttribute('id', id);
        element.setAttribute('style', this.defaultDivChildStyle + 'height: inherit;');
        element.innerHTML = 'Inner html zone';
        return element;
    }

    /**
     * Split an element by adding 2 new childs inside it
     * @param element The element being splitted
     */
    private splitElement(element: HTMLElement): HTMLElement {
        element.innerHTML = '';
        const firstChild = this.generateDivElement(element.id + '-inner-1', element);
        const secondChild = this.generateDivElement(element.id + '-inner-2', element);
        element.appendChild(firstChild);
        element.appendChild(secondChild);
        return element;
    }

    /**
     * Make an horizontal split inside the child composition
     * @param element The element being horizontally splitted
     * @returns the new HTMLElement with its childs
     */
    public splitHorizontal(element: HTMLElement): HTMLElement {
        element.style.cssText += this.horizontalSplit;
        element = this.splitElement(element);
        element.innerHTML = '';
        const firstChild = this.generateDivElement(element.id + '-inner-1', element);
        const secondChild = this.generateDivElement(element.id + '-inner-2', element);
        firstChild.setAttribute('style', this.defaultDivChildStyle + 'max-height: ' + (element.offsetHeight / 2));
        secondChild.setAttribute('style', this.defaultDivChildStyle + 'max-height: ' + (element.offsetHeight / 2));
        element.appendChild(firstChild);
        element.appendChild(secondChild);
        return element;
    }

    /**
     * Split an element in a vertical way
     * @param element The element being vertically splitted
     * @returns the splitted HTMLElement
     */
    public splitVertical(element: HTMLElement): HTMLElement {
        element.style.cssText += this.verticalSplit;
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
        frame.setAttribute('style', this.defaultChildDivSize);
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
        let child = this.htmlElement.querySelector('#' + element.id) as HTMLElement;

        if (!child) {
            child = this.htmlElement.id === element.id ? this.htmlElement : null;
            if (!child) {
                return null;
            }
        }

        child.innerHTML = '<img id="' + element.id + '-inner-resource" src="' + url + '"" /></div>';
        return child;
    }

    /**
     * Insert a video to a specific element
     * @param element The html element where the video is inserted
     * @param url the url of the video
     */
    public insertVideoToElement(element: HTMLElement, url: string): HTMLElement {
        const child = this.htmlElement.querySelector('#' + element.id) as HTMLElement;

        if (!child) {
            return null;
        }

        child.innerHTML = '<video style="height: 100%; width: 100%" autoplay controls>' +
                          '<source src="' + url + '" type="video/mp4"></video>';
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
        element.innerHTML = frame.outerHTML;
        return element;
    }

    /**
     * Replace the last element by the new one to the general DOM
     * @param element The new inserted element
     * @returns the replaced HTMLElement
     */
    public replaceElementWith(element: HTMLElement): HTMLElement {
        this.htmlElement.replaceChild(
            element,
            this.htmlElement.querySelector('#' + element.id)
        );
        return element;
    }
}
