let symbol = "*"

for(let index = 1; index <= 5; index++){
            
      for(let count = 1; count <= index; count++){
            process.stdout.write(symbol);
      }
            for(let space = 5; space >= index; space--){
                  process.stdout.write(" ");
            }
                  for(let star = 5; star >= index; star--){
                        process.stdout.write(symbol);
                  }
                        for(let counter = 1; counter <= index; counter++){
                              process.stdout.write(" ");
                        }
for(let star2 = 5; star2 >= index; star2--){
      process.stdout.write(symbol);
}
      for(let space2 = 1; space2 <= index; space2++){
           process.stdout.write(" "); 
      }
            for(let star3 = 1; star3 <= index; star3++){
                  process.stdout.write(symbol);
            }
                  for(let space4 = 5; space4 >= index; space4--){
                        process.stdout.write(" ");
                  }
                  console.log();
      }
