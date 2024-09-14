const arr = [1, 2, 3, 4, 5];

let n = arr.length - 1;

for (let i = 0, j = n; i <= n / 2; i++, j--) {
  let temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}

console.log(arr);
