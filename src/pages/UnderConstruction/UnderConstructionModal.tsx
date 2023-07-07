import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

interface ModalI {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  zIndex: 9999,
  p: 4,
};

const style1 = {
  zIndex: 9999,
  FontFace: "'Bebas Neue', 'sans-serif'",
};

export default function TransitionsModal({ isOpen, setIsOpen }: ModalI) {
  //   const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* <button id="under-click-id" type="button" onClick={handleOpen}>
        Open modal
      </button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isOpen}>
          <Box sx={style}>
            <Typography
              sx={style1}
              className="modal__heading"
              id="transition-modal-title"
              variant="h5"
              component="h2"
            >
              Embracing Transformation: We’re Under Construction!
            </Typography>
            <hr />
            <Typography
              className="modal__description"
              id="transition-modal-description"
              sx={{ mt: 2 }}
            >
              Greetings, esteemed visitors! Welcome to our digital abode, where
              exciting changes are taking shape. We apologize for the temporary
              inconvenience, but trust us when we say that something remarkable
              is brewing behind the scenes.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
