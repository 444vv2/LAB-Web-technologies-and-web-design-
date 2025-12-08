import car1 from '../Icons/car1.png';
import car2 from '../Icons/car2.png';
import car3 from '../Icons/car3.png';
import car4 from '../Icons/car4.png';
import car5 from '../Icons/car5.png';
import car6 from '../Icons/car6.png';
import car7 from '../Icons/car7.png';
import car8 from '../Icons/car8.png';
import car9 from '../Icons/car9.png';
import car10 from '../Icons/car10.png';

const imageMap = {
  'car1.png': car1,
  'car2.png': car2,
  'car3.png': car3,
  'car4.png': car4,
  'car5.png': car5,
  'car6.png': car6,
  'car7.png': car7,
  'car8.png': car8,
  'car9.png': car9,
  'car10.png': car10,
};

export const getCarImage = (filename) => {
  if (!filename) return car1;
  
  // Якщо є точний збіг
  if (imageMap[filename]) {
    return imageMap[filename];
  }

  const basename = filename.split(/[/\\]/).pop();
  if (imageMap[basename]) {
    return imageMap[basename];
  }

  return car1;
};