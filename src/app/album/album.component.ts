import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Album } from './album';
import { AlbumService } from '../services/album.service';
import { FavoriteService } from '../favorites/favorite.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {
  albums: Album[] = [];
  loading : boolean = true


  constructor(
    private albumService: AlbumService,

    private favoriteService: FavoriteService
  ) {}

  ngOnInit(): void {
    this.delay(100)

    // this.album.getAlbums().subscribe((data) => {
    //   this.albums = data;
    // });
  }

  addToFavorite(album: Album) {

      this.favoriteService.addToFavorite(album);
    }


    async delay(ms: number) {
      await new Promise<void>(resolve => setTimeout(() => resolve(), ms)).then(() => {
        this.albumService.getAlbums().subscribe(data => {
          this.albums = data
          this.loading = false;
        })
      });
}
}
