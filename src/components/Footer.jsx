import githubIcon from '../assets/icons/github-mark-white.png';
import linkedInIcon from '../assets/icons/linkedIn.png';
import leetCodeIcon from '../assets/icons/leetCode.png';

function Footer() {

  const links = [
    {
      name: "github",
      icon: githubIcon,
      link: "https://github.com/RyanMoises5",
    },
    {
      name: "linkedIn",
      icon: linkedInIcon,
      link: "https://www.linkedin.com/in/ryan-moises/",
    },
    {
      name: "leetcode",
      icon: leetCodeIcon,
      link: "https://leetcode.com/u/rmoises/"
    }
  ]

  return (
    <div className="footer bottom-0 container-fluid relative bg-slate-800 opacity-100 z-50 grid justify-items-center" id='footer'>
      <div className="container inline-flex justify-center py-3">
        {links.map((item, index) => (
          <a key={index} href={item.link} target='blank' className='py-2 px-5 icon'>
            <img src={item.icon} className='size-10'></img>
          </a>
        ))}
      </div>
    </div>
  );
}

// header sticky top-0 container-fluid h-[8vh] w-screen relative bg-slate-800 opacity-100 z-50

export default Footer;