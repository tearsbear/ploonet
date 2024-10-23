import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";

const pretendardRegular = localFont({
  src: "./fonts/Pretendard-Regular.otf",
  variable: "--font-pretendard-regular",
});

const pretendardBold = localFont({
  src: "./fonts/Pretendard-Bold.otf",
  variable: "--font-pretendard-bold",
});

export const metadata: Metadata = {
  title: "PLOONET",
  description:
    "플루닛은 생성형, 대화형 인공지능 기술 기반의 다양한 플랫폼과 서비스를 제공하는 국내 1위 생성형 AI 서비스 전문 기업입니다.",
  keywords:
    "플루닛, 생성형 AI, 생성형 인공지능, 생성적 인공지능, 인공지능 비서, GPT, AI 서비스 전문 기업",
  openGraph: {
    type: "website",
    url: "http://www.ploonet.com",
    siteName: "플루닛 – 국내 최고 생성형 AI 서비스 전문 기업",
    title: "플루닛 – 국내 최고 생성형 AI 서비스 전문 기업",
    description:
      "플루닛, 생성형 AI, 생성형 인공지능, AI 비서, 인공지능 비서, 워크센터, 스튜디오, GPT",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pretendardRegular.variable} ${pretendardBold.variable} font-sans antialiased bg-black`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
