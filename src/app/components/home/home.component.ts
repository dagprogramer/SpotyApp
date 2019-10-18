import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nuevasCanciones:any[]=[];
  loading:boolean;
  error:boolean;
  message:string;

  constructor(private spotify:SpotifyService) {
    this.loading=true;
    this.error=false;       
     this.spotify.getNewReleases().subscribe((data:any)=>{
       this.nuevasCanciones=data;
       this.loading=false;
     },(errorServicio)=>{
      this.loading=false;
       this.error=true;
       this.message=errorServicio.error.error.message;
     }
     );
  }

  ngOnInit() {
  }

}
