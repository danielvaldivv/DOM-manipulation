const minimum = 1;
const maximum = 122;

const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;

export const createImageNodes = () => {
  const wrapper = document.createElement("div");

  const image = document.createElement("img");
  // image.src =
  //   "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=";
  //   debugger
  image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;
  image.width = 320;

  wrapper.append(image);

  return [wrapper, image];
};