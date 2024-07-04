import { MetadataRoute } from 'next'
import { teamData } from "../../components/team-load/team-data"
import { stringToURL } from "@/lib/project"

const BASE_URL = 'https://www.tech-vibe.agency'

export default function sitemap(): MetadataRoute.Sitemap {
  return teamData.map((member) => ({
    url: `${BASE_URL}/team/${stringToURL(member.name)}`,
    lastModified: new Date(),
    priority: 0.9,
  }))
};
