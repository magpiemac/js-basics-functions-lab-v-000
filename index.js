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
