adobe.target.getOffer({
  "mbox": "DemoBox2",
  "params":{
     "entity.id":"Prod_1",
     
  },
  "success": function(offer) {
    console.log("Result: "+JSON.stringify(offer));
          var result =Object.entries(offer);
    console.log(result[0][1].offer[0]);
               
  },
  "error": function(status, error) {
    console.log('Error', status, error);
  }
});

