import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Type } from '../interfaces/Type';

@Component({
  selector: 'app-update-entry',
  templateUrl: './update-entry.component.html',
  styleUrls: ['./update-entry.component.css']
})
export class UpdateEntryComponent implements OnInit {

  form: FormGroup;
  id: number;

  types: Type[] = [
    { value: true, display: 'Expense'},
    { value: false, display: 'Income'}
  ]

  constructor(private fb:FormBuilder,
              private dialogRef:MatDialogRef<UpdateEntryComponent>,
              @Inject(MAT_DIALOG_DATA){Description, IsExpense, Value, Id}) { 
    this.id = Id;
    this.form = fb.group({
      description: [Description, Validators.required],
      isExpense: [IsExpense, Validators.required],
      value: [Value, Validators.required],
    })
  }

  ngOnInit(): void {
  }

  close() {

  }

  save() {
    
  }
}
