import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  form: FormGroup;
  description: string;
  repositoryOptions: [];

  constructor( private fb: FormBuilder, private dialogRef: MatDialogRef<RepositoryComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.description = data.title;
    this.repositoryOptions = data.repository;
  }

  ngOnInit() {
      this.form = this.fb.group({
        repository: [null, [Validators.required]]
    });
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }

}
