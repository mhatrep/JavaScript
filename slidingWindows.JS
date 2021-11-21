
// [
//   [ 1, 2, 3, 4 ],
//   [ 2, 3, 4, 5 ],
//   [ 3, 4, 5, 6 ],
//   [ 4, 5, 6, 7 ],
//   [ 5, 6, 7, 8 ]
// ]

const slidingWindows = (arr, size) => {
    if (size > arr.length) {
        return arr;
    }
    let result = [];
    let lastWindow = arr.length - size;
    for (let i = 0; i <= lastWindow; i += 1) {
        result.push(arr.slice(i, i + size));
    }
    return result;
};

const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(slidingWindows(myArray,4))

// Reference: https://stackoverflow.com/questions/57001515/sliding-window-over-array-in-javascript
