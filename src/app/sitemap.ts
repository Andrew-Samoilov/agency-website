import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.tech-vibe.agency',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://www.tech-vibe.agency/contact',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://www.tech-vibe.agency/projects',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },        
        {
            url: 'https://www.tech-vibe.agency/team',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://www.tech-vibe.agency/cookies',
            lastModified: new Date(),
            priority: 0.5,
        },
        {
            url: 'https://www.tech-vibe.agency/privacy',
            lastModified: new Date(),
            priority: 0.5,
        },
        {
            url: 'https://www.tech-vibe.agency/terms',
            lastModified: new Date(),
            priority: 0.5,
        },
    ]
}