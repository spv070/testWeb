adobe.target.getOffer({   
  "mbox": "WAG-mbox1",   
  "success": function(offers) {           
        adobe.target.applyOffer( {  
           "mbox": "WAG-mbox1", 
           "offer": offers  
        } ); 
  },   
  "error": function(status, error) {           
      if (console && console.log) { 
        console.log(status); 
        console.log(error); 
      } 
  }, 
 "timeout": 5000 
}); 
