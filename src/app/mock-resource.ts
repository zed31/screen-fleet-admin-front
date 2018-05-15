import { ResourceType, Resource } from './resource';

/** Array of mocked resources */
export const RESOURCES: Resource[] = [
    {
        RawId: '1',
        Name: 'FirstResource',
        InsertionDate: new Date(),
        UpdateTime: new Date(),
        Url: 'http://127.0.0.1:8887/img1.jpg',
        Type: ResourceType.Image
    },
    {
        RawId: '2',
        Name: 'SecondResource',
        InsertionDate: new Date(),
        UpdateTime: new Date(),
        Url: 'http://127.0.0.1:8887/img2.jpeg',
        Type: ResourceType.Image
    },
    {
        RawId: '3',
        Name: 'ThirdResource',
        InsertionDate: new Date(),
        UpdateTime: new Date(),
        Url: 'http://127.0.0.1:8887/img3.jpeg',
        Type: ResourceType.Image
    },
    {
        RawId: '4',
        Name: 'FourthResource',
        InsertionDate: new Date(),
        UpdateTime: new Date(),
        Url: 'https://www.youtube.com/embed/UceaB4D0jpo?autoplay=1',
        Type: ResourceType.Stream
    },
    {
        RawId: '5',
        Name: 'FifthResource',
        InsertionDate: new Date(),
        UpdateTime: new Date(),
        Url: 'http://127.0.0.1:8887/video1.mp4',
        Type: ResourceType.Video
    }
];
