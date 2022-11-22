function distanceFromHqInBlocks(distance){
      if (distance>42){
        return distance-42;
      }
      else{
        return 42-distance
      }
    
}
console.log(distanceFromHqInBlocks(50));

function distanceFromHqInFeet(distance){
    if (distance>42){
        return (distance-42)*264;
      }
      else{
        return (42-distance)*264
      }
   
}
console.log(distanceFromHqInFeet(50))

function distanceTravelledInFeet(start, destination){
    if (destination>42){
            return (destination-start)*264;
          }
          else{
            return (start-destination)*264;
          }

}
console.log(distanceTravelledInFeet(48,43));

function calculatesFarePrice(start, destination){
    const totalFeetTravelled = distanceTravelledInFeet(start, destination);
    if(totalFeetTravelled <=400){
        return 0;
    }
    else if(totalFeetTravelled >400 && totalFeetTravelled <= 2000){
        return (totalFeetTravelled-400)*0.02;
    }
    else if(totalFeetTravelled > 2000 && totalFeetTravelled <= 2500){
            return 25;
        }
    else {
        return "cannot travel that far"
    }        
}



