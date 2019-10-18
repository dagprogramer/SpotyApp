import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 

  }

  getQuery(query:string){
    const url=`https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQDS2QoLKtWsci9TUPmiFfdR7OrRYbRpFQFT-_aF8TII0uEoNx7AJ3b2FCmAIdKXitia-syOOADcH_W6hfU'
   });
   return this.http.get(url,{headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases').pipe(map((data:any)=>data.albums.items));
  }

  getArtista(termino:string){
  return this.getQuery(`search?q=${termino}&type=artist&limit=20`)
  .pipe(map((data:any)=>data.artists.items));
  }

  getArtistaById(id:string){
     return this.getQuery(`artists/${id}`);
     //.pipe(map((data:any)=>data));
  }

  getArtistasTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
               .pipe(map((track:any)=>track.tracks));
  }

}
