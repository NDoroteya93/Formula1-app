export interface IDrivers {
    Url: string;
    FirstName: string;
    LastName:string;
    Nationality: string;
    Position: number;
    Points: number;
    Wins: number;
    TeamName: string;
    Constructor: string;
}

export interface IDriverDetails {
    code: string;
    dateOfBirth: string;
    driverId: string;
    familyName?: string;
    givenNam: string;
    nationality: string;
    permanentNumber: string;
    url:string;
}

export interface IConstructors{ 
    constructorId: string;
    name:string;
    nationality: string;
    url:string;
}

export interface IDriverStandings{
    Constructors: IConstructors
    Driver:IDriverDetails
}