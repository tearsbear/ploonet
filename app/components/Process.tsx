import Image from "next/image";

const regularProcess = {
  title: "일반 제작",
  subtitle: "제작 시작 후 5영업일 이내",
  steps: [
    {
      step: "STEP1",
      title: "사전 논의",
      description:
        "영상 제작 문의를 통해 의뢰 확인 후\n상담을 통해 방향 설정 및 내용 협의",
    },
    {
      step: "STEP2",
      title: "영상 기획",
      description:
        "스토리보드 전달&수정을 통한 기획안 확정\n가상인간 발화용 스크립트 작성과 프롬프팅",
    },
    {
      step: "STEP3",
      title: "영상 생성",
      description:
        "작성한 스크립트로 가상인간 영상 생성\n그외 이미지, 배경 음악 등 필요 요소 생성",
    },
    {
      step: "STEP4",
      title: "영상 편집",
      description:
        "영상 전문가의 편집, 디자인, 후반 작업 단계\n필요시 실사 촬영 병행하여 편집본 완성",
    },
    {
      step: "STEP5",
      title: "최종 납품",
      description:
        "고객 피드백 반영하여 최종본 완성 및 납품\n* 영상 수정 무료 1회 제공",
    },
  ],
};

const quickserveProcess = {
  title: "Ploonet Quickserve™",
  subtitle: "제작 시작 후 12~48시간 이내",
  steps: [
    {
      step: "STEP1",
      title: "제작 안내",
      description: "영상 제작 문의를 통해 의뢰 확인 후견적 및 진행 순서 안내",
      icon: "/images/icons/file.svg",
    },
    {
      step: "STEP2",
      title: "영상 생성",
      description:
        "스크립트 수신 즉시 가상인간 영상 생성 그외 이미지, 배경 음악 등 필요 요소 생성",
      icon: "/images/icons/camera.svg",
    },
    {
      step: "STEP3",
      title: "편집 및 납품",
      description: "편집 진행, 12~48시간 내 최종본 완성 및 납품",
      icon: "/images/icons/video.svg",
    },
  ],
};

const Process = () => {
  return (
    <div className="bg-black text-white py-16 px-4 md:mt-20">
      <div className="text-center mb-12">
        <div className="title-container inline-block">
          <div className="title-circle"></div>
          <h2 className="title font-bold text-2xl md:text-3xl">
            Making Process
          </h2>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="block md:hidden">
            <h2 className="text-3xl font-bold mb-4 text-center mt-5">
              {regularProcess.title}
            </h2>
            <p className="text-lg mb-8 text-center font-sans text-white opacity-80">
              {regularProcess.subtitle}
            </p>
          </div>
          {/* Regular Process */}
          <div className="md:bg-[#141414] md:border-2 border-[#212121] rounded-[20px] md:p-6">
            <h2 className="text-3xl font-bold mb-4 text-center mt-5 hidden md:block">
              {regularProcess.title}
            </h2>
            <p className="text-lg mb-8 text-center font-sans text-white opacity-80 hidden md:block">
              {regularProcess.subtitle}
            </p>
            <div className="space-y-4 mb-5 md:px-5">
              {regularProcess.steps.map((step, index) => (
                <div
                  key={index}
                  className="relative bg-[#121212] border border-[#212121] rounded-xl md:rounded-full px-6 pt-4 md:px-14 py-4 mb-1"
                >
                  <div className="flex justify-between items-start">
                    <div className="mb-2">
                      <span className="gradient-text-red block mb-0 font-sans text-sm">
                        {step.step}
                      </span>
                      <span className="font-bold text-md">{step.title}</span>
                    </div>
                    <p className="font-sans text-sm text-gray-400 whitespace-pre-line mt-1 ml-8 text-left flex-1">
                      {step.description}
                    </p>
                  </div>
                  {index !== regularProcess.steps.length - 1 && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                      <Image
                        src="/images/icons/polygon.svg"
                        alt="Chevron"
                        width={20}
                        height={10}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="block mt-10 md:hidden">
            <h2 className="text-3xl font-bold mb-3 gradient-text-right text-center">
              {quickserveProcess.title}
            </h2>
            <p className="text-lg font-bold mb-6 text-center opacity-80">
              {quickserveProcess.subtitle}
            </p>
          </div>

          {/* Ploonet Quickserve */}
          <div className="bg-[#141414] rounded-[20px] p-6 relative">
            <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-[#FF4E83] to-[#FFBB54] p-[2px]">
              <div className="bg-[#141414] h-full w-full rounded-[18px]"></div>
            </div>
            <div className="relative z-10 mt-5">
              <h2 className="text-3xl font-bold mb-4 gradient-text-right text-center hidden md:block">
                {quickserveProcess.title}
              </h2>
              <p className="text-lg font-bold mb-6 text-center hidden md:block">
                {quickserveProcess.subtitle}
              </p>
              <div className="space-y-4 md:p-6">
                {quickserveProcess.steps.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="justify-center bg-gradient-to-br from-[#FF4E83] to-[#FFBB54] rounded-[19px] w-[110px] h-[100px] md:h-[110px] mr-6 shadow-[0_0_20px_rgba(255,78,131,0.5)]">
                      <div className="flex flex-col items-center justify-center h-full">
                        <p className="font-sans text-center text-sm md:text-md">
                          {step.step}
                        </p>
                        <Image
                          src={step.icon}
                          alt="Icon"
                          width={30}
                          height={30}
                          className="mt-2"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <p className="mt-10 font-bold text-md">{step.title}</p>
                      <p className="font-sans text-sm max-w-[280px] md:max-w-[260px]">
                        {step.description}
                      </p>
                      <div className="mt-10 w-full h-px bg-[#212121] my-0"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-sm m-8 md:m-0 font-sans md:mt-10 text-center opacity-80">
        * 2~3분, 표준 견적에 따르는 일반 영상편집에 한정되며, 모션그래픽 등 전문
        작업이 필요할 경우 작업 기간은 조정될 수 있습니다. <br />{" "}
        <br className="block md:hidden" /> ** 영상의 길이, 영상 제작에 필요한
        수준에 따라 빠른 작업이 불가할 수 있으며, 클라이언트와의 협의를 통해
        작업 기간을 조정할 수 있습니다.
      </p>
    </div>
  );
};

export default Process;
