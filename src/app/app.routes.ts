import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AktuellesComponent } from './pages/aktuelles/aktuelles.component';
import { TrainingComponent } from './pages/training/training.component';
import { FomulareComponent } from './pages/fomulare/fomulare.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';
import { DatenschutzComponent } from './pages/datenschutz/datenschutz.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Startseite - ACD' },
    { path: 'aktuelles', component: AktuellesComponent, title: 'Aktuelles - ACD' },
    { path: 'training', component: TrainingComponent, title: 'Training - ACD' },
    { path: 'fomulare', component: FomulareComponent, title: 'Fomulare - ACD' },
    { path: 'kontakt', component: KontaktComponent, title: 'Kontakt - ACD' },
    { path: 'datenschutz', component: DatenschutzComponent, title: 'Datenschutz - ACD' },
    { path: 'impressum', component: ImpressumComponent, title: 'Impressum - ACD' }
];
