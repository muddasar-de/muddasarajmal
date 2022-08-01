import './projects.css';
import HoverVideoPlayer from 'react-hover-video-player';
import Demo from '../../assests/rec-tab.webm';

const ProjectItem = (props) => {
  return (
    <article className='portfolio__item'>
      <div className='portfolio__item-image'>
        <a
          onClick={() => {
            props.onSelect(props.id);
          }}>
          <img src={props.featured_img} className='img_container'></img>
        </a>
      </div>
      <small className='catagory'> Catagory: {props.catagory}</small>
      <h3>{props.name}</h3>
      <div className='portfolio__cta'>
        <a href={props.behance} target='_blank' className='btn btn-primary'>
          View More
        </a>
      </div>
    </article>
  );
};

export default ProjectItem;

/* <HoverVideoPlayer
            videoSrc="https://www.loom.com/share/a58f99f87a5848cfb4eb388956db7728"
            className='video_container'
            pausedOverlay={
              <img
                src={props.featured_img}
                alt=''
                style={{
                  // Make the image expand to cover the video's dimensions
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            }
            loadingOverlay={
              <div className='loading-overlay'>
                <div className='loading-spinner' />
              </div>
            }
          /> */
