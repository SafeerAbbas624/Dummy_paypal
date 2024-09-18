// Popup page script



// document.getElementById('transfer-button').addEventListener('click', function() {
//     // ... existing transfer logic ...
//   // Get the transfer amount and validate it
//   const transferAmount = parseFloat(document.getElementById('transfer-amount').value);
//   if (isNaN(transferAmount) || transferAmount <= 0) {
//     alert('Invalid transfer amount. Please enter a positive number.');
//     return;
//   }

//   // Send a POST request to the server
//   fetch('/transfer', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ amount: transferAmount })
//   })
//   .then(response => response.json())
//   .then(data => {
//     if (data.success) {
//       // Update the balance on the client side
//       const balanceElement = document.getElementById('balance');
//       const currentBalance = parseFloat(balanceElement.textContent);
//       balanceElement.textContent = (currentBalance - transferAmount).toFixed(2);

//       // Redirect to the popup page
//       window.location.href = '/popup';
//     } else {
//       alert('Transfer failed. Please try again.');
//     }
//   })
//   .catch(error => {
//     console.error('Error sending request:', error);
//   });

//     if (data.success) {
//       // Update the display elements
//       document.getElementById('transfer-amount-display').textContent = transferAmount;
//       document.getElementById('username-display').textContent = username;
  
//       // Show the payment confirmation
//       document.getElementById('payment-confirmation').style.display = 'block';
//     }
//   });
  






document.addEventListener('DOMContentLoaded', () => {
    // Get the transfer amount and username from the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const transferAmount = urlParams.get('transferAmount');
    const username = urlParams.get('username');
  
    // Update the display elements
    document.getElementById('transfer-amount-display').textContent = transferAmount;
    document.getElementById('username-display').textContent = username;
  });








  
  document.getElementById('make-another-payment').addEventListener('click', function() {
    // Redirect to the index page
    window.location.href = '/';
  });