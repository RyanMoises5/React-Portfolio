import { IoLogoJavascript, IoLogoNodejs, IoLogoReact, IoLogoCss3 } from "react-icons/io5";
import { SiMongodb, SiExpress, SiTailwindcss, SiGraphql, SiBootstrap, SiJquery, SiApollographql, SiTypescript  } from "react-icons/si";
import { DiMaterializecss } from "react-icons/di";
import { useTheme } from '../utils/ThemeContext';

function Skills() { 
  const { theme } = useTheme();

  const skillsArr = [
    {
      name: 'Javascript',
      logo: IoLogoJavascript
    },
    {
      name: 'Typescript',
      logo: SiTypescript 
    },
    {
      name: 'Jquery',
      logo: SiJquery
    },
    {
      name: "MongoDB",
      logo: SiMongodb
    },
    {
      name: "Express",
      logo: SiExpress
    },
    {
      name: 'ReactJS',
      logo: IoLogoReact
    },
    {
      name: 'NodeJS',
      logo: IoLogoNodejs
    },     
    {
      name: "Graphql",
      logo: SiGraphql 
    },
    {
      name: "Apollo",
      logo: SiApollographql 
    },
    {
      name: 'CSS',
      logo: IoLogoCss3 
    },
    {
      name: 'TailwindCSS',
      logo: SiTailwindcss
    },
    {
      name: 'Bootstrap',
      logo: SiBootstrap
    },
    {
      name: 'MaterializeCSS',
      logo: DiMaterializecss
    }
  ];

  const miscArr = [
    "RESTful APIs", "Git", "Jest", "Webpack", "JWT", "Bcrypt"
  ]

  return (
    <div className='container-fluid py-32 mx-[5%] h-[85vh]' id='skills'>
      <h2 className='text-4xl text-center font-bold'>Skills</h2>
      <div className='flex flex-wrap justify-center my-8'>
        {skillsArr.map((item, index) => (
          <div key={index} className={`bg-${theme}-accent-secondary text-${theme}-secondary rounded font-bold justify-items-center p-4 m-2`}>
            <div>
              <item.logo size={50}/>
            </div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      <div className='flex flex-wrap justify-center my-8'>
        {miscArr.map((item, index) => (
          <div key={index} className={`bg-${theme}-accent-secondary text-${theme}-secondary rounded font-bold justify-items-center p-2 m-2`}>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;