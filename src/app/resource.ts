import { DBInterface } from './dbif';

/**
 * Class used to describe a Resource
 * @class Resource
 * @extends DBInterface
 */
export class Resource extends DBInterface {
    Url: string;
    Type: 'Image' | 'Video' | 'Stream';
}
