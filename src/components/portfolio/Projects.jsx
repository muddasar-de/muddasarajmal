import React, { useEffect, useState, createContext } from 'react';
import './projects.css';
import Logo_Shoes from '../../assests/logo-shoes.jpg';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TabPanel, TabContext } from '@mui/lab';
import Dialogue from './Dialogue';
import ProjectItem from './ProjectItem';

export const Checks = createContext(null);
// export const DialogueItem = createContext(null);

const Projects = () => {
  const [value, setValue] = useState('all');
  const [open, setOpen] = React.useState(false);

  const projects = [
    {
      name: 'Portfolio',
      catogory: 'WP',
      demo_link: '#',
      behance_link: 'https://www.behance.net/gallery/126151907/My-Portfolio',
      featured_img:
        'https://mir-s3-cdn-cf.behance.net/projects/404/c5540b126151907.Y3JvcCwxODA5LDE0MTUsMTkyLDA.jpg',
      project_image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/fs/4f7753126151907.612780c6a419b.png',
    },
    {
      name: 'Le Lotus',
      catogory: 'WP',
      demo_link: '#',
      behance_link: 'https://lelotus.pk/',
      featured_img:
        'https://mir-s3-cdn-cf.behance.net/projects/404/3c289a125175157.Y3JvcCwyNTU2LDIwMDAsMCww.jpg',
      project_image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/fs/192e74125175157.6113a77eb674d.png',
    },

    {
      name: 'Logo Shoes',
      catogory: 'WP',
      demo_link: '#',
      behance_link: 'https://www.behance.net/gallery/125410391/LOGO-Shoes',
      featured_img:
        'https://mir-s3-cdn-cf.behance.net/projects/404/b23bba125410391.6118f04cbc32f.jpg',
      project_image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/fs/231db4125410391.6118ebf312c39.png',
    },
    {
      name: 'Ittehad Steels ',
      catogory: 'WP',
      demo_link: '#',
      behance_link: 'https://www.behance.net/gallery/126151907/My-Portfolio',
      featured_img:
        'https://mir-s3-cdn-cf.behance.net/projects/404/e0b384125241181.Y3JvcCw0MjYxLDMzMzMsMjMyLDA.jpg',
      project_image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/fs/2931db125241181.6114eb182c30d.png',
    },
    {
      name: 'Craft Sol',
      catogory: 'WP',
      demo_link: '#',
      behance_link: 'https://www.behance.net/gallery/126151907/My-Portfolio',
      featured_img:
        'https://mir-s3-cdn-cf.behance.net/projects/404/0cd834125096331.Y3JvcCwxNjYyLDEzMDAsMTY4LDA.png',
      project_image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/fs/73a3da125096331.61123b2f64cf6.png',
    },
  ];
  const [dialogue_item, set_dialogue_item] = useState(projects[0]);

  //   const [projects, setProjects] = useState([]);

  const handleClickOpen = (id) => {
    // setOpen(true);
    console.log('selected', id);
    console.log(projects[id]);
    setOpen(true);
    set_dialogue_item(projects[id]);
    return <Dialogue open={open} />;
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // useEffect(() => {
  //   set_dialogue_item(projects[0]);
  // });

  return (
    <section id='projects'>
      <h5>Recent Work</h5>
      <h2>My Portfolio</h2>
      <Checks.Provider value={{ open, setOpen }}>
        <div className='container '>
          <TabContext value={value}>
            <Box sx={{ width: '100%' }} className='.tabs_container'>
              <Tabs
                centered
                className='tabs'
                value={value}
                onChange={handleChange}
                aria-label='wrapped label tabs example'>
                <Tab className='tab' value='all' label='All'>
                  <h1>asdl</h1>
                </Tab>
                <Tab className='tab' value='wordpress' label='WordPress' />
                <Tab className='tab' value='graphics' label='Graphics' />
                <Tab className='tab' value='react' label='React' />
              </Tabs>

              <TabPanel value='all' className='portfolio__container'>
                {projects.map((item, index) => {
                  return (
                    <ProjectItem
                      id={index}
                      name={item.name}
                      // demo={item.demo_link}
                      behance={item.behance_link}
                      featured_img={item.featured_img}
                      onSelect={handleClickOpen}
                    />
                  );
                })}
                <Dialogue data={dialogue_item} />
              </TabPanel>
              <TabPanel value='wordpress'>Projects to be uploaded...</TabPanel>
              <TabPanel value='graphics'>Projects to be uploaded...</TabPanel>
              <TabPanel value='react'>Projects to be uploaded...</TabPanel>
            </Box>
          </TabContext>
        </div>
      </Checks.Provider>
    </section>
  );
};

export default Projects;
