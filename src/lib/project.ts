import { projectsData } from "@/components/projects-section/projects-load/projects-data";
import { teamData } from "@/components/team-section/team-load/team-data";

import { IProject, ITeam } from "@/types/types";

export const stringToURL = (str: string) => {
    return str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[\W_]+/g, '-')
        .toLowerCase()
        .replace(/^-+|-+$/g, '');
}

export const getAllDataIds = <T extends { name: string }>(data: T[]) => {
  return data.map((item) => ({ id: stringToURL(item.name) }));
};

export const getProjectData = (postId: string): IProject | null => {
  return projectsData.find((post) => stringToURL(post.name) === postId) ?? null;
};

export const getTeammateData = (postId: string): ITeam | null => {
    const data = teamData.find((post) => stringToURL(post.name) === postId.toString());
    // console.log(`team data`, data, postId);
    return data ?? null;
}
