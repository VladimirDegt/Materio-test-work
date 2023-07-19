import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import debounce from 'lodash/debounce';
import {
  StyledInput,
  StyledBoxIconClose,
  SyledEscButton,
} from './Search.styled';
import IconClose from 'icons/close';

import IconSearch from 'icons/search';

export default function ModalSearch({ isOpen, handleCloseModal }) {
  const [open, setOpen] = useState(isOpen);
  const [_, setInputValue] = useState('');

  const debouncedSetInput = debounce(value => setInputValue(value), 500);

  const handleInput = ({ target }) => {
    debouncedSetInput(target.value);
  };

  const handleClose = () => {
    setOpen(false);
    handleCloseModal();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <FormControl variant="standard">
          <StyledInput
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <IconSearch />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <StyledBoxIconClose>
                  <SyledEscButton onClick={handleClose}>
                    <p>[esc]</p>
                  </SyledEscButton>
                  <SyledEscButton onClick={handleClose}>
                    <IconClose />
                  </SyledEscButton>
                </StyledBoxIconClose>
              </InputAdornment>
            }
            onChange={handleInput}
          />
        </FormControl>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
