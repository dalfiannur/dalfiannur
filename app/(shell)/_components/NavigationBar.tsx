import Link from "next/link";

export const NavigationBar = () => {
  return (
    <nav className="fixed z-10 top-0 left-0 right-0 shadow bg-gradient-to-b from-accent to-accent/90">
      <div className="container mx-auto flex justify-between items-center h-24">
        <h1 className="font-baloo text-5xl font-black tracking-widest text-white">
          D`Coder
        </h1>
        <ul className="flex gap-6 font-baloo font-semibold text-xl text-white">
          <li>
            <Link href="/" className="hover:text-highlight">
              Home
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-highlight">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-highlight">
              Services
            </Link>
          </li>
          {/* <li>
            <Link href="/work-showcase" className="hover:text-highlight">
              Work Showcase
            </Link>
          </li> */}
        </ul>
        <ul className="flex gap-6 font-baloo font-semibold text-xl text-white">
          {/* <li>
            <Link href="/about" className="hover:text-highlight">
              About Me
            </Link>
          </li> */}
          <li>
            <Link
              href="/contact"
              className="bg-highlight font-bold hover:bg-highlight/90 text-white rounded-full px-6 py-2"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
