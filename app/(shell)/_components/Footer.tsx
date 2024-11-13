import {
  FaGithub,
  FaGitlab,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className="pt-10 border-t">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="flex flex-col font-baloo text-4xl font-bold">
            <span>Have an Idea?</span>
            <span>Tell me about it</span>
          </h2>
          <button className="font-semibold font-baloo text-xl bg-gray-200 px-8 py-4 rounded-full">
            Contact Me
          </button>
        </div>

        <div className="mt-16 flex items-start justify-between">
          <div>
            <div className="font-fredoka font-medium text-xl">Email me</div>
            <p className="font-fredoka text-xl">dalfiannur@gmail.com</p>
          </div>

          <div className="flex flex-col gap-16 items-end">
            <ul className="flex items-center gap-8 font-fredoka font-medium text-xl">
              <li>Home</li>
              <li>Blog</li>
              <li>Services</li>
              <li>Work Showcase</li>
              <li>About Me</li>
              <li>Contact Me</li>
            </ul>
            <ul className="flex items-center gap-16">
              <li>
                <FaGithub size={32} />
              </li>
              <li>
                <FaGitlab size={32} />
              </li>
              <li>
                <FaInstagram size={32} />
              </li>
              <li>
                <FaYoutube size={32} />
              </li>
              <li>
                <FaTiktok size={32} />
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="font-fredoka text-xl">
            <p>Wanayasa, Purwakarta</p>
            <p>West Java, Indonesia - 41174.</p>
          </div>
          <a
            href="#"
            className="inline-block mt-8 text-blue-500 text-2xl font-baloo font-bold"
          >
            Help &amp; Support
          </a>
        </div>

        <div className="mt-8 border-t py-5 flex items-center justify-between">
          <div>&copy;2024 - D`Coder. All Rigth Reserved.</div>
          <ul className="flex items-center gap-8">
            <li>Privacy Policy</li>
            <li>Terms and Condition</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
