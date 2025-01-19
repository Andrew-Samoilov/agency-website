import { projectsData } from "@/components/projects-load/projects-data";
import { teamData } from "@/components/team-load/team-data";

import { AnyDataWithIdFromName, IProject, ITeam } from "@/types/types";

export const stringToURL = (str: string) => {
    return str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[\W_]+/g, '-')
        .toLowerCase()
        .replace(/^-+|-+$/g, '');
}

export const getAllDataIds = <T extends AnyDataWithIdFromName>(
    data: T[]
  ): Array<{ id: string }> => {
    return data.map((item) => ({ id: stringToURL(item.name) }));
  };

// export const getAllDataIds = <T extends AnyDataWithIdFromName>(data: T[]): string[] => data.map(item => stringToURL(item.name));

// export const getAllDataIds = () => projectsData.map(post => stringToURL(post.name));

// normal version
// export default function getAllPostIds() {
//     const projectIds = projectsData.map(post => post.id);
//     // console.log(projectIds);
//     return projectIds;
// }

export const getProjectData = (postId: string): IProject | null => {
    const data = projectsData.find((post) => stringToURL(post.name) === postId.toString());
    // console.log(`post data`, data);
    return data ?? null;
}

export const getTeammateData = (postId: string): ITeam | null => {
    const data = teamData.find((post) => stringToURL(post.name) === postId.toString());
    // console.log(`team data`, data, postId);
    return data ?? null;
}
