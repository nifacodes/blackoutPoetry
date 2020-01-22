export const createWordMap = (str) => str.split(' ').map((word) => ({ word, isClicked: false, isMouseOver: false }));

export const getRandomNumber = () => Math.floor(Math.random() * 9);

export const getRandomNumberUpTo4 = () => Math.floor(Math.random() * 3);
