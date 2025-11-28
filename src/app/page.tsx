"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";
import { getFeaturedProjects } from "@/lib/projects";

const featuredProjects = getFeaturedProjects(3);

const skills = [
  {
    icon: Code,
    title: "프론트엔드 개발",
    description: "React, Next.js, TypeScript",
  },
  {
    icon: Palette,
    title: "UI/UX 디자인",
    description: "Figma, 디자인 시스템",
  },
  {
    icon: Zap,
    title: "성능 최적화",
    description: "최적화 및 모범 사례",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="container mx-auto px-4 md:px-6 py-24 md:py-32">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Creative Web Solutions
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Building modern, responsive, and user-friendly web experiences that
            drive results.
          </p>
          <div className="flex gap-4 mt-6">
            <Button asChild size="lg">
              <Link href="/projects">프로젝트 보기</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">문의하기</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            주요 프로젝트
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            전문성과 창의성을 보여주는 최근 작업 모음
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.thumbnail || project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-muted px-3 py-1 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button asChild variant="ghost" className="w-full">
                  <Link href={`/projects/${project.id}`}>
                    자세히 보기 <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">모든 프로젝트 보기</Link>
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            기술 및 전문성
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            모든 프로젝트에 제공하는 것들
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <Card key={skill.title}>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <Card className="bg-primary text-primary-foreground">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">
              프로젝트를 시작할 준비가 되셨나요?
            </CardTitle>
            <CardDescription className="text-primary-foreground/80">
              함께 비전을 현실로 만들어봅시다
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">연락하기</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
