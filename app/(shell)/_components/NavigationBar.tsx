export const NavigationBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow">
      <div className="container mx-auto flex justify-between items-center h-24">
        <h1 className="font-baloo text-5xl font-black tracking-widest">
          D`Coder
        </h1>
        <ul className="flex gap-4 font-baloo font-medium text-xl">
          <li>Home</li>
          <li>Blog</li>
          <li>Services</li>
          <li>Work Showcase</li>
        </ul>
        <ul className="flex gap-4 font-baloo font-medium text-xl">
          <li>About Me</li>
          <li>Contact Me</li>
        </ul>
      </div>
    </nav>
  );
};
