export default function Home() {
  return (
    <div
      id="home"
      className="flex flex-col min-h-screen items-center justify-center px-4"
    >
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2">
        <h1>Anthony Mashou</h1>
      </div>
      <div className="text-md sm:text-lg md:text-2xl lg:text-3xl font-medium text-indigo-600">
        <p>Software Developer</p>
      </div>
      <div className="pt-6 ">
        <a
          href="https://github.com/justshou"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm sm:text-md md:text-lg lg:text-xl text-indigo-400 hover:text-indigo-300"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/anthonymashou"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm sm:text-md md:text-lg lg:text-xl text-indigo-400 hover:text-indigo-300 ml-4"
        >
          LinkedIn
        </a>
      </div>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce text-neutral-500 text-sm">
        <span className="block">↓ Scroll down to see more about me!</span>
      </div>
    </div>
  );
}
