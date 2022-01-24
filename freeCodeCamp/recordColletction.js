// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if (prop === 'tracks' ){ 
      if (value ===""){
         delete records[id][prop];
         return records;
      }
      else{
        if (records[id].hasOwnProperty("tracks")=== false){
          records[id][prop]=[];
          records[id][prop][0]= value; 
          return records;
        }
        else{
          records[id][prop].push(value);
          return records;
        }
      }
    
  
    }
    else{
      if (value === ""){
        delete records[id][prop]; 
        return records;
      } 
      else{
        records[id][prop] = value; 
        return records;
      }
  
    }
      
  
    }
  

    function multiplyAll(arr) {
        let product = 1;
        // Only change code below this line
        for(let i = 0; i< arr.lenght; i++){
          for (let j = 0; j < arr[i].length; j++){
            product *= arr[i][j];
          }
      
        }
        // Only change code above this line
        return product;
      }
      
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');