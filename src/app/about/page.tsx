'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Code, Palette, Zap, Users, Award, Target } from 'lucide-react';

const expertise = [
  { icon: Code, title: '프론트엔드 개발', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { icon: Palette, title: 'UI/UX 디자인', items: ['Figma', '디자인 시스템', '사용자 연구'] },
  { icon: Zap, title: '성능 최적화', items: ['최적화', 'SEO', '접근성'] },
];

const achievements = [
  { icon: Users, title: '50+', description: '만족한 클라이언트' },
  { icon: Award, title: '100+', description: '완료한 프로젝트' },
  { icon: Target, title: '5+', description: '년 경력' },
];

export default function About() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <Avatar className="mx-auto mb-6 h-32 w-32">
            <AvatarImage src="https://picsum.photos/200/200?random=profile" alt="프로필" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            소개
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            뛰어난 디지털 경험을 구축하는 데 전념하는 열정적인 웹 제작자
          </p>
        </div>

        <div className="space-y-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>자기소개</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                저는 아름답고 기능적이며 사용자 중심의 디지털 경험을 만드는 것을 좋아하는
                프리랜서 웹 제작자입니다. 프론트엔드 개발과 UI/UX 디자인 분야에서 수년간의
                경험을 바탕으로 비즈니스와 개인이 현대적인 웹 기술을 통해 비전을 현실로
                만들어가는 것을 돕고 있습니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>제 접근 방식</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                모든 프로젝트는 목표와 대상 고객을 이해하는 것부터 시작합니다.
                저는 시각적으로 매력적일 뿐만 아니라 성능이 뛰어나고 접근 가능하며
                비즈니스 목표와 일치하는 솔루션을 만드는 것을 믿습니다.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                협력이 핵심입니다. 저는 전체 과정에서 클라이언트와 긴밀히 협력하여
                투명성을 보장하고 기대를 뛰어넘는 결과를 제공합니다.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">전문 분야</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {expertise.map((area) => {
              const Icon = area.icon;
              return (
                <Card key={area.title}>
                  <CardHeader>
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {area.items.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">성과</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {achievements.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <Card key={achievement.title} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-3xl">{achievement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
