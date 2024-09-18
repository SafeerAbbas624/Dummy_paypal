

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('transfer-button').addEventListener('click', function() {
    // Get the transfer amount and validate it
    const transferAmount = parseFloat(document.getElementById('transfer-amount').value);
    if (isNaN(transferAmount) || transferAmount <= 0) {
      alert('Invalid transfer amount. Please enter a positive number.');
      return;
    }

    // Get the username
    const username = document.getElementById('username').value;

    // Send a POST request to the server
    fetch('/transfer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount: transferAmount, username: username })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // Update the balance on the client side
        const balanceElement = document.getElementById('balance');
        const currentBalance = parseFloat(balanceElement.textContent);
        balanceElement.textContent = (currentBalance - transferAmount).toFixed(2);

        // Redirect to the popup page with query parameters
        window.location.href = `/popup?transferAmount=${transferAmount}&username=${username}`;
      } else {
        alert('Transfer failed. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error sending request:', error);
    });
  });
});
