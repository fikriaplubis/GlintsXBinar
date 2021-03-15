const data = require('./lib/arrayFactory.js');
const test = require('./lib/test.js');

/*
 * Code Here!
 * */

console.log("\nData: ");
console.log(data);

// Optional
function clean(data) {
  return data.filter(i => typeof i === 'number');
}

console.log("\nClean Data: ")
console.log(clean(data));

// Should return array
function sortAscending(data) {
  // Code Here
  data = clean(data);
  for(let i = 0;i < data.length;i++){
    let swap = false;
    for(let j = 0;j < data.length-i-1;j++){
      if(data[j] > data[j+1]){
        let temp = data[j];
        data[j] = data[j+1];
        data[j+1] = temp;
        swap = true;
      }
    }
    if(swap == false){
      break;
    }
  }
  return data;
}

// Should return array
function sortDecending(data) {
  // Code Here
  data = clean(data);
  for(let i = 0;i < data.length;i++){
    let swap = false;
    for(let j = 0;j < data.length;j++){
      if(data[j] < data[j+1]){
        let temp = data[j];
        data[j] = data[j+1];
        data[j+1] = temp;
        swap = true;
      }
    }
    if(swap == false){
      break;
    }
  }
  return data;
}

// DON'T CHANGE
test(sortAscending, sortDecending, data);