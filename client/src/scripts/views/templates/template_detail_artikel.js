const templateDetailArtikel = (ar) => `\
<div class="kiri">
<div class="detail-view gambarArtikel">
        <h5 class="card-title titlePage">${ar.title}</h5>
        <img src="${ar.image}" class="card-img-top" alt="Gamabar Obat ${ar.title}">
</div>
</div>
<div class="kanan">
<div class="detail-view deskripsiObat"
        <p class="card-text">${ar.description}</p>
</div>
</div>
`;

export default templateDetailArtikel;
