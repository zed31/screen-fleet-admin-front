import { DBInterface } from './dbif';

/**
 * Class used to describe a TV
 * @class TV
 * @extends DBInterface
 */
export class TV extends DBInterface {

    /**
     * @constructor
     * @param rawId The RawId of the resource
     */
    constructor(rawId: string) {
        super(rawId);
    }

    Ip: string;
    Composition: string;
}
