import React from "react";

const FeatureCircle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <div className="flex flex-col items-center">
    <div className="gradient-bg w-[95px] h-[95px] md:w-[160px] md:h-[160px] rounded-full">
      <div className="w-full h-full rounded-full bg-[#121212] flex items-center justify-center">
        <div className="text-center">
          <p className="gradient-text font-bold text-md max-w-[70px] md:text-2xl md:max-w-[110px] mb-1">
            {title}
          </p>
          <p className="hidden gradient-text font-bold text-xl opacity-60 md:block">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <section className="bg-black text-white py-16 px-4 md:mt-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold gradient-text-right hidden mb-3 md:inline-block">
          영상 제작소
        </h2>
        <h3 className="text-2xl md:text-3xl font-sans mb-12">
          당장 내일 <br className="md:hidden" />
          <span className="font-bold">&apos;고품질 맞춤 영상&apos;</span>을
          받아보세요.
        </h3>

        <div className="flex justify-center mb-12 -mx-2">
          <div className="-mx-0">
            <FeatureCircle title="FAST" subtitle="X2" />
          </div>
          <div className="-mx-0">
            <FeatureCircle title="QUALITY" subtitle="A++" />
          </div>
          <div className="-mx-0">
            <FeatureCircle title="LOW PRICE" subtitle="1/2" />
          </div>
          <div className="-mx-0">
            <FeatureCircle title="HIGH TECH" subtitle="Gen AI" />
          </div>
        </div>

        <h4 className="text-xl md:text-2xl font-bold mb-6">
          AI VIDEO ON YOUR DEMAND
        </h4>

        <p className="m-5 md:m-0 text-gray-300 font-bold opacity-60">
          가상인간 뿐 아니라 배경 이미지와 음악 생성 등 국내 최고의 생성 AI
          기술에 <br className="hidden md:block" /> 영상 전문가의 디자인 터치
          비율 및 시간은 절감하고 퀄리티는 보장된 영상을 만듭니다.
        </p>

        <p className="m-7 md:m-0 md:mt-10 text-gray-300 font-bold opacity-60">
          가격은 절반으로, 속도는 두배로, 품질은 A++!
          <br className="hidden md:block" />
          기업 홍보, 제품 소개, 교육 및 행사, 정보 및 안내 영상 등<br />
          당신이 필요한 &apos;그 영상&apos;을 플루넷 영상제작소에 맡겨주세요.
        </p>

        <div className="divider"></div>
      </div>
    </section>
  );
};

export default About;
