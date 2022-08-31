adobe.target.getOffers({
  request: {
    "prefetch": {
      "views": [
        {
          "parameters": {
            "entity.id": "SampleProd_1"
          },
          "profileParameters": {
            "user-age": 23
          }
        }
      ]
    }
  }
});
