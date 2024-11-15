import {
  FaGithub,
  FaGitlab,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className="pt-10 border-t bg-primary">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="flex flex-col font-baloo text-4xl font-bold text-neutral-white">
            <span>Have an Idea?</span>
            <span>Tell me about it</span>
          </h2>
          <button className="font-semibold font-baloo text-xl bg-primary-light hover:bg-primary-light/20 text-white px-8 py-4 rounded-full">
            Contact Me
          </button>
        </div>

        <div className="mt-16 flex items-start justify-between">
          <div>
            <div className="font-fredoka font-medium text-xl text-neutral-white">
              Email me
            </div>
            <p className="font-fredoka text-xl text-gray-300">
              dalfiannur@gmail.com
            </p>
          </div>

          <div className="flex flex-col gap-16 items-end">
            <ul className="flex items-center gap-8 font-fredoka font-medium text-xl text-neutral-white">
              <li className="hover:text-primary-light">Home</li>
              <li className="hover:text-primary-light">Blog</li>
              <li className="hover:text-primary-light">Services</li>
              <li className="hover:text-primary-light">Work Showcase</li>
              <li className="hover:text-primary-light">About Me</li>
              <li className="hover:text-primary-light">Contact Me</li>
            </ul>
            <ul className="flex items-center gap-16 text-gray-300">
              <li className="hover:text-primary-light">
                <FaGithub size={32} />
              </li>
              <li className="hover:text-primary-light">
                <FaGitlab size={32} />
              </li>
              <li className="hover:text-primary-light">
                <FaInstagram size={32} />
              </li>
              <li className="hover:text-primary-light">
                <FaYoutube size={32} />
              </li>
              <li className="hover:text-primary-light">
                <FaTiktok size={32} />
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="font-fredoka text-xl text-gray-300">
            <p>Wanayasa, Purwakarta</p>
            <p>West Java, Indonesia - 41174.</p>
          </div>
          <a
            href="#"
            className="inline-block mt-8 text-primary-light text-2xl font-baloo font-bold"
          >
            Help &amp; Support
          </a>
        </div>

        <div className="mt-8 border-t border-neutral-white/20 py-5 flex items-center justify-between">
          <div className="text-gray-300">
            &copy;2024 - D`Coder. All Rigth Reserved.
          </div>
          <ul className="flex items-center gap-8 text-neutral-white">
            <li className="hover:text-primary-light">Privacy Policy</li>
            <li className="hover:text-primary-light">Terms and Condition</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
