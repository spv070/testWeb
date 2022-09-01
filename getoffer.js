adobe.target.getOffer({
  "mbox": "DemoBox2",
  "params":{
     "entity.id":"Prod_1",
     
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
          "type": "setHtml",
          "content":result[0][1].content[0],
          "selector": "HTML > BODY",
        
        }]
      }],
 
 
      "metrics": [{
        "type": "click",
        "selector": "HTML > BODY",
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

