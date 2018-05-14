import { ResourceType, Resource } from './resource';

/** Array of mocked resources */
export const RESOURCES: Resource[] = [
    {
        RawId: '1',
        Name: 'FirstResource',
        InsertionDate: new Date(),
        UpdateTime: new Date(),
        Url: 'C:\Users\Clement\Documents\work\screen_fleet_admin\screen-fleet-admin-front\resource\img1.jpg',
        Type: ResourceType.Image
    },
    {
        RawId: '2',
        Name: 'SecondResource',
        InsertionDate: new Date(),
        UpdateTime: new Date(),
        Url: 'C:\Users\Clement\Documents\work\screen_fleet_admin\screen-fleet-admin-front\resource\img2.jpeg',
        Type: ResourceType.Image
    },
    {
        RawId: '3',
        Name: 'ThirdResource',
        InsertionDate: new Date(),
        UpdateTime: new Date(),
        Url: 'C:\Users\Clement\Documents\work\screen_fleet_admin\screen-fleet-admin-front\resource\img3.jpeg',
        Type: ResourceType.Image
    },
    {
        RawId: '4',
        Name: 'FourthResource',
        InsertionDate: new Date(),
        UpdateTime: new Date(),
        Url: 'https://www.youtube.com/watch?v=4t6rQDxJwno&list=RDE1foE6xq66k&index=9',
        Type: ResourceType.Video
    },
    {
        RawId: '5',
        Name: 'FifthResource',
        InsertionDate: new Date(),
        UpdateTime: new Date(),
        Url: 'https://www.youtube.com/watch?v=Gdg5HqX_vZE&index=8&list=RDE1foE6xq66k',
        Type: ResourceType.Stream
    }
];
