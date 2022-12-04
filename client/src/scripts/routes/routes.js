import artikelPage from '../views/pages/artikelPage';
import HomePage from '../views/pages/home';
import LingkunganPage from '../views/pages/lingkungan';
import Covid19Page from '../views/pages/covid19';
import ObatPage from '../views/pages/pages-info-obat';
import ObatFavorite from '../views/pages/obat_favorite';
import userLogin from '../views/pages/login.user';
import detailObat from '../views/pages/detail_obat_page';
import DetailCovidPage from '../views/pages/detail_covid';
import KomunitasLingkunganPage from '../views/pages/Komunitas_lingkungan';

const routes = {
    '/': HomePage,
    '/home': HomePage,
    '/artikel': artikelPage,
    '/lingkungan': LingkunganPage,
    '/covid19': Covid19Page,
    '/obat': ObatPage,
    '/obat_favorite': ObatFavorite,
    '/detail_obat_page/:id': detailObat,
    '/login': userLogin,
    '/detail_covid/:id': DetailCovidPage,
    '/komunitas_lingkungan': KomunitasLingkunganPage,
};

export default routes;
