let obj = [
    {
        name: "John",
        status: "Positive"
    },
    {
        name: "Mike",
        status: "Suspect"
    },
];

let userStatus = "Suspect";

switch (userStatus) {
    case "Positive":
        for(let i = 0;i < obj.length;i++){
            if(obj[i].status == userStatus){
                console.log(obj[i].name);
            }
        }
    break;
    case "Suspect":
        for(let i = 0;i < obj.length;i++){
            if(obj[i].status == userStatus){
                console.log(obj[i].name);
            }
        }
    break;
}