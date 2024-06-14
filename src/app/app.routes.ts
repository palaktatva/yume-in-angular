import { Routes } from '@angular/router';
import { DoctorListingComponent } from './pages/doctor-listing/doctor-listing.component';
import { HomeComponent } from './pages/home/home.component';
import { DoctorDetailsComponent } from './pages/doctor-details/doctor-details.component';

export const routes: Routes = [

    { path: "doctor_listing", component: DoctorListingComponent, title: "Doctor-Listing" },
    { path: "home", component: HomeComponent, title: "Home-page" },
    { path: "", component: HomeComponent, title: "Home-page" },
    { path: "doctor_details", component: DoctorDetailsComponent, title: "doctor-details" }
];
