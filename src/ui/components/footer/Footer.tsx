import Socials from "../Socials";

const Footer = () => {
  return (
    <footer className="dark:text-darkforeground-50 flex flex-col items-center space-y-4 p-4 text-xs">
      <Socials />
      <p className="center">Made by Ryan Jin, Powered by Vercel</p>
    </footer>
  );
};

export default Footer;
