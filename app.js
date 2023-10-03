function orderInputs() {

    const name = prompt("Enter your name: ");
    const {greeting , gender} = getGender(name);
    alert(`Welcome, ${greeting}`);

    const drinkTemp = prompt("Would you like (Hot/Cold) drink?");
    const drinkName = prompt("What drink would you like to order?");

    alert(`Your ${drinkTemp} ${drinkName} is getting prepared. Please be patient (: `);

    const arr1 = [name, greeting, drinkTemp, drinkName];
    console.log(arr1);

    console.log(`${name} has ordered a ${drinkTemp} ${drinkName}`);

    

    let div = document.getElementById("userInfos");
    let p = document.createElement("p");
    let ulElements = document.createElement("ul");
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");


    p.textContent = `${name}`;
    li1.textContent = `Gender: ${gender}`;
    li2.textContent = `Drink : ${drinkName} ${drinkTemp}`;

    div.appendChild(p);
    div.appendChild(ulElements);
    ulElements.appendChild(li1);
    ulElements.appendChild(li2);

}
function getGender(name) {
    let gender;
    while (true) {
        gender = prompt("Enter your gender (Male/Female): ");

        if (gender.toLowerCase() === "male") {
            return { greeting: `Mr. ${name}`, gender };
        } else if (gender.toLowerCase() === "female") {
            return { greeting: `Ms. ${name}`, gender };
        } else {
            alert("Please enter a valid gender.");
        }
    }
}

document.getElementById("startOrderButton").addEventListener("click", orderInputs);