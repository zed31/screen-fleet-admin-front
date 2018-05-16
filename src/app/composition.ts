import { DBInterface } from './dbif';

/**
 * Composition model
 * @class Composition
 */
export class Composition extends DBInterface {

    /**
     * @constructor
     * @param rawId The raw id of the model
     */
    constructor(rawId: string) {
        super(rawId);
    }

    HtmlContent: string;
}
