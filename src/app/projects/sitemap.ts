import { MetadataRoute } from 'next'
import { projectsData } from "../../components/projects-load/projects-data"
import { stringToURL } from "@/lib/project"

const BASE_URL = 'https://www.tech-vibe.agency'

export default function sitemap(): MetadataRoute.Sitemap {
  return projectsData.map((project) => ({
    url: `${BASE_URL}/projects/${stringToURL(project.name)}`,
    lastModified: new Date(),
    priority: 0.7,
  }))
};
