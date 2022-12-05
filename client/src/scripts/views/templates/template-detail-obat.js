const templateDetailObat = (obat) => `
<div class="imgDetailObat">
<div class="detail-obat gambarObat">
<h5 class="card-title judulObat">${obat.name_general}</h5>
<img src="${obat.image_drug}" class="card-img-top" alt="Gamabar Obat ${obat.name_general}">
</div>
</div>
<aside>
<div class="detail-obat deskripsiObat"
        <p class="card-text">${obat.summary}</p>
        <p class="card-text">${obat.indicator}</p>
        <p class="card-text">${obat.brand_name}</p>
        <p class="card-text">${obat.background}</p>
</div>
</aside>
`;

export default templateDetailObat;
