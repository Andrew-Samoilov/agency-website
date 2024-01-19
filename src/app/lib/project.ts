import { projectsData } from "@/components/projects-load/projects-data";

interface Project {
    id: string;
    name: string;
    title: string;
    description: string;
    url: string;
    urlTitle: string;
}

export const getAllPostIds = () => projectsData.map(post => post.id);
// normal version
// export default function getAllPostIds() {
//     const projectIds = projectsData.map(post => post.id);
//     // console.log(projectIds);
//     return projectIds;
// }

export const getPostData = (postId: string): Project | null => {
    const postData = projectsData.find((post) => post.id.toString() === postId.toString());
    // console.log(`post data`, postData);
    return postData ?? null;
}
