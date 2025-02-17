import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import { IconCloudDemo } from "./Cloud";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "I CODE IDEAS INTO REALITY, WEBSITES POWERFUL AND DATA INSIGHTFUL."
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text={
                "I am a Computer Science undergrad at IIIT Gwalior, passionate about software development, data analytics, and automation. With a strong foundation in Python and backend systems."
              }
            />
            <AnimatedBody
              text={
                "Whether I'm designing a sleek user interface or coding a complex application, I’m always striving to create something unique and innovative. I love experimenting with new technologies and staying up-to-date with the latest trends in the tech world."
              }
              className={"hidden"}
            />
            <AnimatedBody
              text={
                "Beyond my work as a software developer, I have tutored 500+ students in my active tech community, CodeDesk, empowering early developers through mentorship and hands-on learning. I had also been a member of IAENG and the Internet Society."
              }
            />
            <AnimatedBody
              text={
                "When I'm not coding, you can find me hanging out with friends or exploring new music, enjoying smooth RnB melodies and catchy pop tunes."
              }
            />
            <AnimatedBody
              text={
                "I'm currently working on some exciting projects that I can't wait to share with you. But I’m always open to new opportunities and collaborations."
              }
            />
          </div>
            
          <div className="mb-0 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-00 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-0 lg:max-w-[30%] lg:text-[18px]">
          <div className="mt-[-20px]"><IconCloudDemo /></div>
          
            <div className="flex flex-col gap-1 md:gap-1 mt-[-2rem]">
              <AnimatedTitle
                text={"Languages & Frameworks"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Python, C/C++, Swift, Java, React, Next.js, TypeScript, GSAP, HTML5, Django, FastAPI, DRF, Pyttsx3"
                }
              />
            </div>
            <div className="flex flex-col gap-1">
              <AnimatedTitle
                text={"Databases & Tools"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "PostgreSQL, Redis, SQL, Realm, Selenium, Docker, Nginix, Kafka, BS4, Scrapy, Requests, Insomnia, Postman, GitLab."
                }
              />
            </div>
           
            {/* <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Design Tools"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Figma, Framer, FigJam, Adobe XD, ProtoPie, Adobe Photoshop, UX Research, UI Design, Prototyping."
                }
              />
            </div> */}

          </div>
        </div>
        <div className="mt-20 flex flex-col md:-mt-6 lg:mt-28">
          {/* <div className="mb-6 w-full h-4"></div> */}
          <SongCarousel />
          <AnimatedBody
            text="A few songs I can recommend if you're looking for some fresh tunes :)"
            className="absolute bottom-10 right-0 left-0 mx-auto w-[90%] text-center text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[500px] md:bottom-12 md:w-[550px] md:text-[16px] "
          />
        </div>
      </div>
    </section>
  );
};

export default About;
