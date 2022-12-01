const templateDetailObat = (obat) => `
<div class="card" class="col" style="width: 18rem;">
<img src="" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${obat.background}</h5>
        <p class="card-text">${obat.brand_name}</p>
        <p class="card-text">${obat.id}</p>
        <p class="card-text">${obat.indicator}</p>
        <p class="card-text">${obat.name_general}</p>
        <p class="card-text">${obat.numberdrugaccess}</p>
        <p class="card-text">${obat.summary}</p>
    </div>
</div>
`;

export default templateDetailObat;
