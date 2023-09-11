import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import {DpDatePickerModule} from 'ng2-date-picker';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { HomeDemoThreeComponent } from './components/pages/home-demo-three/home-demo-three.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { SubscribeComponent } from './components/common/subscribe/subscribe.component';
import { HowItWorksComponent } from './components/common/how-it-works/how-it-works.component';
import { FeedbackComponent } from './components/common/feedback/feedback.component';
import { DownloadMobileAppComponent } from './components/common/download-mobile-app/download-mobile-app.component';
import { HotelsComponent } from './components/common/hotels/hotels.component';
import { PropertiesComponent } from './components/common/properties/properties.component';
import { WhyChooseUsComponent } from './components/common/why-choose-us/why-choose-us.component';
import { DestinationsComponent } from './components/common/destinations/destinations.component';
import { FeaturesComponent } from './components/common/features/features.component';
import { HdoBannerComponent } from './components/pages/home-demo-one/hdo-banner/hdo-banner.component';
import { TopHeaderComponent } from './components/common/top-header/top-header.component';
import { HdtBannerComponent } from './components/pages/home-demo-two/hdt-banner/hdt-banner.component';
import { VideoComponent } from './components/common/video/video.component';
import { FaqComponent } from './components/common/faq/faq.component';
import { BlogComponent } from './components/common/blog/blog.component';
import { CustomerSupportComponent } from './components/common/customer-support/customer-support.component';
import { HmdtBannerComponent } from './components/pages/home-demo-three/hmdt-banner/hmdt-banner.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { BlogPageComponent } from './components/pages/blog-page/blog-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { TeamComponent } from './components/common/team/team.component';
import { AboutComponent } from './components/common/about/about.component';
import { BookNowPageComponent } from './components/pages/book-now-page/book-now-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { CruisesPageComponent } from './components/pages/cruises-page/cruises-page.component';
import { CarsPageComponent } from './components/pages/cars-page/cars-page.component';
import { PopularDestinationsComponent } from './components/common/popular-destinations/popular-destinations.component';
import { PopularCruiseComponent } from './components/common/popular-cruise/popular-cruise.component';
import { FeaturedCruiseComponent } from './components/common/featured-cruise/featured-cruise.component';
import { HotelsListingPageComponent } from './components/pages/hotels-listing-page/hotels-listing-page.component';
import { HotelDetailsPageComponent } from './components/pages/hotel-details-page/hotel-details-page.component';
import { FlightsListingPageComponent } from './components/pages/flights-listing-page/flights-listing-page.component';
import { FlightDetailsPageComponent } from './components/pages/flight-details-page/flight-details-page.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeDemoOneComponent,
        HomeDemoTwoComponent,
        HomeDemoThreeComponent,
        FooterComponent,
        NavbarComponent,
        SubscribeComponent,
        HowItWorksComponent,
        FeedbackComponent,
        DownloadMobileAppComponent,
        HotelsComponent,
        PropertiesComponent,
        WhyChooseUsComponent,
        DestinationsComponent,
        FeaturesComponent,
        HdoBannerComponent,
        TopHeaderComponent,
        HdtBannerComponent,
        VideoComponent,
        FaqComponent,
        BlogComponent,
        CustomerSupportComponent,
        HmdtBannerComponent,
        AboutPageComponent,
        ContactPageComponent,
        BlogPageComponent,
        BlogDetailsPageComponent,
        FaqPageComponent,
        PrivacyPolicyPageComponent,
        TermsConditionsPageComponent,
        NotFoundComponent,
        TeamComponent,
        AboutComponent,
        BookNowPageComponent,
        LoginPageComponent,
        RegisterPageComponent,
        CruisesPageComponent,
        CarsPageComponent,
        PopularDestinationsComponent,
        PopularCruiseComponent,
        FeaturedCruiseComponent,
        HotelsListingPageComponent,
        HotelDetailsPageComponent,
        FlightsListingPageComponent,
        FlightDetailsPageComponent
    ],
    imports: [
        RouterModule,
        BrowserModule,
        CarouselModule,
        AppRoutingModule,
        DpDatePickerModule,
        NgxScrollTopModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }