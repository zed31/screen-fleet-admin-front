import { DBInterface } from './dbif';

/**
 * @class Assets
 * Class used to maintain assets inside the composition
 */
export class Asset {
    /**
     * @constructor
     * @param name The name of the asset
     * @param link The link of the asset
     */
    constructor(public name: string, public link: string) {}
}

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
    assets: Asset[] = [];
}
