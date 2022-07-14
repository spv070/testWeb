adobe.target.getOffer({   
  "mbox": "WAG-mbox1",   
  "success": function(offers) {           
        adobe.target.applyOffer( {  
           "mbox": "WAG-mbox1", 
            selector: '#container1',
              offer: [{
                  type: 'html',
                  content: '<h5 style="color: darkolivegreen">hello <strong>world!</strong></h5>'
              }] 
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
