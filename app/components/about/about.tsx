import React from "react";
import { FaReact, FaJava } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiSpring,
  SiJavascript,
} from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";

const About = () => {
  return (
    <div className=" min-h-screen container py-4 ">
      <div className=" xl:px-72 lg:px-48 md:px-24 p-8  h-full flex flex-col gap-4">
        <p className="text-xl font-semibold">About</p>
        <p className="text-lg text-muted-foreground">
          A skilled software developer and devops professional based in New Delhi ,
          with over{" "}
          <span className="text-foreground font-semibold">2+ years</span> of
          experience in the field. I am currently a part of the dynamic team at
          Preplaced where I have been able to work on diverse projects and gain
          valuable industry insights.
          <br></br>
          <br></br>My expertise in various programming languages and development
          frameworks allows me to bring complex ideas to life and deliver
          high-quality, scalable software solutions. I am driven by the desire
          to learn, grow, and make a positive impact in the world through
          technology. <br></br>
          <br></br>I am eager to share my past projects and experiences through
          this portfolio, and I hope it will provide you with a glimpse into my
          skills and passion for software development and devops. Thank you for
          visiting my website!
        </p>

        <div className="py-16 ">
          <p className="font-semibold text-xl">Experience</p>
          <div className=" text-base py-4">
            <div>Developer</div>
            <div className="text-muted-foreground font-semibold flex flex-col sm:flex-row sm:items-center justify-between">
              <p>@ Preplaced</p>
              <p>July, 2021 - Present</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;