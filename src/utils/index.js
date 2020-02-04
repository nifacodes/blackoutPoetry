export const createWordMap = (str) => str.split(' ').map((word) => ({ word, isClicked: false, isMouseOver: false }));

export const getRandomNumberUpTo = (num) => Math.floor(Math.random() * (num - 1));

