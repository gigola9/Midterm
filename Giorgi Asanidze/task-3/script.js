function createTable() {
    var body =  document.getElementById("tablee");
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    for (var i = 0; i < 3; i++) {
      var row = document.createElement("tr");
      for (var j = 0; j < 3; j++) {
        var cell = document.createElement("td");
        var randomNumber = document.createElement("p");
        randomNumber.innerHTML = Math.round(Math.random() * (50 - 10) + 10);
        cell.appendChild(randomNumber);
        row.appendChild(cell);
      }
      tblBody.appendChild(row);
    }
  
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
}

createTable()