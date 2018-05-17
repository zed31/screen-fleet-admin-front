import { Asset } from './composition';

/**
 * @class ScreenFleetTV
 * Class used as model for the screen fleet API
 */
export class ScreenFleetTV {
    /**
     * @constructor
     * @param name The name of the tv
     * @param ip The Ip adress of the tv
     * @param html Html content of the tv
     * @param assets Asset of the tv
     */
    constructor(public name: string, public ip: string, public html: string,
                public assets: Asset[]) {}
}
