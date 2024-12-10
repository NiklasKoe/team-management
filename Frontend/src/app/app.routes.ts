import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { NewsComponent } from './pages/news/news.component';
import { TeamComponent } from './pages/team/team.component';
import { GamesComponent } from './pages/games/games.component';

export const routes: Routes = [
    {
        path: 'welcome',
        component: WelcomeComponent
    },
    {
        path: 'news',
        component: NewsComponent
    },
    {
        path: 'team',
        component: TeamComponent
    },
    {
        path: 'games',
        component: GamesComponent
    }
];
