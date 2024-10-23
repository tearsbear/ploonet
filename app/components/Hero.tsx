import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="relative w-full mt-10 md:mt-20">
        {/* Desktop Background Image */}
        <div className="hidden md:block">
          <Image
            src="/images/background/hero.png"
            alt="Hero Background"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Mobile Background Image */}
        <div className="md:hidden">
          <Image
            src="/images/background/hero-mobile.png"
            alt="Hero Background"
            width={750}
            height={1334}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
