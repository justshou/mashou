import SkillCard from "./SkillCard";
import reactLogo from "../assets/react.svg";
import javascriptLogo from "../assets/javascript.svg";
import pythonLogo from "../assets/python.svg";
import htmlLogo from "../assets/html.svg";
import cssLogo from "../assets/css.svg";
import tailwindLogo from "../assets/tailwind.svg";
import cppLogo from "../assets/cpp.svg";
import javaLogo from "../assets/java.svg";

export default function Skills() {
  return (
    <div className=" flex flex-col h-screen p-16">
      <div className="font-sans-sora text-2xl">
        <h1>Skills</h1>
        <h2>What can I do?</h2>
      </div>
      <div className="font-sans-sora p-4 grid grid-cols-4 gap-8">
        <SkillCard image={reactLogo} name="React" />
        <SkillCard image={javascriptLogo} name="JavaScript" />
        <SkillCard image={pythonLogo} name="Python" />
        <SkillCard image={htmlLogo} name="HTML" />
        <SkillCard image={cssLogo} name="CSS" />
        <SkillCard image={tailwindLogo} name="Tailwind CSS" />
        <SkillCard image={cppLogo} name="C++" />
        <SkillCard image={javaLogo} name="Java" />
      </div>
    </div>
  );
}
