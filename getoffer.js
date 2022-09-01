adobe.target.getOffer({
  "mbox": "DemoBox2",
  "params":{
     "entity.id":"SampleProd_1",
     "entity.categoryId":"category_1",
     "entity.name":"My Awesome Product 1",
     "entity.message":"One of our best products!"
  },
  "success": function(content) {
  
                var result =Object.entries(content);
    document.getElementsByTagName("h2")[0].innerHTML=result[0][1].content[0].innerText;


  },
  "error": function(status, error) {
    console.log('Error', status, error);
  }
});

