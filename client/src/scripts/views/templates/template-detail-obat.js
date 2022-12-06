const templateDetailObat = (obat) => `
<div class="kiri">
<div class="detail-view gambarObat">
<h5 class="card-title titlePage">${obat.name_general}</h5>
<img src="${obat.image_drug}" class="card-img-top" alt="Gamabar Obat ${obat.name_general}">
</div>
</div>
<div class="kanan">
<div class="detail-view deskripsiObat"
        <p class="card-text">${obat.summary}</p>
        <p class="card-text">${obat.indicator}</p>
        <p class="card-text">${obat.brand_name}</p>
        <p class="card-text">${obat.background}</p>
</div>
</div>
`;

export default templateDetailObat;
