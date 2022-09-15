const api_url = "https://fakestoreapi.com/products";


function getDetails() {
  
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



// const tbl = document.createElement("table");
// const tblBody = document.createElement("tbody");
// for (let i = 0; i < 2; i++) {
//  const row = document.createElement("tr");  
//   for (let j = 0; j < 2; j++) {

//     const cell = document.createElement("td");
//     const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
//     cell.innerText = data;
//     cell.appendChild(cellText);
//     row.appendChild(cell);
//   } 
//   tblBody.appendChild(row);
// }

// tbl.appendChild(tblBody);
// document.body.appendChild(tbl);
// tbl.setAttribute("border", "2");



// document.getElementById("getTable").innerHTML = tbl;








//         fetch('https://fakestoreapi.com/products/category/jewelery')
//         .then(function (response) {
//             return response.json();
//         }).then(function (apiJsonData) {
//             console.log(apiJsonData);
//             renderDataInTheTable(apiJsonData);
//         })

//     function renderDataInTheTable(todos) {
//         const mytable = document.getElementById("getTable");
//         todos.forEach(todo => {
//             let newRow = document.createElement("tr");
//             Object.values(todo).forEach((value) => {
//                 let cell = document.createElement("td");
//                 cell.innerText = value;
//                 newRow.appendChild(cell);
//             })
//             mytable.appendChild(newRow);
//         });
//     }


//     let newRow = document.createElement("tr");
// Object.values(todo).forEach((value) => {
//     let cell = document.createElement("td");
//     cell.innerText = value;
//     newRow.appendChild(cell);
// })



