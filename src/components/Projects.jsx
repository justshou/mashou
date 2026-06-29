import ProjectCard from "./ProjectCard";
import tensorflow from "../assets/tensorflow.svg";
import snakePhoto from "../assets/snake.webp";
import todoPhoto from "../assets/todo.webp";

export default function Projects() {
  return (
    <div id="projects" className="flex flex-col px-16 pt-12 scroll-mt-12">
      <div className="text-2xl">
        <h1 className="text-3xl font-bold text-neutral-100 pb-4">Projects</h1>
        <div className="p-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            name="Drowsy Detection"
            image={tensorflow}
            url="https://github.com/justshou/Drowsy-Driver-Detection"
          />
          <ProjectCard
            name="Todo App"
            image={todoPhoto}
            url="https://github.com/justshou/todo-app"
          />
          <ProjectCard
            name="Snake Game"
            image={snakePhoto}
            url="https://github.com/justshou/Snake"
          />
        </div>
      </div>
    </div>
  );
}
