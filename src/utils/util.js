export const generatePendingToDoColor = () => {
  const listOfColors = [
    "#F0FFFF",
    "#F5F5DC",
    "#FFFAF0",
    "#FFF0F5",
    "#E6E6FA",
    "#E0FFFF",
    "#FFDAB9",
  ];
  return listOfColors[Math.floor(Math.random() * listOfColors.length)];
};

export const generateOverdueToDoColor = () => {
  const listOfColors = ["#ffcccc", "#ff9999", "#ffb3b3", "#ff9494"];
  return listOfColors[Math.floor(Math.random() * listOfColors.length)];
};
