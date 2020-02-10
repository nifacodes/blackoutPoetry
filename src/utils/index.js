export const createWordMap = (str) => str.split(' ').map((word) => ({ word, isClicked: false, isMouseOver: false }));
// export const createWordMap = () => { return "" };
export const getRandomNumberUpTo = (num) => Math.floor(Math.random() * (num - 1));

