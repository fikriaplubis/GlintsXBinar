function solve(a,b){
    let c = [];
    
    for(let i =0;i<b.length;i++){
      let count = 0;
      for(let j = 0;j<a.length;j++){
        if(b[i] === a[j]){
          count += 1;
        }
      }
      c[i] = count;
    }

    return c;
}