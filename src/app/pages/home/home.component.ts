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
import { ModalComponent } from '../../shared/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
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
  imports: [MatSelectModule, MatAutocomplete,
    FormsModule, AsyncPipe, MatInputModule, MatFormFieldModule,
    MatAutocompleteModule, ReactiveFormsModule, MatDatepickerModule,
    MatButtonModule, MatCardModule, ModalComponent, MatDialogModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})


export class HomeComponent {
  longText: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum  passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"

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

constructor(private dialog: MatDialog, private _formBuilder: FormBuilder) { }

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

openmodal(){
  this.dialog.open(ModalComponent)
}

readMoreText = "Read More";
toggleReadMore() {
  document.querySelector(".video-content-wrapper .more-less")?.classList.toggle("visible");
  if(document.querySelector(".video-content-wrapper .more-less.visible")){
    this.readMoreText = "Read Less";
  }
  else{
    this.readMoreText = "Read More";
  }

}
}
function _filter(names: string[], value: string): any {
  throw new Error('Function not implemented.');
}

