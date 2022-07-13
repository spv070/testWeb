
adobe.target.getOffers({
  request: {
    prefetch: {
      mboxes: [
         {
          index: 0,
          name: "WAG-mbox1",
          parameters: {
            prodID: 1
          },
          profileParameters: {
            storeID: 2
          }
        },
         {
          index: 1,
          name: "WAG-mbox2",
          parameters: {
            prodID: 1
          },
          profileParameters: {
            storeID: 2
          }
        },
        {
          index: 2,
          name: "WAG-mbox3",
          parameters: {
            prodID: 1
          },
          profileParameters: {
            storeID: 2
          }
        }
      ]
    }
  }
})
.then(response => {
  // get all mboxes from response
  const mboxes = response.prefetch.mboxes;
  let count = 1;

  mboxes.forEach(el => {
    adobe.target.applyOffers({
      selector: "#container" + count,
      response: {
        prefetch: {
          mboxes: [el]
        }
      }
    });

    count += 1;
  });
});
