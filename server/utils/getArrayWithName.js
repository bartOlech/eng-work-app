exports.get = (currentArray) => {
  let array = [];
  for (let i = 0; i < currentArray.length; i++) {
    array = [...array, currentArray[i].name]
  }

  return array;
}