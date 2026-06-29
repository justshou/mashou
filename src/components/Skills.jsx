import SkillCard from "./SkillCard";
import reactLogo from "../assets/react.svg";
import javascriptLogo from "../assets/javascript.svg";
import pythonLogo from "../assets/python.svg";
import htmlLogo from "../assets/html.svg";
import cssLogo from "../assets/css.svg";
import tailwindLogo from "../assets/tailwind.svg";
import cppLogo from "../assets/cpp.svg";
import javaLogo from "../assets/java.svg";
import honoLogo from "../assets/hono.svg";
import nodejsLogo from "../assets/nodejs.svg";
import gitLogo from "../assets/git.svg";
import dockerLogo from "../assets/docker.svg";
import awsLogo from "../assets/aws.svg";

const allSkills = [
  { name: "React", image: reactLogo },
  { name: "JavaScript", image: javascriptLogo },
  { name: "Python", image: pythonLogo },
  { name: "HTML", image: htmlLogo },
  { name: "CSS", image: cssLogo },
  { name: "Tailwind CSS", image: tailwindLogo },
  { name: "C++", image: cppLogo },
  { name: "Java", image: javaLogo },
  { name: "Hono", image: honoLogo },
];

const webTech = [
  { name: "React", image: reactLogo },
  { name: "Tailwind CSS", image: tailwindLogo },
  { name: "Hono", image: honoLogo },
  { name: "Node.js", image: nodejsLogo },
  { name: "JavaScript", image: javascriptLogo },
  { name: "HTML", image: htmlLogo },
  { name: "CSS", image: cssLogo },
];

const programmingLanguages = [
  { name: "C++", image: cppLogo },
  { name: "Java", image: javaLogo },
  { name: "Python", image: pythonLogo },
];

const tools = [
  { name: "Git", image: gitLogo },
  { name: "Docker", image: dockerLogo },
  { name: "AWS", image: awsLogo },
];

export default function Skills() {
  return (
    <div id="skills" className="flex flex-col min-h-screen  px-16 scroll-mt-24">
      <div className="text-2xl">
        <h1 className="text-3xl font-bold text-neutral-100 pb-4">Skills</h1>
        <h2 className="text-lg text-neutral-400">Web Technologies</h2>
      </div>
      <div className="p-4 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {webTech.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} image={skill.image} />
        ))}
      </div>
      <div className="text-lg text-neutral-400 pt-4">
        <h2>Languages</h2>
      </div>
      <div className="p-4 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {programmingLanguages.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} image={skill.image} />
        ))}
      </div>
      <div className="text-lg text-neutral-400 pt-4">
        <h2>Tools</h2>
      </div>
      <div className="p-4 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} image={skill.image} />
        ))}
      </div>
    </div>
  );
}
