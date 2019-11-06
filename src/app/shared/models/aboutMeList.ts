export interface IAboutMe {
    name: string;
    occupation: string;
    description: string[];
}

export interface RootObject {
    aboutMe: IAboutMe;
}
