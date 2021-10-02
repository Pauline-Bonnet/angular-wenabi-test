export class Profile {
    firstname: string;
    lastname: string;
    company?: Company;
}

export class Company {
    name: string;
}

export class Entry  {
    dateBegin: string;
    dateEnd: string;
}