export default function Navbar() {
  const buttonStyle =
    "px-12 text-indigo-200 hover:text-indigo-400 font-semibold transition-colors duration-300";

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="text-2xl backdrop-blur-md bg-neutral-900/90 sticky top-0 shadow-xl p-4 w-full border-b border-neutral-800 justify-between mx-auto z-50">
      <div className="flex justify-center">
        {links.map((link) => (
          <a key={link.name} className={buttonStyle} href={link.href}>
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
