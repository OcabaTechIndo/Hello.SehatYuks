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
import AnswerPage from '../views/pages/answer_page';
import RegisterPage from '../views/pages/register_page';
import detailArtikel from '../views/pages/detail_artikel_page';
import FoodHealthPage from '../views/pages/food_health._page';

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
    '/answer_view': AnswerPage,
    '/register_page': RegisterPage,
    '/detail_artikel/:id': detailArtikel,
    '/food_page': FoodHealthPage,
};

export default routes;
