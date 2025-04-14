export default function appendToEachArrayValue(array, appendString) {
  const appendArray = [];
  for (const item of array) {
    appendArray.push(appendString + item);
  }

  return appendArray;
}
