import Link from "next/link";

export const NavigationBar = () => {
  return (
    <nav className="fixed z-10 top-0 left-0 right-0 shadow bg-gradient-to-b from-primary to-primary-light/90">
      <div className="container mx-auto flex justify-between items-center h-24">
        <h1 className="font-baloo text-5xl font-black tracking-widest text-neutral-white">
          D`Coder
        </h1>
        <ul className="flex gap-4 font-baloo font-medium text-xl text-neutral-white">
          <li>
            <Link href="/" className="hover:text-primary-light">
              Home
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-primary-light">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-primary-light">
              Services
            </Link>
          </li>
          <li>
            <Link href="/work-showcase" className="hover:text-primary-light">
              Work Showcase
            </Link>
          </li>
        </ul>
        <ul className="flex gap-4 font-baloo font-medium text-xl text-neutral-white">
          <li>
            <Link href="/about" className="hover:text-primary-light">
              About Me
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="bg-primary-light hover:bg-primary text-white rounded-full px-4 py-2"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
