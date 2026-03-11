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
          getData(4,()=>{
            getData(5, ()=>{
              getData(6, ()=>{
                getData(7, ()=>{
                  getData(8)
                })
              })
            })
          })
        })
      });
    });   