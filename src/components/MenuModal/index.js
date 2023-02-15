import { createElement } from 'react';
import { Modal, Stack, ClickableTile } from '@carbon/react';

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
          <ClickableTile
            className="menu-modal__tile"
            key={x.text}
            onClick={x.onClick}
          >
            {createElement(
              x.icon,
              { className: 'menu-modal__icon' },
              undefined
            )}
            {x.text}
          </ClickableTile>
        ))}
      </Stack>
    </Modal>
  );
};
