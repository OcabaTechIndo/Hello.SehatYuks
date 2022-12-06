const templateDetailArtikel = (ar) => `
<div class="imgDetailObat">
<div class="detail-obat gambarObat">
<h5 class="card-title judulObat">${ar.title}</h5>
<img src="${ar.image}" class="card-img-top" alt="Gamabar Obat ${ar.name_general}">
</div>
</div>
<aside>
<div class="detail-obat deskripsiObat"
        <p class="card-text">${ar.description}</p>
</div>
</aside>
`;

export default templateDetailArtikel;
