adobe.target.getOffer({
  "mbox": "DemoBox2",
  "params":{
     "entity.id":"Prod_1",
     
  },
  "success": function(content) {
  
                var result =Object.entries(content);
    document.getElementsByTagName("h2")[0].innerHTML=result[0][1].content[0].innerText;


  },
  "error": function(status, error) {
    console.log('Error', status, error);
  }
});

