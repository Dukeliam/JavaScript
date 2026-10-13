let symbol = '*';

for(let index = 1; index <= 7; index+=2){
      
      for(let space = 4; space >= (index + 1) / 2; space--){
            process.stdout.write(" ");
      }
           
            for(let star = 1; star <= index; star++){
                  process.stdout.write(symbol);
            }
                  console.log();
}
for(let index = 5; index >= 1; index-=2){
      
      for(let space = 4; space >= (index + 1) / 2; space--){
            process.stdout.write(" ");
      }
           
            for(let star = index; star >= 1; star--){
                  process.stdout.write(symbol);
            }
                  console.log();
}

