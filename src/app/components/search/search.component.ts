import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private spotify:SpotifyService) { }
artistas:any[]=[];
loading:boolean;

  ngOnInit() {
  }

  buscar(termino:string){
    this.loading=true;
     this.spotify.getArtista(termino)
     .subscribe((data:any)=>{
         console.log(data);
         this.artistas=data;
         this.loading=false;
     })
  }

}
