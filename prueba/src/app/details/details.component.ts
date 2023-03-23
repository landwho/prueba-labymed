import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() bankName: string | undefined;


  constructor(public dialogRef: MatDialogRef<DetailsComponent>) { }

  ngOnInit(): void {
  }



}
