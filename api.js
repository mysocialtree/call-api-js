// url https://mstree.de/api/get.php + ? + api=token
fetch('https://mstree.de/api/get.php?api=token') //get data from server 
    .then(result => result.json()) // convert data to json 
    .then((output) => {   // output data
  
        console.log(output["id"]);  // print data to consol 
  
    }).catch(err => console.error(err)); // catch error 
