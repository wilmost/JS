let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card){
    case 2: 
    case 3: 
    case 4: 
    case 5:
    case 6:
        return  count +=1;
        break; 
    case 7: 
    case 8: 
    case 9:
        return count +=0; 
        break;
    case 10: 
    case "J":
    case "Q":
    case "K": 
    case "A":
        return count -=1;
        if (count <=0){
            return count + " Hold"
            }
        else{
            return count + " Bet"
        }    
            break;
    
      }
  
 
 // return "Change Me";
  // Only change code above this line
}