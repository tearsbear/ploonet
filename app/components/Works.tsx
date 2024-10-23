"use client";

import Image from "next/image";
import { useState } from "react";

interface WorkItem {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
}

const workItems: WorkItem[] = [
  {
    id: 1,
    title: "AI Pick 이모저모 차트쑈",
    subtitle: "SK Btv",
    imageUrl: "/images/news/01.png",
  },
  {
    id: 2,
    title: "KIMES 전시 안내영상",
    subtitle: "비트컴퓨터",
    imageUrl: "/images/news/02.png",
  },
  {
    id: 3,
    title: "감성컴퓨팅 메타휴먼 강의",
    subtitle: "상명대학교",
    imageUrl: "/images/news/03.png",
  },
  {
    id: 4,
    title: "AI Pick 돈되는 정보",
    subtitle: "SK Btv",
    imageUrl: "/images/news/04.png",
  },
  {
    id: 5,
    title: "제품 소개 영상 (영문)",
    subtitle: "옵투스제약",
    imageUrl: "/images/news/05.png",
  },
  {
    id: 6,
    title: "플루닛 스튜디오 사용자 가이드",
    subtitle: "스크립트 작성 Tip - 부호편",
    imageUrl: "/images/news/06.png",
  },
  {
    id: 7,
    title: "당진 도서관 개관 행사 영상",
    subtitle: "당진시립도서관",
    imageUrl: "/images/news/07.png",
  },
  {
    id: 8,
    title: "플루닛 워크센터 사용 가이드",
    subtitle: "플루닛 워크센터",
    imageUrl: "/images/news/08.png",
  },
  {
    id: 9,
    title: "인재개발원 아카데미 교육 영상",
    subtitle: "롯데인재개발원",
    imageUrl: "/images/news/09.png",
  },
  {
    id: 10,
    title: "우리동네알파고 방송",
    subtitle: "엘지헬로비전",
    imageUrl: "/images/news/10.png",
  },
  {
    id: 11,
    title: "AI스타트업-창업경진대회 개막식",
    subtitle: "AICA",
    imageUrl: "/images/news/11.png",
  },
  {
    id: 12,
    title: "우수직원 시상식",
    subtitle: "Alvogen",
    imageUrl: "/images/news/12.png",
  },
];

const Works = () => {
  return (
    <div>
      <div className="text-center mb-12 md:mt-6">
        <div className="title-container">
          <div className="title-circle"></div>
          <h2 className="title font-bold text-2xl md:text-3xl">
            Previous Works
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 cursor-pointer">
        {workItems.map((item) => (
          <WorkItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

const WorkItem = ({ title, subtitle, imageUrl }: WorkItem) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={imageUrl} alt={title} width={480} height={480} />
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white transition-opacity duration-300">
          <h3 className="text-sm md:text-xl font-bold">{title}</h3>
          <p className="text-xs md:text-sm font-sans">{subtitle}</p>
        </div>
      )}
    </div>
  );
};

export default Works;
