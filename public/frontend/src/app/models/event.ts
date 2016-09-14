import { User } from "./user";

export class Event {
    _id: string;
    name: string;
    movie: string;
    type: number;
    host: User;
    maxGuests: number;
    price: number;
    comment: string;
    dateTime: Date;
    location: string;
    isPublic: Boolean;

    static fromObject(object: Object): Event {
        let instance = Object.create(Event.prototype);
        return Object.assign(instance, object);
    }
}
