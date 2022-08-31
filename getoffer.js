adobe.target.getOffers({
    request: {
        execute: {
            pageLoad: {
                parameters: {
"entity.id": '123'
}
            }
        }
    }
});


adobe.target.getOffers({
  request: {
    "prefetch": {
      "views": [
        {
          "parameters": {
            "entity.id": "987"
          },
          "profileParameters": {
            "user-age": 23
          }
        }
      ]
    }
  }
});
