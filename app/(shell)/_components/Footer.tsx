import {
  FaGithub,
  FaGitlab,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className="pt-10 border-t border-highlight bg-gradient-to-t from-primary-lighten to-primary-lighten/90">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="flex flex-col font-baloo text-4xl font-bold text-white">
            <span>Have an Idea?</span>
            <span>Tell me about it</span>
          </h2>
          <button className="font-semibold font-baloo text-xl bg-highlight hover:bg-highlight/90 text-white px-6 py-3 rounded-full">
            Contact Me
          </button>
        </div>

        <div className="mt-16 flex items-start justify-between">
          <div>
            <div className="font-fredoka font-medium text-xl text-white">
              Email me
            </div>
            <p className="font-fredoka font-medium text-xl text-white/80">
              dalfiannur@gmail.com
            </p>
          </div>

          <div className="flex flex-col gap-16 items-end">
            <ul className="flex items-center gap-8 font-fredoka font-semibold text-xl text-white">
              <li className="hover:text-highlight">Home</li>
              <li className="hover:text-highlight">Blog</li>
              {/* <li className="hover:text-highlight">Services</li> */}
              <li className="hover:text-highlight">Work Showcase</li>
              {/* <li className="hover:text-highlight">About Me</li> */}
              <li className="hover:text-highlight">Contact Me</li>
            </ul>
            <ul className="flex items-center gap-16 text-white">
              <li className="hover:text-highlight">
                <FaGithub size={32} />
              </li>
              <li className="hover:text-highlight">
                <FaGitlab size={32} />
              </li>
              <li className="hover:text-highlight">
                <FaInstagram size={32} />
              </li>
              <li className="hover:text-highlight">
                <FaYoutube size={32} />
              </li>
              <li className="hover:text-highlight">
                <FaTiktok size={32} />
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="font-fredoka text-xl text-white">
            <p>Wanayasa, Purwakarta</p>
            <p>West Java, Indonesia - 41174.</p>
          </div>
          <a
            href="#"
            className="inline-block mt-8 text-highlight text-2xl font-baloo font-bold"
          >
            Help &amp; Support
          </a>
        </div>

        <div className="mt-8 border-t border-highlight py-5 flex items-center justify-between">
          <div className="text-subtle">
            &copy;2024 - D`Coder. All Rigth Reserved.
          </div>
          <ul className="flex items-center gap-8 text-subtle">
            <li className="hover:text-primary-light">Privacy Policy</li>
            <li className="hover:text-primary-light">Terms and Condition</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
