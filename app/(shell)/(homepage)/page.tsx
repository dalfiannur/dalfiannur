import { Hero } from "./_sections/Hero";
import { Expertise } from "./_sections/Expertise";
import { WorkShowcase } from "./_sections/WorkShowcase";
import { ToolsTech } from "./_sections/ToolsTech";
import { Faq } from "./_sections/Faq";

export default function Home() {
  return (
    <div>
      <Hero />
      <Expertise />
      <WorkShowcase />
      <ToolsTech />
      <Faq />
    </div>
  );
}
