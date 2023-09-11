import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { BlogPageComponent } from './components/pages/blog-page/blog-page.component';
import { BookNowPageComponent } from './components/pages/book-now-page/book-now-page.component';
import { CarsPageComponent } from './components/pages/cars-page/cars-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { CruisesPageComponent } from './components/pages/cruises-page/cruises-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { FlightDetailsPageComponent } from './components/pages/flight-details-page/flight-details-page.component';
import { FlightsListingPageComponent } from './components/pages/flights-listing-page/flights-listing-page.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoThreeComponent } from './components/pages/home-demo-three/home-demo-three.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { HotelDetailsPageComponent } from './components/pages/hotel-details-page/hotel-details-page.component';
import { HotelsListingPageComponent } from './components/pages/hotels-listing-page/hotels-listing-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';

const routes: Routes = [
    {path: '', component: HomeDemoThreeComponent},
    {path: 'index-3', component: HomeDemoOneComponent},// PODE EXCLUIR
    {path: 'index-2', component: HomeDemoTwoComponent},// PODE EXCLUIR
    {path: 'hotels-listing', component: HotelsListingPageComponent}, // ESSA AQUI QUE VAI SER A LISTAGEM, PQ TEM MAIS INFORMAÇÕES SOBRE A EXCURSÂO. SÓ ADICIONAR A PARTE DE PARTIDAS QUE TEM NA LISTAGEM DE FLIGHTS
    {path: 'hotel-details', component: HotelDetailsPageComponent}, // ESSA AQUI QUE VAI SER A LISTAGEM, PQ TEM MAIS INFORMAÇÕES SOBRE A EXCURSÂO.
    {path: 'flights-listing', component: FlightsListingPageComponent},// PODE EXCLUIR
    {path: 'flight-details', component: FlightDetailsPageComponent},// PODE EXCLUIR
    {path: 'cruises', component: CruisesPageComponent},// PODE EXCLUIR
    {path: 'cars', component: CarsPageComponent},
    {path: 'about', component: AboutPageComponent},// FICA, TO ESCREVENDO O ABAUTI AINDA.
    {path: 'faq', component: FaqPageComponent},// VOU MANDAR AS INFORMAÇÕES
    {path: 'book-now', component: BookNowPageComponent},// PODEMOS DEIXAR PARA CASO ELA JÀ QUEIRA PREENCHER E A GENTE JÁ MANDA PARA O EXCURSEIRO.
    {path: 'login', component: LoginPageComponent},// JÁ DIZ TUDO.
    {path: 'register', component: RegisterPageComponent},// JÁ DIZ TUDO.
    {path: 'privacy-policy', component: PrivacyPolicyPageComponent},
    {path: 'terms-conditions', component: TermsConditionsPageComponent},// PAGINA PODE ADAPTAR PARA CADASTRO, VOU MANDAR AS INFORMAÇÕES NECESSÀRIAS NO TRELLO.
    {path: 'blog', component: BlogPageComponent},//PODE EXCLUIR.
    {path: 'blog-details', component: BlogDetailsPageComponent},//PODE EXCLUIR
    {path: 'contact', component: ContactPageComponent}, // PODE ADAPTAR PARA SER A PAGINA DE DESCRIÇÃO DO EXCURSEIRO.
    // Here add new pages component

    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }