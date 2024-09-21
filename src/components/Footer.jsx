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
    <div className="container-fluid border-solid border-2 border-white grid justify-items-center my-2" id='footer'>
      <p className='my-2'>Connect with me:</p>
      <div className="container inline-flex justify-center">
        {links.map((item, index) => (
          <a key={index} href={item.link} target='blank' className='py-2 px-5 icon'>
            <img src={item.icon} className='size-10'></img>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Footer;