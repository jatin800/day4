// function func(nums) {
//   const newSet = new Set();
//   for (let i = 0; i < nums.length; i++) {
//     let currentNum = nums[i];
//     if (newSet.has(currentNum)) {
//       return false;
//     }
//     newSet.add(currentNum);
//   }
//   return true;
// }
// n = [1, 2, 3];
// console.log(func(n));
// function func(s, t) {
//   const s1 = s.split("").sort().join("");
//   const s2 = s.split("").sort().join("");
//   return s1 === s2 ? true : false;
// }
// const s = "anagram",
//   t = "nagaram";
// console.log(func(s, t));
// function func(numArr, NumTarget) {
//   const target = NumTarget;
//   const arrLength = numArr.length;
//   for (let i = 0; i < arrLength; i++) {
//     for (let j = i + 1; j < arrLength; j++) {
//       if (numArr[i] + numArr[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }
// const n = [3, 2, 4],
//   t = 6;
// console.log(func(n, t));
// function func(strs) {
//   const s = strs;
//   let newMap = new Map();
//   for (let word of s) {
//     sw = word.split("").sort().join("");
//     if (newMap.has(sw)) {
//       newMap.get(sw).push(word);
//     } else {
//       newMap.set(sw, [word]);
//     }
//   }
//   return Array.from(newMap.values());
// }
// const s = ["eat", "tea", "tan", "ate", "nat", "bat"];
// console.log(func(s));
// function func(n, target) {
//   const nums = n;
//   const k = target;
//   const newMap = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (newMap.has(nums[i])) {
//       newMap.set(nums[i], newMap.get(nums[i]) + 1);
//     } else {
//       newMap.set(nums[i], 1);
//     }
//   }
//   let sorted = Array.from(newMap.entries()).sort((a, b) => b[1] - a[1]);
//   return sorted.slice(0, k).map((entry) => entry[0]);
// }
// const n = [1, 1, 1, 2, 2, 3],
//   k = 2;
// console.log(func(n, k));
// function func(num) {
//   const nums = num;
//   let l = 1;
//   let r = 1;
//   newArray = new Array(nums.length).fill(1);
//   for (i = 0; i < newArray.length; i++) {
//     newArray[i] = l;
//     l *= nums[i];
//   }
//   for (let j = newArray.length - 1; j >= 0; j--) {
//     newArray[j] *= r;
//     r *= nums[j];
//   }
//   return newArray;
// }
// const n = [1, 2, 3, 4];
// console.log(func(n));
// function func(b) {
//   const board = b;
//   const nS = new Set();
//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board.length; j++) {
//       const cellV = board[i][j];
//       if (cellV !== ".") {
//         let rV = `rV${i} ${cellV}`;
//         let cV = `cV${j} ${cellV}`;
//         let bV = `${Math.floor(i / 3)} ${Math.floor(j / 3)} ${cellV}`;
//         if (nS.has(rV) || nS.has(cV) || nS.has(bV)) {
//           return false;
//         }
//         nS.add(rV);
//         nS.add(cV);
//         nS.add(bV);
//       }
//     }
//   }
//   return true;
// }
// console.log(func(b));
// function func(str) {
//   let encode = str.map((str) => `${str.length}/${str}`).join("");
//   let result = decodeFunc(encode);
//   return result;
// }
// function decodeFunc(encode) {
//   let i = 0;
//   let r = [];
//   while (i < encode.length) {
//     let sIdx = encode.indexOf("/", i);
//     let l = Number(encode.slice(i, sIdx));
//     let p = sIdx + l + 1;
//     r.push(encode.slice(sIdx + 1, p));
//     i = p;
//   }
//   return r;
// }
// console.log(func(str));
// function func(nums) {
//   let maxLength = 0;
//   let currLength = 1;
//   const newSet = new Set(nums);
//   newSet.forEach((num) => {
//     if (!newSet.has(num - 1)) {
//       let currElem = num;
//       while (newSet.has(currElem + 1)) {
//         currElem++;
//         currLength++;
//       }
//     }
//     maxLength = Math.max(maxLength, currLength);
//   });
//   return maxLength;
// }
// const n = [100, 4, 200, 1, 2, 3];
// console.log(func(n));
// function func(string) {
//   const cS = string.toLowerCase().replace(/[^a-z0-9]/g, "");
//   const rS = cS.split("").reverse().join("");
//   return cS === rS ? true : false;
// }
// const s = "A man, a plan, a canal: Panama";
// console.log(func(s));
// function func(n, t) {
//   let left = 0;
//   nums = n;
//   target = t;
//   right = nums.length - 1;
//   while (left < right) {
//     const sum = nums[left] + nums[right];
//     if (sum > target) {
//       right--;
//     } else if (sum < target) {
//       left++;
//     } else if (sum === target) {
//       return [left + 1, right + 1];
//     }
//   }
// }
// const n = [1, 2, 3, 4, 5];
// t = 3;
// console.log(func(n, t));
// function func(n) {
//   const nums = n;
//   const sorted = nums.sort((a, b) => a - b);
//   const res = [];
//   for (let i = 0; i < sorted.length - 2; i++) {
//     if (i > 0 && sorted[i] === sorted[i - 1]) {
//       continue;
//     }
//     let l = i + 1;
//     let r = sorted.length - 1;
//     while (l < r) {
//       const s = sorted[i] + sorted[l] + sorted[r];
//       if (s === 0) {
//         res.push([sorted[l], sorted[r], sorted[i]]);
//         while (sorted[l] === sorted[l + 1]) l++;
//         while (sorted[r] === sorted[r - 1]) r--;
//         l++;
//         r--;
//       } else if (s > 0) {
//         r--;
//       } else {
//         l++;
//       }
//     }
//   }
//   return res;
// }
// const n = [-1, 0, 1, 2, -1, -4];
// console.log(func(n));
// function func(s1, s2) {
//   let s1L = s1.length;
//   let s2L = s2.length;
//   if (s1L > s2Length) return false;
//   const array1 = new Array(26).fill(0);
//   const array2 = new Array(26).fill(0);
//   for (let i = 0; i < array1.length; i++) {
//     array1[s1.charCodeAt(i) - 97]++;
//   }
//   for (let j = 0; j < s2L; j++) {
//     array2[s2.charCodeAt(j) - 97]++;
//     if (j >= s1L) {
//       array2[s2.charCodeAt(j - s1L) - 97]--;
//     }
//     if (arrayEqual(array1, array2)) return true;
//   }
// }
// function arrayEqual(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) return false;
//   }
//   return true;
// }
// console.log(func(s1, s2));

