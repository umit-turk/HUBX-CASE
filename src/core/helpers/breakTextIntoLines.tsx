export const breakTextIntoLines = (text, maxWordsPerLine) => {
  const words = text.split(' ');

  if (words.length > maxWordsPerLine) {
    const halfIndex = Math.ceil(words.length / 2);
    const firstLine = words.slice(0, halfIndex).join(' ');
    const secondLine = words.slice(halfIndex).join(' ');

    return [firstLine, secondLine];
  }

  return [text];
};
