adobe.target.getOffers({
  request: {
    "prefetch": {
      "views": [
        {
          "parameters": {
            "entity.id": "123456"
          },
          "profileParameters": {
            "user-age": 23
          }
        }
      ]
    }
  }
});
