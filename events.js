
function showInputs() {
    const username = document.getElementById('username').value;
    const age = document.getElementById('age').value;
    
    let temperature;
    if (document.getElementById('cold').checked) {
        temperature = 'Cold';
    } else if (document.getElementById('hot').checked) {
        temperature = 'Hot';
    } else {
        temperature = 'Not specified';
    }

    const drinkType = document.getElementById('drinkType').value;

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<p>Username: ${username}</p>
                            <p>Age: ${age}</p>
                            <p>Temperature: ${temperature}</p>
                            <p>Drink Type: ${drinkType}</p>`;
}