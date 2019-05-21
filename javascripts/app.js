// Rover Object Goes Here
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog:[]
};
console.log("Rover is facing to the " + rover.direction + " and its position is: " + rover.x + " , " + rover.y);
// ======================
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction){
    case "N":
      rover.direction ="W";
      console.log("Rover is facing to the " + rover.direction);
    break;
    case "W":
      rover.direction ="S";
      console.log("Rover is facing to the " + rover.direction);
    break;
    case "S":
      rover.direction ="E";
      console.log("Rover is facing to the " + rover.direction);
    break;
    case "W":
      rover.direction ="N";
      console.log("Rover is facing to the " + rover.direction);
    break;
    default:
      console.log("Give me some directions!");
    break;
  }
  console.log("Rover is facing to the " + rover.direction + " and its position is: " + rover.x + " , " + rover.y);
  rover["travelLog"].push(rover.direction + rover.x + rover.y);
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction){
    case "N":
      rover.direction ="E";
      console.log("Rover is facing to the " + rover.direction);
    break;
    case "E":
      rover.direction ="S";
      console.log("Rover is facing to the " + rover.direction);
    break;
    case "S":
      rover.direction ="W";
      console.log("Rover is facing to the " + rover.direction);
    break;
    case "W":
      rover.direction ="N";
      console.log("Rover is facing to the " + rover.direction);
    break;
    default:
      console.log("Give me some directions!");
    break;
  }
  console.log("Rover is facing to the " + rover.direction + " and its position is: " + rover.x + " , " + rover.y);
  rover["travelLog"].push(rover.direction + rover.x + rover.y);
}

function moveForward(rover){
  console.log("moveForward was called");
  switch (rover.direction){
    case "W":
      rover.x--;
      console.log("Rover is facing to the " + rover.direction + " and its position is: " + rover.x + " , " + rover.y);
      break;
    case "E":
      rover.x--;
      console.log("Rover is facing to the " + rover.direction + " and its position is: " + rover.x + " , " + rover.y);
      break;
    case "N":
      rover.y--;
      console.log("Rover is facing to the " + rover.direction + " and its position is: " + rover.x + " , " + rover.y);
    case "S":
      rover.y++;
      console.log("Rover is facing to the " + rover.direction + " and its position is: " + rover.x + " , " + rover.y);
    default:
      console.log("Seems like your rover has no direction");
  }
  rover["travelLog"].push(rover.direction + rover.x + rover.y);
}
var commands = "rffrfflfrff";
function roverMoves(commands){
  for (var i= 0; i < commands.length; i++){
    if( commands[i] === "f"){
      moveForward(rover);
    }
    else if( commands[i] === "r"){
      turnRight(rover);
    }
    else if(commands[i] === "l"){
      turnLeft(rover);
    }
    else {
      console.log("Invalid command. Try again!");
    }
  }
}



