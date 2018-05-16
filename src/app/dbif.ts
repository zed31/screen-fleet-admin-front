/**
 * Class used as model reference for all others models
 * @class DBInterface
 */
export class DBInterface {

    /**
     * @constructor
     * @param rawId The rawId of the resource
     */
    constructor(rawId: string) {
        this.RawId = rawId;
    }

    RawId: string;
    Name: string;
    InsertionDate: Date;
    UpdateTime: Date;
}
