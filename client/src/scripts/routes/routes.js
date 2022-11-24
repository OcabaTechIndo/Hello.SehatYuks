import ArtikelPage from '../views/pages/artikelPage';

const routes = {
    '/': home,
    '/artikel': ArtikelPage,
    '/artikel/detail/:id': detailArtikel,
}

export default routes;