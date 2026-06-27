export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center px-4">
      <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">
        <h1>Anthony Mashou</h1>
      </div>
      <div className=" text-xl md:text-3xl font-medium text-indigo-400">
        <p>Developer</p>
      </div>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce text-neutral-500 text-sm">
        <span className="block">↓ Scroll down to see more about me!</span>
      </div>
    </div>
  );
}
