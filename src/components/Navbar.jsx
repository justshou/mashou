export default function Navbar() {
  const buttonStyle =
    "px-12 text-indigo-200 hover:text-indigo-400 font-semibold transition-colors duration-300";

  const links = [
    <>
      <a className={buttonStyle} href="#home">
        Home
      </a>
      <a className={buttonStyle} href="#about">
        About
      </a>
      <a className={buttonStyle} href="#skills">
        Skills
      </a>
      <a className={buttonStyle} href="#projects">
        Projects
      </a>
      <a className={buttonStyle} href="#contact">
        Contact
      </a>
    </>,
  ];

  return (
    <nav className="font-sans-sora text-2xl backdrop-blur-md bg-neutral-900/80 sticky top-0 shadow p-4 w-full border-b border-neutral-800 justify-between mx-auto">
      <div className="flex justify-center">{links}</div>
    </nav>
  );
}
