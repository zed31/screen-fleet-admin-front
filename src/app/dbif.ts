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


/**
 * @class ModelWrapper
 * Class used to wrap the model with the firebase storage key
 */
export class ModelWrapper {
    /**
     * @constructor
     * @param key The key initialization
     * @param model The model
     */
    constructor(public key: string, public model: DBInterface) {}
}
