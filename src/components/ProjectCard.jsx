export default function ProjectCard({ image, name, url }) {
  return (
    <div className="grid grid-cols-2 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl hover:scale-105 ease-in-out duration-300">
      <div className=" w-full h-full justify-center items-center p-6">
        <img
          src={image}
          alt={name}
          className="w-full h-full overflow-hidden rounded-xl object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-4 justify-center items-center p-6">
        <h3 className="text-2xl text-neutral-100 font-semibold">{name}</h3>
        <a
          href={url}
          className="text-lg text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}
