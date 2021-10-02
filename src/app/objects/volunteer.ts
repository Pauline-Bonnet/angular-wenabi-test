import { Initiative } from './initiative';
import { Entry, Profile } from "./profile";

export interface VolunteerIO {
    id: string;
    status: string;
    createdDate: Date;
    volunteerProfile: Profile;
    coordinatorProfile: Profile;
    initiative: Initiative;
    entries?: Entry[];
}

export class Volunteer {
    id: string;
    status: string;
    createdDate: Date;
    volunteerProfile: Profile;
    coordinatorProfile: Profile;
    initiative: Initiative;
    entries?: Entry[];

    constructor(props: Partial<VolunteerIO>) {
        this.id = props.id;
        this.status = props.status;
        this.createdDate = props.createdDate;
        this.volunteerProfile = props.volunteerProfile;
        this.coordinatorProfile = props.coordinatorProfile;
        this.initiative = props.initiative;
        this.entries = props.entries;
    }
}