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
  