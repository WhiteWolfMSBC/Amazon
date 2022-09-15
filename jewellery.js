const api_url = "https://fakestoreapi.com/products/category/jewelery";


function jewellery() {
  
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




