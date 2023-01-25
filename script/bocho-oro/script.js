let menu = document.getElementsByClassName("card-title");

for (let i = 0; i < menu.length; i++) {
  menu[i].querySelector(".card-body").style.display = "none";
}

for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", function () {
    if (this.querySelector(".card-body").style.display == "block") {
      this.querySelector(".card-body").style.display = "none";
    } else {
      this.querySelector(".card-body").style.display = "block";
    }
  });
}

document.getElementById("close-form").addEventListener("click", function () {
  document.getElementsByClassName("dialog-add")[0].style.display = "none";
});

document.getElementById("agregar").addEventListener("click", function () {
  document.getElementsByClassName("dialog-add")[0].style.display = "block";
});

let dataSourceCars = [
  {
    Marca: "BMW",
    Modelo: "Sonic",
    Precio: 150000,
    Sucursal: "Torréon",
    Lote: "Galerias",
    Estatus: 1,
  },
  {
    Marca: "Chevrolet",
    Modelo: "Sonic",
    Precio: 150000,
    Sucursal: "Torréon",
    Lote: "Galerias",
    Estatus: 1,
  },
  {
    Marca: "BMW",
    Modelo: "Sonic",
    Precio: 150000,
    Sucursal: "Torréon",
    Lote: "Galerias",
    Estatus: 1,
  },
  {
    Marca: "Chevrolet",
    Modelo: "Sonic",
    Precio: 150000,
    Sucursal: "Torréon",
    Lote: "Galerias",
    Estatus: 1,
  },
  {
    Marca: "Ford",
    Modelo: "Sonic",
    Precio: 150000,
    Sucursal: "Torréon",
    Lote: "Galerias",
    Estatus: 1,
  },
  {
    Marca: "Honada",
    Modelo: "Sonic",
    Precio: 150000,
    Sucursal: "Torréon",
    Lote: "Galerias",
    Estatus: 1,
  },
  {
    Marca: "Honda",
    Modelo: "Sonic",
    Precio: 150000,
    Sucursal: "Torréon",
    Lote: "Galerias",
    Estatus: 1,
  },
  {
    Marca: "Toyota",
    Modelo: "Sonic",
    Precio: 150000,
    Sucursal: "Torréon",
    Lote: "Galerias",
    Estatus: 1,
  },
  {
    Marca: "Toyota",
    Modelo: "Sonic",
    Precio: 150000,
    Sucursal: "Torréon",
    Lote: "Galerias",
    Estatus: 1,
  },
  {
    Marca: "Ford",
    Modelo: "Sonic",
    Precio: 150000,
    Sucursal: "Torréon",
    Lote: "Galerias",
    Estatus: 1,
  },
];

let myTable = document.getElementById("mainTable");

let dataSourceCarsCopy = dataSourceCars;

dataSourceCars.forEach((element, index, array) => {
  myTable.innerHTML += `<tr> 
    <td>${element.Marca}</td>  
    <td>${element.Modelo}</td>  
    <td>$${element.Precio}.00</td>  
    <td>${element.Sucursal}</td>  
    <td>${element.Lote}</td>  
    <td>${element.Estatus}</td>  
    <td>${element.Marca}</td>  
    </tr>`;
});

document.getElementById("filterArray").addEventListener("keyup", function () {
  console.log(this.value);

  if (this.value === "") {
    dataSourceCarsCopy = dataSourceCars;
  } else {
    dataSourceCarsCopy = dataSourceCars.filter((item) => {
      return item.Marca.toString()
        .toLowerCase()
        .includes(this.value.toLowerCase());
    });

    console.log(dataSourceCarsCopy);
  }

  myTable.innerHTML = `<tr>
  <th>Marca</th>
  <th>Modelo</th>
  <th>Precio</th>
  <th>Sucursal</th>
  <th>Lote</th>
  <th>Estatus</th>
  <th>Acciones</th>
</tr>`;

  dataSourceCarsCopy.forEach((element, index, array) => {
    myTable.innerHTML += `
    <tr> 
      <td>${element.Marca}</td>  
      <td>${element.Modelo}</td>  
      <td>$${element.Precio}.00</td>  
      <td>${element.Sucursal}</td>  
      <td>${element.Lote}</td>  
      <td>${element.Estatus}</td>  
      <td>${element.Marca}</td>  
      </tr>`;
  });
});
