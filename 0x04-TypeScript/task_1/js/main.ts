export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee?: boolean;
    location: string;
    [index:string]: any;
}
export interface Directors extends Teacher {
    numberOfReports: number;
}

export interface printTeacherFunction {
    (firstName: string, lastName:string): string;
}

export function printTeacher(firstName:string, lastName:string) {
    return `${firstName[0]}.${lastName}`;
}

export interface StudentConstructor {
    firstName: string;
    lastName: string;
}

export interface StudentInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentInterface {
    firstName: string;
    lastName: string;

    constructor({firstName, lastName}: StudentConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string {
        return 'Currently working';
    }
    displayName(): string {
        return this.firstName;
    }
}
