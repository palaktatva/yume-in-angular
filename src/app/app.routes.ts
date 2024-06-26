import { Routes } from '@angular/router';
import { DoctorListingComponent } from './pages/doctor-listing/doctor-listing.component';
import { HomeComponent } from './pages/home/home.component';
import { DoctorDetailsComponent } from './pages/doctor-details/doctor-details.component';

export const routes: Routes = [

    { path: "doctor-listing", component: DoctorListingComponent, title: "Doctor Listing" },
    { path: "home", component: HomeComponent, title: "Home" },
    { path: "", component: HomeComponent, title: "Home" },
    { path: "doctor-details", component: DoctorDetailsComponent, title: "Doctor Details" }
];
