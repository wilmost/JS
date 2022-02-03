const seatingChart = [ 
    ["Kristen", "Erik", "Namita"],
    ["Geofrey","juanita","Antonio"],
    ["Yuma","Sakura","Jack", "Erika"]
]

function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
        for (let i = 0; i < arr.length; i++){
         let res = 1
         const factor = arr[i];
          for (let j = 0; j < factor.length; j++){
              res *= factor[j];
              product = product * res;
          }
       }
    // Only change code above this line
    return product;
  }
  
//  const r = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
//   console.log(r)

// for (let i = 0; i < seatingChart.length; i++){
//     const row = seatingChart[i];
//     console.log(`ROW #${i +1}`)
//     for (let j = 0; j < row.length; j++){
//         console.log(row[j]) 
//     }
    
    
    
// }s]

let users2 = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    }
}

let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };

  const theFour = ['Alan', 'Jeff', 'Sarah','Ryan']
  function isEveryoneHere(userObj) {
      //const theFour = ['Alan', 'Jeff', 'Sarah','Ryan']
    // Only change code below this line
    let count = 0
    for ( let user in userObj){
        if ( user in users === true ){
            count +=1
            console.log(user)
        }else {
            return false;
        }
        
    }
    if (count == 4){
        return true;
    } 
    // Only change code above this line
  }
  
  //console.log(isEveryoneHere(users));