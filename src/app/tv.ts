import { DBInterface } from './dbif';
import { Asset } from './composition';

/**
 * @class ScreenFleetTV
 * Class used to handle screen fleet API
 */
export class ScreenFleetTV {
    /**
     * @constructor
     * @param name The name of the tv
     * @param ip The IP adress of the tv
     * @param html The html content of the TV
     * @param assets The asset list of the TV
     */
    constructor(name: string, ip: string, html: string, assets: Asset[]) {}
}

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
    Assets: Asset[];
}
