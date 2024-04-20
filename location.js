document.getElementById('addressForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Gather form data
  var fullName = document.getElementById('fullName').value;
  var street = document.getElementById('street').value;
  var city = document.getElementById('city').value;
  var latitude = document.getElementById('latitude').value;
  var longitude = document.getElementById('longitude').value;

  // Perform any client-side validation if needed
  if (fullName.trim() === '' || street.trim() === '' || city.trim() === '') {
    alert('Please fill in all required fields.');
    return; // Stop further processing if validation fails
  }

  // Simulate form data processing (replace with your actual logic)
  var formData = {
    fullName: fullName,
    street: street,
    city: city,
    latitude: latitude,
    longitude: longitude
  };

  // Display a loading indicator or message
  showLoadingIndicator();

  // Simulate sending form data to a server (replace with your actual API call)
  setTimeout(function() {
    // Assume the form was successfully processed
    hideLoadingIndicator(); // Hide the loading indicator
    alert('Form submitted successfully!'); // Display success message
    // Redirect to another page if needed
    window.location.href = 'confirmation.html'; // Replace 'confirmation.html' with your confirmation page URL
  }, 2000); // Simulate a delay of 2 seconds (2000 milliseconds)
});

// Function to display a loading indicator
function showLoadingIndicator() {
  // Display a loading spinner or message
  // Replace this with your actual loading indicator implementation
  document.getElementById('loadingIndicator').style.display = 'block';
}

// Function to hide the loading indicator
function hideLoadingIndicator() {
  // Hide the loading spinner or message
  // Replace this with your actual loading indicator implementation
  document.getElementById('loadingIndicator').style.display = 'none';
}