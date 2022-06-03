import React, { useContext, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { AiOutlineClose } from 'react-icons/ai';
import Slide from '@mui/material/Slide';
import { Checks } from './Projects.jsx';
import './projects.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const Dialogue = (props) => {
  // const [open, setOpen] = React.useState(false);

  const { open, setOpen } = useContext(Checks);
  // const { dialogue_item, set_dialogue_item } = useContext(DialogueItem);
  console.log('dialogue-item', props.data);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className='dialogue_container'>
      {/* <Button variant='outlined' onClick={handleClickOpen}>
        Open full-screen dialog
      </Button> */}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}>
        {/* <AppBar sx={{ position: 'relative' }}> */}
        <Toolbar className='dialogue__text'>
          <IconButton
            edge='start'
            color='inherit'
            onClick={handleClose}
            aria-label='close'>
            <AiOutlineClose />
          </IconButton>
          {/* <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
            {props.data.name}
          </Typography> */}
        </Toolbar>
        {/* </AppBar> */}
        <div className='dialogue_content '>
          <h1 className='mb-5'>{props.data.name}</h1>
          <img
            src={props.data.project_image}
            alt='Server Issue'
            className='mt-2'
            style={{ objectFit: 'cover' }}
          />
        </div>
      </Dialog>
    </div>
  );
};

export default Dialogue;
