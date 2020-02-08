export const randomImg = imgArr => {
  return Math.floor(Math.random() * imgArr.length);
};

export const pageCount = count => {
  return Math.ceil(count / 10) || 1;
};

export const objectEmpty = obj => {
  return Object.keys(obj).length === 0;
};

export const splitURL = url => {
  return url.split('api')[2];
};
