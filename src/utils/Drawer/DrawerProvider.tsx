import * as React from 'react';
import Drawer from '@mui/material/Drawer';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface DrawerProviderI {
  children: React.ReactNode;
  anchor: 'left' | 'right' | 'top' | 'bottom';
  icon: React.ReactNode;
}

export default function DrawerProvider({
  children,
  anchor,
  icon,
}: DrawerProviderI) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchorState: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchorState]: open });
    };

  return (
    <>
      <button
        className="drawer__btn"
        type="button"
        onClick={toggleDrawer(anchor, true)}
      >
        {icon}
      </button>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {children}
      </Drawer>
    </>
  );
}
