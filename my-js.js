
let form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();
  
    // Get the values entered by the user
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const money = document.getElementById('money').value;
    const health = document.getElementById('health').value;
  
    // Display the entered values (for testing purposes)
    const outputName = document.getElementById('nameOutput');
    outputName.textContent = `${name}`;

    const outputAge = document.getElementById('ageOutput');
    outputAge.textContent = `${age}`;

    const outputHealth = document.getElementById('healthOutput');
    outputHealth.textContent = `${health}`;

    const outputMoney = document.getElementById('moneyOutput');
    outputMoney.textContent = `${money}`;

   
  });

