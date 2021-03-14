let arr = ["tomato", "broccoli", "kale", "cabbage", "apple"];

let arr2 = arr.filter(word => word != "apple");

for(let i = 0;i < arr2.length;i++) {
    console.log(`${arr2[i]} is a healthy food, it's definitely worth to eat.`);
}