// 10 days of Javascript
// This file is created by mayur

const getSecondLargest = (nums) => {
    
    let firstNum = nums[0];
    let secondNum;
    for(let a=0; a<nums.length; a++){
        if(nums[a] > firstNum){
            secondNum = firstNum;
            firstNum = nums[a];
        }

        if(nums[a] > secondNum && nums[a] < firstNum){
            secondNum = nums[a];
        }
    }
    return secondNum;
}