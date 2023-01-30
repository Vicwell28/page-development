let dataSourcesCars = {
  model: "Seat Ibiza Xcellence",
  desc: "2018 - 60,200 km - Torreón",
  precio_fin: "Desde $3,937/mes",
  precio_cont: "Contado $291,999",
};

// <!-- inicio -->

// <!-- fin -->

const myMain = document.getElementsByClassName("main")[0];

for (let i = 0; i < 30; i++) {
  myMain.innerHTML += `
<div class="card-car col-3">
  <div class="card-card">
    <div class="card-car-img">
      <div
        class="img"
        style="background-image: url('../../assets/bocho-oro/1.png')"
      ></div>
    </div>
    <div class="card-car-desc">
      <p class="text card-car-desc-title">${dataSourcesCars.model}</p>
      <p class="text card-car-desc-esx">${dataSourcesCars.desc}</p>
      <p class="text card-car-desc-price">${dataSourcesCars.precio_fin}</p>
      <p class="text card-car-desc-contado">${dataSourcesCars.precio_cont}</p>
    </div>
  </div>
</div>`;
}
