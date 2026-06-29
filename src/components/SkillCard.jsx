export default function SkillCard({ image, name }) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl hover:scale-105 ease-in-out duration-300">
      <div className="grid grid-cols-2 gap-4 justify-center items-center p-6">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-xl object-cover"
          loading="lazy"
        />
        <h1 className="text-lg text-neutral-100 font-semibold">{name}</h1>
      </div>
    </div>
  );
}
