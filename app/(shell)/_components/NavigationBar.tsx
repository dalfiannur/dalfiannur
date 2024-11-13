import Link from "next/link";

export const NavigationBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow">
      <div className="container mx-auto flex justify-between items-center h-24">
        <h1 className="font-baloo text-5xl font-black tracking-widest">
          D`Coder
        </h1>
        <ul className="flex gap-4 font-baloo font-medium text-xl">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/work-showcase">Work Showcase</Link>
          </li>
        </ul>
        <ul className="flex gap-4 font-baloo font-medium text-xl">
          <li>
            <Link href="/about">About Me</Link>
          </li>
          <li>
            <Link href="/contact">Contact Me</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
