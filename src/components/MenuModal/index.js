import { Button, Modal, Stack } from '@carbon/react';

export const MenuModal = ({ isOpen, setIsOpen, items }) => {
  const onRequestClose = () => setIsOpen(false);
  const wrappedItems = items.map((x) => ({
    ...x,
    onClick: () => {
      onRequestClose();
      x.onClick();
    },
  }));

  return (
    <Modal
      className="menu-modal"
      modalHeading="D.E. Varela"
      passiveModal
      onRequestClose={onRequestClose}
      open={isOpen}
    >
      <Stack>
        {wrappedItems.map((x) => (
          <Button
            className="menu-modal__button"
            key={x.text}
            onClick={x.onClick}
            kind="secondary"
            renderIcon={x.icon}
          >
            {x.text}
          </Button>
        ))}
      </Stack>
    </Modal>
  );
};
