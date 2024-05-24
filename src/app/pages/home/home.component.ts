import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatAutocomplete, MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'

interface Symptoms {
  value: string;
  viewValue: string;
}
interface Specialty {
  value: string;
  viewValue: string;
}

interface Gender {
  value: string;
  viewValue: string;
}
interface StateGroup {
  letter: string;
  names: string[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatSelectModule, MatAutocomplete, FormsModule, AsyncPipe, MatInputModule, MatFormFieldModule, MatAutocompleteModule, ReactiveFormsModule, MatDatepickerModule, MatButtonModule,MatCardModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})


export class HomeComponent {
  Symptoms: Symptoms[] = [
    { value: "headache", viewValue: "Headache" },
    { value: "irritability", viewValue: "Irritability" }
  ];
  Specialty: Specialty[] = [
    { value: "family-medicine", viewValue: "Family medicine" },
    { value: "dermatology", viewValue: "Dermatology" },
    { value: "emergency-medicine", viewValue: "Emergency medicine" },
    { value: "anesthesiology", viewValue: "Anesthesiology" }
  ]

  Gender: Gender[] = [
    { value: "other", viewValue: "other" },
    { value: "male", viewValue: "male" },
    { value: "female", viewValue: "female" },
  ]

  stateForm = this._formBuilder.group({
    stateGroup: '',
  });

  stateGroups: StateGroup[] = [
    {
      letter: 'A',
      names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas'],
    },
    {
      letter: 'C',
      names: ['California', 'Colorado', 'Connecticut'],
    },
    {
      letter: 'D',
      names: ['Delaware'],
    },
    {
      letter: 'F',
      names: ['Florida'],
    },
    {
      letter: 'G',
      names: ['Georgia'],
    },
    {
      letter: 'H',
      names: ['Hawaii'],
    },
    {
      letter: 'I',
      names: ['Idaho', 'Illinois', 'Indiana', 'Iowa'],
    },
    {
      letter: 'K',
      names: ['Kansas', 'Kentucky'],
    },
    {
      letter: 'L',
      names: ['Louisiana'],
    },
    {
      letter: 'M',
      names: [
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
      ],
    },
    {
      letter: 'N',
      names: [
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
      ],
    },
    {
      letter: 'O',
      names: ['Ohio', 'Oklahoma', 'Oregon'],
    },
    {
      letter: 'P',
      names: ['Pennsylvania'],
    },
    {
      letter: 'R',
      names: ['Rhode Island'],
    },
    {
      letter: 'S',
      names: ['South Carolina', 'South Dakota'],
    },
    {
      letter: 'T',
      names: ['Tennessee', 'Texas'],
    },
    {
      letter: 'U',
      names: ['Utah'],
    },
    {
      letter: 'V',
      names: ['Vermont', 'Virginia'],
    },
    {
      letter: 'W',
      names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
    },
  ];

  stateGroupOptions: Observable<StateGroup[]> | undefined;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGroup(value || '')),
    );
  }

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({ letter: group.letter, names: _filter(group.names, value) }))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }
}
function _filter(names: string[], value: string): any {
  throw new Error('Function not implemented.');
}

