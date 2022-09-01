adobe.target.getOffer({
  "mbox": "DemoBox2",
  "params":{
     "entity.id":"SampleProd_1",
     "entity.categoryId":"category_1",
     "entity.name":"My Awesome Product 1",
     "entity.message":"One of our best products!"
  },
  "success": function(content) {
  
   
    var obj = JSON.stringify(content);
    consol.log("obj") is +obj);
var result = Object.keys(obj).map((key) => [Number(key), obj[key]]);
    console.log(result);


  },
  "error": function(status, error) {
    console.log('Error', status, error);
  }
});

