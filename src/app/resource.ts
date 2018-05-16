import { DBInterface } from './dbif';

/**
 * Class used to describe a Resource
 * @class Resource
 * @extends DBInterface
 */
export class Resource extends DBInterface {

    /**
     * @constructor
     * @param rawId The raw id of the resource
     */
    constructor(rawId: string) {
        super(rawId);
    }

    Url: string;
    Type: 'Image' | 'Video' | 'Stream';
}
