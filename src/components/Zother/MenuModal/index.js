import { Button, Modal, Stack } from '@carbon/react';
import styles from './menuModal.module.scss';

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
      className={styles.box}
      modalHeading="D.E. Varela"
      passiveModal
      onRequestClose={onRequestClose}
      open={isOpen}
    >
      <Stack>
        {wrappedItems.map((x) => (
          <Button
            className={styles.menu_button}
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
