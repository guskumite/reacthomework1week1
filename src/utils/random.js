export const getRandom = (list) => {
  // Here goes the logic to pick a phrase randomly
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
};
