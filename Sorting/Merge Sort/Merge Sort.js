function merge(leftArr, rightArr) {
    let result = [];
    let i = 0;
    let j = 0;
    while(i < leftArr.length && j < rightArr.length) {
        if(leftArr[i] < rightArr[j]) {
            result.push(leftArr[i]);
            i++;
        }else {
            result.push(rightArr[j]);
            j++
        }
    }

    return [ ...result, ...leftArr.slice(i), ...rightArr.slice(j)]
}

const sortArray = function(nums) {
    if(nums.length <= 1) return nums; 
    let mid = Math.floor(nums.length / 2);
    let left = sortArray(nums.slice(0, mid));
    let right = sortArray(nums.slice(mid));
    return merge(left, right);
};

console.log(sortArray([4, 55, 3, 7]))

// Output: [ 3, 4, 7, 55 ]
// Time Complexity: O(nlogn)