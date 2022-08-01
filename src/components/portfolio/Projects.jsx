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
  const [visible, setVisible] = useState(6);
  const graphicsProjects = [
    {
      id: 3215,
      name: 'Sutjlej Grains ',
      catogory: 'graphics',
      demo_link: '#',
      behance_link:
        'https://www.behance.net/gallery/125030079/Menu-Poster-for-Sutlej-Grains',
      featured_img:
        'https://mir-s3-cdn-cf.behance.net/projects/404/4bff2d125030079.Y3JvcCwyNTQ0LDE5ODksMCwxNzA.png',
      project_image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/336368125030079.611107cb832ec.jpg',
    },
    {
      id: 3212,
      name: 'Shoe Branding ',
      catogory: 'graphics',
      demo_link: '#',
      behance_link:
        'https://www.behance.net/gallery/125093873/Shoe-Branding-Poster',
      featured_img:
        'https://mir-s3-cdn-cf.behance.net/projects/404/df5e4f125093873.Y3JvcCwyMTY4LDE2OTUsMCwxMTg.png',
      project_image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/fs/8d2e70125093873.61122fb082b9e.png',
    },
    {
      id: 321122,
      name: 'Food Tri fold Brochure ',
      catogory: 'graphics',
      demo_link: '#',
      behance_link:
        'https://www.behance.net/gallery/125030907/Brunch-Menu-Brochure',
      featured_img:
        '  https://mir-s3-cdn-cf.behance.net/projects/404/a09fec125030907.Y3JvcCwyNzI1LDIxMzIsMzEwLDA.png',
      project_image:
        ' https://mir-s3-cdn-cf.behance.net/projects/404/a09fec125030907.Y3JvcCwyNzI1LDIxMzIsMzEwLDA.png',
    },
    {
      id: 321241263335,
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
      id: 233212,
      name: 'Real Estate Tri fold Brochure',
      catogory: 'graphics',
      demo_link: '#',
      behance_link:
        'https://www.behance.net/gallery/125095041/Real-Estate-Brochure',
      featured_img:
        'https://mir-s3-cdn-cf.behance.net/projects/404/c0ca82125095041.Y3JvcCwzODM1LDMwMDAsMjg0LDA.jpg',
      project_image:
        ' https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/d97e20125095041.611235789d90c.jpg',
    },
    {
      id: 321243512,
      name: 'Craftsol Systems',
      catogory: 'WP',
      demo_link: '#',
      behance_link:
        'https://www.behance.net/gallery/145908143/Craftsol-Systems',
      featured_img:
        'https://mir-s3-cdn-cf.behance.net/projects/max_808/583fdc145908143.Y3JvcCwzNDA4LDI2NjYsMjk1LDA.png',
      project_image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/fs/247012145908143.62a732f533e2c.png',
    },
  ];

  const reactProjects = [
    {
      id: 3212242,
      name: 'Binary Lab ',
      catogory: 'react',
      demo_link: '#',
      behance_link:
        'https://www.behance.net/portfolio/editor?project_id=146652877',
      featured_img:
        ' https://mir-s3-cdn-cf.behance.net/projects/404/9e2a73146652877.Y3JvcCwzNDA5LDI2NjcsMjk1LDA.jpg',
      project_image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/1400/b9d689146652877.62b41070987fd.png',
    },
    {
      id: 321289,
      name: 'Fitness Club',
      catogory: 'react',
      demo_link: '#',
      behance_link: 'https://www.behance.net/gallery/146654693/Fitness-Club',
      featured_img:
        ' https://mir-s3-cdn-cf.behance.net/projects/404/b032c7146654693.Y3JvcCwzNzQ1LDI5MzAsNjMwLDA.png',
      project_image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/fs/22cf49146654693.62b417b5b5c04.png',
    },
  ];

  const projects = [
    {
      id: 32112342,
      name: 'Binary Lab ',
      catogory: 'react',
      demo_link: '#',
      behance_link:
        'https://www.behance.net/portfolio/editor?project_id=146652877',
      featured_img:
        ' https://mir-s3-cdn-cf.behance.net/projects/404/9e2a73146652877.Y3JvcCwzNDA5LDI2NjcsMjk1LDA.jpg',
      project_image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/1400/b9d689146652877.62b41070987fd.png',
    },
    {
      id: 321212355,
      name: 'Fitness Club',
      catogory: 'react',
      demo_link: '#',
      behance_link: 'https://www.behance.net/gallery/146654693/Fitness-Club',
      featured_img:
        ' https://mir-s3-cdn-cf.behance.net/projects/404/b032c7146654693.Y3JvcCwzNzQ1LDI5MzAsNjMwLDA.png',
      project_image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/fs/22cf49146654693.62b417b5b5c04.png',
    },
    {
      id: 321245642,
      name: 'AustinWerner Job Portal',
      catogory: 'WP',
      demo_link: '#',
      behance_link: 'https://austinwerner.tech/',
      featured_img:
        '  https://mir-s3-cdn-cf.behance.net/projects/404/b84b72145889857.Y3JvcCwzNDA4LDI2NjYsMjk1LDA.jpg',
      project_image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/fs/5a6544145889857.62a6f4ef138c9.png',
    },
    {
      id: 321213123,
      name: 'Instant Pot Guru',
      catogory: 'WP',
      demo_link: '#',
      behance_link: 'https://instantpotguru.com/',
      featured_img:
        '  https://mir-s3-cdn-cf.behance.net/projects/max_808/f48a7d145913473.Y3JvcCwyOTY0LDIzMTgsMCwxNjE.png',
      project_image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/fs/2c5d55145913473.62a743abbb54b.png',
    },
    {
      id: 3213541312,
      name: 'Sutjlej Grains ',
      catogory: 'graphics',
      demo_link: '#',
      behance_link:
        'https://www.behance.net/gallery/125030079/Menu-Poster-for-Sutlej-Grains',
      featured_img:
        'https://mir-s3-cdn-cf.behance.net/projects/404/4bff2d125030079.Y3JvcCwyNTQ0LDE5ODksMCwxNzA.png',
      project_image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/336368125030079.611107cb832ec.jpg',
    },
    {
      id: 32128786532,
      name: 'Shoe Branding ',
      catogory: 'graphics',
      demo_link: '#',
      behance_link:
        'https://www.behance.net/gallery/125093873/Shoe-Branding-Poster',
      featured_img:
        'https://mir-s3-cdn-cf.behance.net/projects/404/df5e4f125093873.Y3JvcCwyMTY4LDE2OTUsMCwxMTg.png',
      project_image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/fs/8d2e70125093873.61122fb082b9e.png',
    },
    {
      id: 14533212,
      name: 'Food Tri fold Brochure ',
      catogory: 'graphics',
      demo_link: '#',
      behance_link:
        'https://www.behance.net/gallery/125030907/Brunch-Menu-Brochure',
      featured_img:
        '  https://mir-s3-cdn-cf.behance.net/projects/404/a09fec125030907.Y3JvcCwyNzI1LDIxMzIsMzEwLDA.png',
      project_image:
        ' https://mir-s3-cdn-cf.behance.net/projects/404/a09fec125030907.Y3JvcCwyNzI1LDIxMzIsMzEwLDA.png',
    },
    {
      id: 3212185,
      name: 'Real Estate Tri fold Brochure',
      catogory: 'graphics',
      demo_link: '#',
      behance_link:
        'https://www.behance.net/gallery/125095041/Real-Estate-Brochure',
      featured_img:
        'https://mir-s3-cdn-cf.behance.net/projects/404/c0ca82125095041.Y3JvcCwzODM1LDMwMDAsMjg0LDA.jpg',
      project_image:
        ' https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/d97e20125095041.611235789d90c.jpg',
    },
    {
      id: 321243512,
      name: 'Craftsol Systems',
      catogory: 'WP',
      demo_link: '#',
      behance_link:
        'https://www.behance.net/gallery/145908143/Craftsol-Systems',
      featured_img:
        'https://mir-s3-cdn-cf.behance.net/projects/max_808/583fdc145908143.Y3JvcCwzNDA4LDI2NjYsMjk1LDA.png',
      project_image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/fs/247012145908143.62a732f533e2c.png',
    },
    {
      id: 32124544353,
      name: 'Laundry Pal',
      catogory: 'WP',
      demo_link: '#',
      behance_link: 'https://laundrypal.pk/',
      featured_img:
        '  https://mir-s3-cdn-cf.behance.net/projects/404/92c246145708213.Y3JvcCwzNjAwLDI4MTUsMCw4OQ.png',
      project_image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/fs/fa9da2145708213.62a2ef8098cee.png',
    },

    {
      id: 321265652,
      name: 'Shams Al Khan Restaurant',
      catogory: 'WP',
      demo_link: '#',
      behance_link: 'https://shamsalkhan.com/',
      featured_img:
        'https://mir-s3-cdn-cf.behance.net/projects/404/fbb3aa145906613.Y3JvcCwzNjAwLDI4MTUsMCw4OQ.png',
      project_image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/fs/49f104145906613.62a72defa8eed.png',
    },
    {
      id: 32125522552,
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
      id: 321241263335,
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
      id: 321266465654,
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
      id: 3212454543,
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

  const wordPressProjects = [
    {
      id: 321245642,
      name: 'AustinWerner Job Portal',
      catogory: 'WP',
      demo_link: '#',
      behance_link: 'https://austinwerner.tech/',
      featured_img:
        '  https://mir-s3-cdn-cf.behance.net/projects/404/b84b72145889857.Y3JvcCwzNDA4LDI2NjYsMjk1LDA.jpg',
      project_image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/fs/5a6544145889857.62a6f4ef138c9.png',
    },
    {
      id: 321213123,
      name: 'Instant Pot Guru',
      catogory: 'WP',
      demo_link: '#',
      behance_link: 'https://instantpotguru.com/',
      featured_img:
        '  https://mir-s3-cdn-cf.behance.net/projects/max_808/f48a7d145913473.Y3JvcCwyOTY0LDIzMTgsMCwxNjE.png',
      project_image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/fs/2c5d55145913473.62a743abbb54b.png',
    },

    {
      id: 32124544353,
      name: 'Laundry Pal',
      catogory: 'WP',
      demo_link: '#',
      behance_link: 'https://laundrypal.pk/',
      featured_img:
        '  https://mir-s3-cdn-cf.behance.net/projects/404/92c246145708213.Y3JvcCwzNjAwLDI4MTUsMCw4OQ.png',
      project_image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/fs/fa9da2145708213.62a2ef8098cee.png',
    },

    {
      id: 321265652,
      name: 'Shams Al Khan Restaurant',
      catogory: 'WP',
      demo_link: '#',
      behance_link: 'https://shamsalkhan.com/',
      featured_img:
        'https://mir-s3-cdn-cf.behance.net/projects/404/fbb3aa145906613.Y3JvcCwzNjAwLDI4MTUsMCw4OQ.png',
      project_image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/fs/49f104145906613.62a72defa8eed.png',
    },
    {
      id: 32125522552,
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
      id: 321266465654,
      name: 'Ittehad Steels ',
      catogory: 'WP',
      demo_link: '#',
      behance_link: 'https://www.behance.net/gallery/126151907/My-Portfolio',
      featured_img:
        'https://mir-s3-cdn-cf.behance.net/projects/404/e0b384125241181.Y3JvcCw0MjYxLDMzMzMsMjMyLDA.jpg',
      project_image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/fs/2931db125241181.6114eb182c30d.png',
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

  const setVisiblity = (e) => {
    e.preventDefault();
    setVisible((prev) => prev + 3);
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
                <Tab className='tab' value='react' label='React' />
                <Tab className='tab' value='wordpress' label='WordPress' />
                <Tab className='tab' value='graphics' label='Graphics' />
              </Tabs>

              <TabPanel value='all' className='portfolio__container'>
                {projects.slice(0, visible).map((item, index) => {
                  return (
                    <ProjectItem
                      id={index}
                      name={item.name}
                      catagory={item.catogory}
                      // demo={item.demo_link}
                      behance={item.behance_link}
                      featured_img={item.featured_img}
                      onSelect={handleClickOpen}
                    />
                  );
                })}
                <Dialogue data={dialogue_item} />
              </TabPanel>

              <TabPanel value='react' className='portfolio__container'>
                {reactProjects.map((item, index) => {
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
                {/* <Dialogue data={dialogue_item} /> */}
              </TabPanel>
              <TabPanel value='wordpress' className='portfolio__container'>
                {wordPressProjects.map((item, index) => {
                  return (
                    <ProjectItem
                      id={index}
                      name={item.name}
                      catagory={item.catogory}
                      // demo={item.demo_link}
                      behance={item.behance_link}
                      featured_img={item.featured_img}
                      onSelect={handleClickOpen}
                    />
                  );
                })}
                {/* <Dialogue data={dialogue_item} /> */}
              </TabPanel>

              <TabPanel value='graphics' className='portfolio__container'>
                {graphicsProjects.map((item, index) => {
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
                {/* <Dialogue data={dialogue_item} /> */}
              </TabPanel>
            </Box>
          </TabContext>
        </div>
      </Checks.Provider>
      <div className='loadmore__btn'>
        <button onClick={setVisiblity} className='btn btn-primary load-btn'>
          Load more...
        </button>
      </div>
    </section>
  );
};

export default Projects;
