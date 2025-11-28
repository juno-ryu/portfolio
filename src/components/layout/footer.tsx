'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">포트폴리오</h3>
            <p className="text-sm text-muted-foreground">
              창의적인 작품과 전문성을 선보입니다.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">빠른 링크</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  홈
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  소개
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground">
                  프로젝트
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  연락처
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">연락처</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>이메일: contact@portfolio.com</li>
              <li>전화: 010-1234-5678</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} 포트폴리오. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
