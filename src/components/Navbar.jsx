export default function Navbar() {
  const buttonStyle = "px-4 hover:bg-slate-700";

  const links = [
    <>
      <button className={buttonStyle}>Home</button>
      <button className={buttonStyle}>About</button>
      <button className={buttonStyle}>Skills</button>
      <button className={buttonStyle}>Projects</button>
      <button className={buttonStyle}>Contact</button>
    </>,
  ];

  return (
    <nav className="bg-slate-600 text-white fixed p-4 w-full font-sans justify-between mx-auto">
      <div className="flex justify-center ml-10 space-x-2">{links}</div>
    </nav>
  );
}
