function calDemeritPoints(speed) {
    const speedLimit = 70;
    const DemeritPointPerkm = 5;
    const maxDemeritPoints = 12;
  
    if (speed < speedLimit) {
      console.log("Ok");
    } else {
      const demeritPoints = Math.floor((speed - speedLimit) / DemeritPointPerkm);
      
      if (demeritPoints > maxDemeritPoints) {
        console.log("License suspended");
      } else {
        console.log("Points: " + demeritPoints);
      }
    }
  }
  
  // Prompt the user for car speed
  var inputSpeed = parseFloat(prompt("Enter the car's speed (in km/h):"));
  
  // Check if the input is a valid number
  if (isNaN(inputSpeed)) {
    console.log("Invalid input! Please enter a valid number.");
  } else {

    calculateDemeritPoints(inputSpeed);
  }