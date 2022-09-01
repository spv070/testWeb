adobe.target.getOffer({
  "mbox": "DemoBox2",
  "params":{
     "entity.id":"Prod_5",
     
  },
  "success": function(offer) {
    console.log("Result: "+JSON.stringify(offer));
          var result =Object.entries(offer);
    console.log("content is"+result[0][1].content);
    
    adobe.target.applyOffers({response:{
  "execute": {
    "pageLoad": {
      "options": [{
        "type": "html",
        "content": "page-load"
      },
      {
        "type": "insertAfter",
        "content": [{
          
          "selector": "HTML > BODY > H2:nth-of-type(1)",
          "cssSelector":"HTML > BODY > H2:nth-of-type(1)",
          "content":result[0][1].content
        
        }]
      }],
 
 
      "metrics": [{
        "type": "click",
        "selector": "HTML > BODY > H2:nth-of-type(1)",
        "eventToken": "page-load-click-metric" 
      }]
    }
  }
}});

               
  },
  "error": function(status, error) {
    console.log('Error', status, error);
  }
});

