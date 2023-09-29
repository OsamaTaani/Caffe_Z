function orderInputs(){
    const name = prompt("Enter your name : ");

    const gender = prompt("Enter your gender (Male/Female)");

    let alertMessage;
    if (gender.toLocaleLowerCase() === "male"){
         alertMessage = `Welcome , Mr. ${name}!`;
    }
    else if (gender.toLocaleLowerCase() === "female"){
        alertMessage = `Welcome , Ms. ${name}!`;
    }
    else {
        alertMessage = `Welcome , ${name}!`;
    }
    alert(alertMessage);

    const drinkTemp = prompt("Would you like (Hot/Cold) drink ? ");

    const drinkName = prompt("What drink would you like to order ? ");

    alert(`Your ${drinkTemp} ${drinkName} is getting prepared , pleaase be patient (: `);

    console.log(`${name} has ordered a ${drinkTemp} ${drinkName}`);

}
document.getElementById("startOrderButton").addEventListener("click",orderInputs)