adobe.target.getOffer({
  "mbox": "DemoBox2",
  "params":{
     "entity.id":"SampleProd_1",
     "entity.categoryId":"category_1",
     "entity.name":"My Awesome Product 1",
     "entity.message":"One of our best products!"
  },
  "success": function(offer) {
  console.log("Result: "+JSON.stringify(offer));
    var sample=JSON.stringify(offer);
    console.log(sample);
    console.log(sample.action);

  },
  "error": function(status, error) {
    console.log('Error', status, error);
  }
});

