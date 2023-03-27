exports.convertToObject = (data, key) => {
  const object = {};
  for (let i of data) {
    object[i[key]] = i;
  }
  return object;
};
