let urlArray = ["https://reqres.in/api/users", "https://reqres.in/api/users"]

let myArray = []
let link1;	

for (let index = 0; index < urlArray.length; index++){
     link1 = urlArray[index];
	$.ajax({
        method:'GET',
		url: link1,
		success:function(response){
			myArray = response.data
			buildTable(myArray)
            console.log(myArray)
		}
    })
}    

function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("table1");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }


	function buildTable(data){
		let table = document.getElementById('myTable')
    
		for (let i = 0; i < data.length; i++){
			
      let forcast = data[i].first_name;
      let previousBill = data[i].email;
       
      let row = `<tr>
							<td>${data[i].first_name}</td>
							<td>${data[i].last_name}</td>
							<td>${data[i].email}</td>
              <td>${data[i].first_name}</td>
              <td>${data[i].last_name}</td>   
              <td>${data[i].email}</td>
              <td><img style = "width:30px; height:30px; border-radius: 15px " src=${forcast<previousBill ? "red.png" : "green1.png" }></td>
					  </tr>`
			table.innerHTML += row


        }
        
	}
