import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { DoctorDetailsComponent } from '../doctor-details/doctor-details.component';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-doctor-listing',
  standalone: true,
  imports: [
    DoctorDetailsComponent,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatTabsModule,
    RouterModule,
  ],
  templateUrl: './doctor-listing.component.html',
  styleUrl: './doctor-listing.component.scss',
})
export class DoctorListingComponent {

  selectedValue: string;

  constructor() {
    this.selectedValue = 'option1';
  }

}