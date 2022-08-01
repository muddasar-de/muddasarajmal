import React from 'react';
import './experience.css';
import { GrWordpress } from 'react-icons/gr';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact, FaGithubSquare, FaDocker } from 'react-icons/fa';
import {
  SiBootstrap,
  SiTailwindcss,
  SiJavascript,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiRabbitmq,
  SiSublimetext,
} from 'react-icons/si';

const Experience = () => {
  const techs = [
    {
      name: 'React',
      level: 'Intermediate',
      icon: <FaReact className='experience__icons' />,
    },
    {
      name: 'JavaScript',
      level: 'Experienced',
      icon: <SiJavascript className='experience__icons' />,
    },

    {
      name: 'HTML',
      level: 'Experienced',
      icon: <AiFillHtml5 className='experience__icons' />,
    },
    {
      name: 'CSS',
      level: 'Intermediate',
      icon: <FaCss3Alt className='experience__icons' />,
    },
    {
      name: 'Bootstrap',
      level: 'Intermediate',
      icon: <SiBootstrap className='experience__icons' />,
    },
    {
      name: 'Tailwind',
      level: 'Intermediate',
      icon: <SiTailwindcss className='experience__icons' />,
    },
  ];

  const tools = [
    {
      name: 'VS Code',
      level: 'Experienced',
      icon: <SiSublimetext className='experience__icons' />,
    },
    {
      name: 'Git',
      level: 'Intermediate',
      icon: <FaGithubSquare className='experience__icons' />,
    },
    {
      name: 'WordPress',
      level: 'Experienced',
      icon: <GrWordpress className='experience__icons' />,
    },

    {
      name: 'Adobe Illustrator',
      level: 'Experienced',
      icon: <SiAdobeillustrator className='experience__icons' />,
    },
    {
      name: 'Adobe Photoshop',
      level: 'Basic',
      icon: <SiAdobephotoshop className='experience__icons' />,
    },
    {
      name: 'Docker',
      level: 'Intermediate',
      icon: <FaDocker className='experience__icons' />,
    },
  ];
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Technologies</h3>
          <div className='experience__content'>
            {techs.map((tech) => {
              return (
                <article className='experience__details'>
                  {tech.icon}
                  <div>
                    <h4>{tech.name}</h4>
                    <small className='text-light'>{tech.level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div className='experience__backend'>
          <h3>Tools</h3>
          <div className='experience__content'>
            {tools.map((tech) => {
              return (
                <article className='experience__details'>
                  {tech.icon}
                  <div>
                    <h4>{tech.name}</h4>
                    <small className='text-light'>{tech.level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
