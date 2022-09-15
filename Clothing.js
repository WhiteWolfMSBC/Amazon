const api_url = "https://fakestoreapi.com/products/category/men's%20clothing";
const api_url1="https://fakestoreapi.com/products/category/women's%20clothing";


function Men() {
  
    // Toggle Button

  var x = document.getElementById("getTable");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }



    async function getData(url) {
        await fetch(url).then((res) => {
            console.log(res);
            return res.json();
        }).then((data) => {
            console.log(data);
            show(data)
        })
    }


    getData(api_url);


    function show(data) {
            let table=
            `<tr>
            <th>Id</th>
            <th>Title</th>
            <th>Images</th>
            <th>Category</th>
            <th>Description</th>
            <th>Price</th>
            <th>Rating</th>
            </tr>`


            for (const tbl of data){
                table +=
                `<tr>
            <td>  ${tbl.id}.  </td> 
            <td>  ${tbl.title}  </td>
            <td>  <img src="${tbl.image}" width="150px" height="150px" alt="img">     </td>
            <td>  ${tbl.category}  </td>
            <td>  ${tbl.description}  </td>
            <td>  $ ${tbl.price}  </td>
            <td>  ${tbl.rating.rate}  </td>
            </tr>`;
            }

        document.getElementById("getTable").innerHTML = table;



    }
}




function Women() {
  
    // Toggle Button

  var x1 = document.getElementById("getTable1");
  if (x1.style.display === "none") {
    x1.style.display = "block";
  } else {
    x1.style.display = "none";
  }



    async function getData1(url1) {
        await fetch(url1).then((res1) => {
            console.log(res1);
            return res1.json();
        }).then((data1) => {
            console.log(data1);
            show(data1)
        })
    }


    getData1(api_url1);


    function show(data1) {
            let table1=
            `<tr>
            <th>Id</th>
            <th>Title</th>
            <th>Images</th>
            <th>Category</th>
            <th>Description</th>
            <th>Price</th>
            <th>Rating</th>
            </tr>`


            for (const tbl1 of data1){
                table1 +=
                `<tr>
            <td>  ${tbl1.id}.  </td> 
            <td>  ${tbl1.title}  </td>
            <td>  <img src="${tbl1.image}" width="150px" height="150px" alt="img">     </td>
            <td>  ${tbl1.category}  </td>
            <td>  ${tbl1.description}  </td>
            <td>  $ ${tbl1.price}  </td>
            <td>  ${tbl1.rating.rate}  </td>
            </tr>`;
            }

        document.getElementById("getTable1").innerHTML = table1;



    }
}

