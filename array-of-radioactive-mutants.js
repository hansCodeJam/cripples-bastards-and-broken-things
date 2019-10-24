function changeLast(arr, value) {
  arr.pop();
  arr.push(value);
}

function addMeToEnd(arr) {
  arr.push('Colin')
}

function addMeToStart(arr) {
  arr.unshift('Colin')
}

function changeAllValuesTo(arr, value) {
  const i = 0;

  while (i < arr.length) {
    arr[i] = value;

    i++;
  }
}

function oddOrEven(arr) {
  let i = 0;

  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      arr[i] = 'even'
    } else {
      arr[i] = 'odd'
    }

    i++;
  }
}

function changeNextThreeToValue(start, arr, value) {
  let i = start;
  let count = 0;

  while (i < arr.length && count < 3) {
    arr[i] = value;

    count++;
    i++;
  }
}

module.exports = {
  changeLast,
  addMeToEnd,
  addMeToStart,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}