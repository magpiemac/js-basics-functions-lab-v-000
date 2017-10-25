// Code your solution in this file!
function distanceFromHqInBlocks (numberofBlocks) {
  if (numberofBlocks > 42) {
    return numberofBlocks - 42;
  } else {
    return 42 - numberofBlocks;
  }
}

function distanceFromHqInFeet (numberofBlocks) {
  return distanceFromHqInBlocks(numberofBlocks) * 264;
}

function distanceTravelledInFeet (startpoint, endpoint) {
  if (startpoint < endpoint) {
    return (endpoint - startpoint) * 264;
 }  else {
    return (startpoint - endpoint) * 264;
  }
}

function calculatesFarePrice (startpoint, endpoint) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0
  }
    
}
