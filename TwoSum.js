numbers = [2, 7, 8, 5];
target = 9;

for(let index = 0; index <= numbers.length; index++){
      for(let count = 0 + 1; count <= numbers.length; count++){
            let sum = numbers[index] + numbers[count];
            if(sum == target){
                  console.log([index, count])
            }
      }
}
