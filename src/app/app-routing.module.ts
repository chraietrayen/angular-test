import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { AccueilComponent } from './accueil/accueil.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
  { path: 'connect', component:ConnexionComponent},
  { path: 'accueil', component:AccueilComponent},
  { path: 'inscription', component:InscriptionComponent},
  { path: 'panier', component:PanierComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
