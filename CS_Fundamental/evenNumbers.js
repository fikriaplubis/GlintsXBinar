function evenNumbers(array, number) {
    let opt = [];
    
    for(let i = array.length-1;i>=0;i--){
      if(array[i]%2==0){
        if(opt.length < number){
          opt.unshift(array[i]);
        } else {
          break;
        }
      }
    }
    
    return opt;
}