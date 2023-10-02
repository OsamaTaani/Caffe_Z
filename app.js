// function orderInputs(){
//     const name = prompt("Enter your name : ");


  
//     let gender;
//     while (true){
//         gender = prompt("Enter your gender (Male/Female): ");

//         if (gender.toLowerCase() ==="male"){

//             alert(`Welcome , Mr. ${name}`);
//             break;
//         }
//         else if(gender.toLocaleLowerCase() === "female"){
//             alert(`Welcome , Ms. ${name}`);
//             break;
//         }
//         else{
//             alert("Please enter valid gender .");
//         }
//     }

//     // if (gender.toLocaleLowerCase() === "male"){
//     //      alertMessage = `Welcome , Mr. ${name}!`;
//     // }
//     // else if (gender.toLocaleLowerCase() === "female"){
//     //     alertMessage = `Welcome , Ms. ${name}!`;
//     // }
//     // else {
//     //     alertMessage = `Welcome , ${name}!`;
//     // }
//     // alert(alertMessage);

//     const drinkTemp = prompt("Would you like (Hot/Cold) drink ? ");

//     const drinkName = prompt("What drink would you like to order ? ");

//     alert(`Your ${drinkTemp} ${drinkName} is getting prepared , pleaase be patient (: `);

//     const arr1 = [`${name}` , `${gender}` , `${drinkTemp}` , `${drinkName}` ];
//     console.log(`${arr1}`);
//     for (let i = 0; i < arr1.length; i++){
//         console.log(arr1[i]);
//     }
    

//     console.log(`${name} has ordered a ${drinkTemp} ${drinkName}`);


// }
// document.getElementById("startOrderButton").addEventListener("click",orderInputs);

function getGender(name) {
    let gender;
    while (true) {
        gender = prompt("Enter your gender (Male/Female): ");

        if (gender.toLowerCase() === "male") {
            return `Mr. ${name}`;
        } else if (gender.toLowerCase() === "female") {
            return `Ms. ${name}`;
        } else {
            alert("Please enter a valid gender.");
        }
    }
}

function orderInputs() {
    const name = prompt("Enter your name: ");
    const greeting = getGender(name);
    alert(`Welcome, ${greeting}`);

    const drinkTemp = prompt("Would you like (Hot/Cold) drink?");
    const drinkName = prompt("What drink would you like to order?");

    alert(`Your ${drinkTemp} ${drinkName} is getting prepared. Please be patient (: `);

    const arr1 = [name, greeting, drinkTemp, drinkName];
    console.log(arr1);

    console.log(`${name} has ordered a ${drinkTemp} ${drinkName}`);
}

document.getElementById("startOrderButton").addEventListener("click", orderInputs);
