import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  artista:any={};
  loadingArtist:boolean;
  topTracks:any[]=[];
  
  constructor(private router:ActivatedRoute,private spotify:SpotifyService) { 
     this.router.paramMap.subscribe((params:any)=>{
        console.log(params);
        this.getArtistaById(params.params.id);
        this.getTopTracks(params.params.id);
     })
  }

  ngOnInit() {
  }

  getArtistaById(id:string){
    this.loadingArtist=true;
    this.spotify.getArtistaById(id).subscribe(artista=>{
      console.log(artista);
       this.artista=artista;
       this.loadingArtist=false;
    })
  }

  getTopTracks(id:string){
    this.spotify.getArtistasTopTracks(id)
                .subscribe(tracks=>{
                  console.log(tracks);
                  this.topTracks=tracks;
                })
  }

}
