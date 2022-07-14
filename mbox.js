
adobe.target.getOffers({
  request: {
    prefetch: {
      mboxes: [
         {
          index: 0,
          name: "WAG-mbox1",
          parameters: {
            prodID: '10_packid'
          },
          parameters: {
            prodID: '12_packid'
          },
          profileParameters: {
            WAGstore: '11_packid'
          }
        },
         {
          index: 1,
          name: "WAG-mbox2",
          profileParameters: {
            WAGstore: '13_packid'
          }
        },
        {
          index: 2,
          name: "WAG-mbox3",
          parameters: {
            prodID: '14_packid'
          },
          profileParameters: {
            WAGstore: '15_packid'
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
      type: "setHtml",
      content: "<h1>Container 1</h1>",
      response: {
        prefetch: {
          mboxes: [el]
          
        }
      }
    });

    count += 1;
  });
});
