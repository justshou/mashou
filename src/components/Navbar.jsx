export default function Navbar() {
  const buttonStyle = "px-12 hover:bg-slate-700 text-white";

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
    <nav className="font-sans-sora text-2xl bg-sky-950 fixed p-4 w-full justify-between mx-auto">
      <div className="flex justify-center">{links}</div>
    </nav>
  );
}
