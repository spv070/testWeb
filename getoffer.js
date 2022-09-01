adobe.target.getOffer({
  "mbox": "DemoBox2",
  "params":{
     "entity.id":"Prod_1",
     
  },
  "success": function(offer) {
    console.log("Result: "+JSON.stringify(offer));
          var result =Object.entries(offer);
    console.log(result[0][1].content[0]);
    
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
          "content": "<div><style type=\"text\/css\">\n  .at-table {\n    display:table;\n    width:auto;\n    border-spacing:5px;\n    table-layout: fixed;\n    float:left;\n  }\n\n  .at-table-row {\n    display:table-row;\n    width:auto;\n    clear:both;\n    padding:10px;\n  }\n\n  .at-table-column {\n    float:left;\n    display:table-column;\n    padding:10px;\n    max-width: 300px;\n    word-wrap: break-word;\n  \n\n  }\n\n  .at-thumbnail {\n    max-width: 150px;\n    max-height: 150px;\n  }\n\n  .at-light {\n    font-weight: lighter;\n    margin-top: -10px;\n    size: 10em;\n  }\n<\/style>\n<div class=\"at-table\">\n  <div class=\"at-table-row\">\n    <div class=\"at-table-column\">\n        <img src=\"https:\/\/pics.drugstore.com\/prodimg\/542296\/450.jpg\" class=\"at-thumbnail\"\/>\n        <br\/><h3>Prod_1<\/h3>\n        <br\/><p class=\"at-light\">Calamine Lotion<\/p>\n        \n    <\/div>\n    <div class=\"at-table-column\">\n        <img src=\"https:\/\/pics.drugstore.com\/prodimg\/622844\/450.jpg\" class=\"at-thumbnail\"\/>\n        <br\/><h3>Prod_2<\/h3>\n        <br\/><p class=\"at-light\">Elastic Earloop Disposable Face<\/p>\n        \n    <\/div>\n  \n    <div class=\"at-table-column\">\n        <img src=\"https:\/\/pics.drugstore.com\/prodimg\/504597\/450.jpg\" class=\"at-thumbnail\"\/>\n        <br\/><h3>Prod_4<\/h3>\n        <br\/><p class=\"at-light\">ProVent Skin Tag Oil<\/p>\n        \n    \n  <\/div>\n<\/div>\n<\/div><\/div>"
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

