export default function Footer() {
  const buttonStyle =
    "px-12 text-indigo-200 hover:text-indigo-400 font-semibold transition-colors duration-300";

  const links = [
    { name: "GitHub", href: "https://github.com/justshou" },
    { name: "LinkedIn", href: "https://linkedin.com/in/anthonymashou" },
  ];

  return (
    <div id="footer" className="justify-center items-center flex flex-col py-8">
      <div className=" text-neutral-500 text-sm">
        <span className="block">© Anthony Mashou. All rights reserved.</span>
      </div>
    </div>
  );
}
