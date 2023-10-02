function volume_sphere() {
  // Get the radius value from the input field
  const radius = parseFloat(document.getElementById("radius").value);

  // Check if the input is a valid number
  

  // Calculate the volume of the sphere
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Display the calculated volume in the volume field
  document.getElementById("volume").value = volume.toFixed(2);
}
