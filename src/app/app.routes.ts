import { Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about';
import { CategoriesComponent } from './pages/categories/categories';
import { CategoryDetailComponent } from './pages/category-detail/category-detail';
import { GameDetailComponent } from './pages/game-detail/game-detail';
import { GamesComponent } from './pages/games/games';
import { HomeComponent } from './pages/home/home';
import { NewsDetailComponent } from './pages/news-detail/news-detail';
import { NewsComponent } from './pages/news/news';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'games', component: GamesComponent },
  { path: 'games/:slug', component: GameDetailComponent },

  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/:slug', component: CategoryDetailComponent },

  { path: 'news', component: NewsComponent },
  { path: 'news/:slug', component: NewsDetailComponent },
  { path: 'about', component: AboutComponent },
];
