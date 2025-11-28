"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2 } from "lucide-react";

const dummyProjects = [
  {
    id: "1",
    title: "이커머스 플랫폼",
    status: "발행됨",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    title: "디자인 시스템",
    status: "발행됨",
    createdAt: "2024-01-10",
  },
  {
    id: "3",
    title: "모바일 앱",
    status: "초안",
    createdAt: "2024-01-20",
  },
];

export default function Admin() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-2">
            관리자 대시보드
          </h1>
          <p className="text-muted-foreground">
            포트폴리오 콘텐츠와 프로젝트를 관리하세요
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          새 프로젝트
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>전체 프로젝트</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{dummyProjects.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>발행됨</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {dummyProjects.filter((p) => p.status === "발행됨").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>초안</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {dummyProjects.filter((p) => p.status === "초안").length}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>프로젝트</CardTitle>
          <CardDescription>포트폴리오 프로젝트를 관리하세요</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {dummyProjects.map((project) => (
              <div
                key={project.id}
                className="flex items-center justify-between border-b pb-4 last:border-0"
              >
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{project.title}</h3>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        project.status === "발행됨" ? "default" : "secondary"
                      }
                    >
                      {project.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {project.createdAt}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
