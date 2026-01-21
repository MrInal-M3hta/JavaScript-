function getData(dataID, getNextData){
      setTimeout(()=> {
        console.log("DataID", dataID)
        if(getNextData){
          getNextData();
        }
      }, 2000)
    };

    getData(1, ()=>{
      getData(2, ()=>{
        getData(3, ()=>{
          getData(4)
        })
      });
    });