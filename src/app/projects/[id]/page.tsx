'use client';

import { use } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { getProjectById } from '@/lib/projects';

type PageProps = {
  params: Promise<{ id: string }>;
};

export default function ProjectDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const project = getProjectById(id);

  if (!project) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">프로젝트를 찾을 수 없습니다</h1>
          <p className="text-muted-foreground mb-6">
            찾고 계신 프로젝트가 존재하지 않습니다.
          </p>
          <Button asChild>
            <Link href="/projects">프로젝트로 돌아가기</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/projects">
          <ArrowLeft className="mr-2 h-4 w-4" />
          프로젝트로 돌아가기
        </Link>
      </Button>

      <div className="mb-8">
        <div className="mb-4">
          <Badge variant="secondary">{project.category}</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">
          {project.title}
        </h1>
        <p className="text-xl text-muted-foreground">{project.description}</p>
      </div>

      <div className="mb-12 aspect-video w-full overflow-hidden rounded-lg">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-8">
          {project.longDescription && (
            <Card>
              <CardHeader>
                <CardTitle>프로젝트 소개</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
              </CardContent>
            </Card>
          )}

          {project.features && project.features.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>주요 기능</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-6">
          {project.technologies && project.technologies.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>기술 스택</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {(project.liveUrl || project.githubUrl) && (
            <Card>
              <CardHeader>
                <CardTitle>링크</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {project.liveUrl && (
                  <Button asChild variant="outline" className="w-full justify-start">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      라이브 사이트
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button asChild variant="outline" className="w-full justify-start">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
