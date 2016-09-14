import { Event } from "./models/event";
import { User } from "./models/user";

let event = new Event();
event.name = 'Testevent1';
event.movie = 'tt0903747';
event.type = 0;
event.host = new User();
event.host.firstname = 'Alexander';
event.host.lastname = 'Lill';
event.host.username = 'alexanderlill.al@googlemail.com';
event.maxGuests = 2;
event.price = 4;
event.comment = 'Awesome event!';
event.dateTime = new Date("Wed Mar 25 2017 01:00:00 GMT+0100 (CET)");
event.location = '48.133333, 11.566667';
event.isPublic = true;

export const EVENTS = [event];
