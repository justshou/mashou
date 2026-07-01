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

const skillGroups = [
  {
    title: "Web Technologies",
    skills: webTech,
  },
  {
    title: "Programming Languages",
    skills: programmingLanguages,
  },
  {
    title: "Tools",
    skills: tools,
  },
];

export default function Skills() {
  return (
    <div id="skills" className="flex flex-col min-h-screen px-16 scroll-mt-24">
      <div className="text-2xl">
        <h2 className="text-3xl font-bold text-neutral-100 pb-4">Skills</h2>
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-lg text-neutral-400">{group.title}</h3>
            <div className="p-4 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {group.skills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  image={skill.image}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
