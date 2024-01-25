import { projectsData } from "@/components/projects-load/projects-data";

interface Project {
    id: string;
    name: string;
    title: string;
    role: string;
    imgUrl: string;
    description: string;
    url: string;
    urlTitle: string;
}

export const stringToURL = (str: string) => {
    return str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[\W_]+/g, '-')
        .toLowerCase()
        .replace(/^-+|-+$/g, '');
}

export const getAllPostIds = () => projectsData.map(post => stringToURL(post.name));
// normal version
// export default function getAllPostIds() {
//     const projectIds = projectsData.map(post => post.id);
//     // console.log(projectIds);
//     return projectIds;
// }

export const getPostData = (postId: string): Project | null => {
    const postData = projectsData.find((post) => stringToURL(post.name) === postId.toString());
    // console.log(`post data`, postData);
    return postData ?? null;
}
