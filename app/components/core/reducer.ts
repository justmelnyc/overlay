export const toggleInverted = ({ inverted }: { inverted: boolean }) => ({
  inverted: !inverted
});

export const setInverted = (inverted: boolean) => () => ({
  inverted
});

export const setOpacity = (opacity: number) => () => ({ opacity });

export const move = (x: number, y: number) => () => ({
  x,
  y
});

export const resize = (width: number, height: number) => () => ({
  height,
  width
});
