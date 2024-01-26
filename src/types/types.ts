export interface AnyDataWithIdFromName {
    name: string;
}

export interface IProject {
    id: string;
    name: string;
    title: string;
    role: string;
    imgUrl: string;
    description: string;
    url: string;
    urlTitle: string;
}

export interface ITeam {
    id: string;
    name: string;
    role: string;
    imgUrl?: string;
    gitUrl?: string;
    linkedInUrl?: string;
}
