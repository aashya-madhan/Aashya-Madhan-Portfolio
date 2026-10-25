import { CursorFollower } from "~/components/effects/CursorFollower";
import { Hero } from "~/components/sections/Hero";
import { About } from "~/components/sections/About";
import { Projects } from "~/components/sections/Projects";
import { TechStack } from "~/components/sections/TechStack";
import { Experience } from "~/components/sections/Experience";
import { ResumeCTA } from "~/components/sections/ResumeCTA";
import { Contact } from "~/components/sections/Contact";

export default function Home() {
  return (
    <>
      <CursorFollower />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Experience />
      <ResumeCTA />
      <Contact />
    </>
  );
}
