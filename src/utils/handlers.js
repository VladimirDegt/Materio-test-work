export const handleOpenModal = (e, setState) => {
  setState(e.target);
};

export const handleCloseModal = setState => {
  setState(false);
};

export const handleClickTheme = (setState, toggleTheme) => {
  setState(prevState => !prevState);
  toggleTheme();
};

export const handleClose = (setClose, handleCloseModal, setState) => {
  setClose(false);
  handleCloseModal(setState);
};

export const handleCloseModalMUI = (
  setAnchorEl,
  handleCloseModal,
  setState
) => {
  setAnchorEl(null);
  handleCloseModal(setState);
};

export const handleListItemClick = (event, index, setSelectedIndex) => {
  setSelectedIndex(index);
};
