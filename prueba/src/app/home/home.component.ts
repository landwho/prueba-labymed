import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, debounceTime } from 'rxjs';
import { HomeServiceService } from './home-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DetailsComponent } from '../details/details.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {




  searchForm = new FormGroup({
    title: new FormControl(''),
    year: new FormControl('')
  });




  constructor(private HomeServiceService:HomeServiceService,public dialog: MatDialog) { 
  }

  heroe$:any =  [];
  data:any;
  ratings:any;
  detail:any;
  ngOnInit(): void {
  }



  title:any;
  year:any;
  

  details(id:any){
    const dialogRef = this.dialog.open(DetailsComponent, {
 
    });
  this.HomeServiceService.getDetails(id).subscribe((data)=>{
      this.detail = data;
      console.log(this.detail)
  })
}

  onSubmit() {

    const result = this.HomeServiceService.getMethod(this.title, this.year).pipe(debounceTime(1000));
    this.data =  result.subscribe(data => {     
      this.data =data;
      console.log(this.data.Error)
      this.ratings =this.data.Ratings[0];
      console.log(this.data.Ratings[0])
     
    });
   

  

  }




}


export interface rese {
  rese: string;

}
