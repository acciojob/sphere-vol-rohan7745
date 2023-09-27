function volume_sphere() {
    //Write your code 
	 const radius = parseFloat(document.getElementById('radius').value);

    // Check if the input is a valid number
    if (!isNaN(radius) && radius >= 0) {
        // Calculate the volume using the formula
        const volume = (4/3) * Math.PI * Math.pow(radius, 3);

        // Update the volume field with the calculated volume (rounded to 2 decimal places)
        document.getElementById('volume').value = volume.toFixed(2);
    } else {
        // If the input is not a valid number, display an error message
        document.getElementById('volume').value = 'Invalid Input';
    }
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
