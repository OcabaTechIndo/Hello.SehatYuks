import artikelPage from '../views/pages/artikelPage';
import HomePage from '../views/pages/home';
import LingkunganPage from '../views/pages/lingkungan';
import Covid19Page from '../views/pages/covid19';
import ObatPage from '../views/pages/pages-info-obat';
import ObatFavorite from '../views/pages/obat_favorite';
import UdaraSegarPage from '../views/pages/udara_segar';
import userLogin from '../views/pages/login.user';
import detailObat from '../views/pages/detail_obat_page';

const routes = {
    '/': HomePage,
    '/home': HomePage,
    '/artikel': artikelPage,
    '/lingkungan': LingkunganPage,
    '/covid19': Covid19Page,
    '/udara_segar': UdaraSegarPage,
    '/obat': ObatPage,
    '/obat_favorite': ObatFavorite,
    '/detail_obat_page/:id': detailObat,
    '/login': userLogin,
};

export default routes;
