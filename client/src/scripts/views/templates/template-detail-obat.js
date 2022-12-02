const templateDetailObat = (obat) => `
<div class="card" class="col" style="width: 18rem;">
<img src="${obat.image_drug}" class="card-img-top" alt="...">
    <div class="card-body" data-inner-detail>
        <h5 class="card-title">${obat.summary}</h5>
        <p class="card-text">${obat.name_general}</p>
        <p class="card-text">${obat.indicator}</p>
        <p class="card-text">${obat.brand_name}</p>
        <p class="card-text">${obat.background}</p>
    </div>
</div>
`;

export default templateDetailObat;
