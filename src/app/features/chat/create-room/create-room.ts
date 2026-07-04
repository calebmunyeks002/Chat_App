import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-create-room',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-room.html',
  styleUrls: ['./create-room.scss']
})
export class CreateRoomComponent {

  roomPreview: string | ArrayBuffer | null = null;

  roomForm: FormGroup;

  categories = [
    'Finance',
    'Technology',
    'Programming',
    'Cyber Security',
    'Cloud',
    'Artificial Intelligence',
    'Business',
    'Education'
  ];

  constructor(private fb: FormBuilder) {

    this.roomForm = this.fb.group({

      roomName: ['', Validators.required],

      description: ['', Validators.required],

      category: ['', Validators.required],

      privacy: ['Public'],

      maxMembers: [100, Validators.required],

      tags: [''],

      allowFiles: [true],

      adminApproval: [false]

    });

  }

  onImageSelected(event: any) {

    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {

      this.roomPreview = reader.result;

    };

    reader.readAsDataURL(file);

  }

  createRoom() {

    if (this.roomForm.invalid) {

      this.roomForm.markAllAsTouched();

      return;

    }

    console.log(this.roomForm.value);

    alert("Room created successfully!");

  }

}