import { Card } from '@/components/cards/Card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, ExternalLink, Users } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image'
import React from 'react'
import projects from './projects';

export type Project = {
    id: React.Key;
    image: {
        src: string | StaticImport;
        alt: string;
    }
    duration: string;
    teamSize: string;
    category: string;
    title: string;
    subtitle: string;
    description: string;
    results: {
        value: string;
        metric: string;
        description: string;
    }[];
    technologies: string[];
    testimonial?: {
        text: string;
        author: string;
        position: string;
    }
    externalLink?: string;
}

interface ProjectShowcaseProps {
    index: number
    project: Project
}

export function ProjectShowcaseList() {
    const locale = useLocale()
    const localizedProjects = projects.get(locale || 'en') || []
    return (
        <div className="flex w-full flex-col space-y-20">
            {localizedProjects.map((project, index) => (
                <ProjectShowcase
                    key={project.id}
                    index={index}
                    project={project}
                />
            ))}
        </div>
    )
}

export function ProjectShowcase({ index, project }: ProjectShowcaseProps) {

    const t = useTranslations("portfolio.projects");

    return (
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Project Image */}
            <div className="relative">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group border border-accent">
                    <Image
                        src={project.image.src}
                        alt={project.image.alt}
                        className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center gap-4 text-white text-sm">
                            <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {project.duration}
                            </div>
                            <div className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                {project.teamSize}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
            </div>

            {/* Project Content */}
            <div className={`space-y-8 ${index % 2 === 1 ? "lg:row-start-1" : ""}`}>
                <div>
                    <Badge variant="outline" className="mb-4">
                        {project.category}
                    </Badge>
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-lg text-primary font-semibold mb-4">{project.subtitle}</p>
                    <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-3 gap-6">
                    {project.results.map((result, idx) => (
                        <Card key={idx} className="p-4 text-center hover:shadow-lg transition-shadow gap-2">
                            <div className="text-2xl font-bold text-primary">{result.value}</div>
                            <div className="text-sm font-semibold text-foreground mb-1">{result.metric}</div>
                            <div className="text-xs text-muted-foreground">{result.description}</div>
                        </Card>
                    ))}
                </div>

                {/* Technologies */}
                <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">{`${t("technologies_used")}:`}</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Testimonial */}
                {project.testimonial && (
                    <Card className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-l-4 border-primary">
                        <blockquote className="text-foreground italic mb-4">&quot;{project.testimonial.text}&quot;</blockquote>
                        <div>
                            <div className="font-semibold text-foreground">{project.testimonial.author}</div>
                            <div className="text-sm text-muted-foreground">{project.testimonial.position}</div>
                        </div>
                    </Card>
                )}

                {/* CTA */}
                <div className="flex gap-4">
                    <Button size="lg" className="rounded-md" disabled>
                        {t("view_case_study")}
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-md bg-transparent cursor-pointer" asChild disabled={!project.externalLink}>
                        <a href={project.externalLink} target='_blank'>
                            <ExternalLink className="w-4 h-4 mr-2" />
                            {t("view_website")}
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    )
}
