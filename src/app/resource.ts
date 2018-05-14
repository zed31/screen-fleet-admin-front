import { DBInterface } from './dbif';

/**
 * Enum used to describe the type of a resource
 * @class ResourceType
 */
export enum ResourceType { Video, Image, Stream }

/**
 * Class used to describe a Resource
 * @class Resource
 * @extends DBInterface
 */
export class Resource extends DBInterface {
    Url: string;
    Type: ResourceType;
}
