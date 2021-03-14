const data = require('./lib/arrayFactory.js');
const test = require('./lib/test.js');

/*
 * Code Here!
 * */

console.log("\nData: ");
console.log(data);

// Optional
let cleanData = [];
function clean(data) {
  cleanData = data.filter(i => typeof i === 'number');
  return cleanData;
}

console.log("\nClean Data: ")
clean(data);
console.log(cleanData);

// Should return array
function sortAscending(cleanData) {
  // Code Here
  //let swap = 0;
  for(let i = 0;i < cleanData.length;i++){
    for(let j = 0;j < cleanData.length;j++){
      if(cleanData[j] > cleanData[j+1]){
        let temp = cleanData[j];
        cleanData[j] = cleanData[j+1];
        cleanData[j+1] = temp;
        //swap = 1;
      }
    }
    /*if(swap == 0){
      break;
    }*/
  }
  return cleanData;
}

console.log("\nASC: ");
console.log(sortAscending(cleanData));

// Should return array
function sortDecending(cleanData) {
  // Code Here
  //let swap = 0;
  for(let i = 0;i < cleanData.length;i++){
    for(let j = 0;j < cleanData.length;j++){
      if(cleanData[j] < cleanData[j+1]){
        let temp = cleanData[j];
        cleanData[j] = cleanData[j+1];
        cleanData[j+1] = temp;
        //swap = 1;
      }
    }
    /*if(swap == 0){
      break;
    }*/
  }
  return cleanData;
}

console.log("\nDESC: ");
console.log(sortDecending(cleanData));

// DON'T CHANGE
test(sortAscending, sortDecending, data);