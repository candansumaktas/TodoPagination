import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Album } from '../album/album';
import { Favorite } from './favorite';
import { Favorites } from './favorites';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private toastrService:ToastrService) { }
  
  getFavorite(): Favorite[]{
    return Favorites;
  }

  addToFavorite(album: Album){
    
    let item = Favorites.find(f => f.album.id === album.id)

    if (!item) {  
      let favorite: Favorite = { album: album, quantity: 1 }
      Favorites.push(favorite)
      this.toastrService.success("Sepete eklendi", album.title)
    } else {
      
     this.toastrService.error("Zaten eklendi", album.title)

    }

  }

  removeFromFavorite(album:Album){
    let item = Favorites.find(f=>f.album.id===album.id)

    if(item){
      if (item.quantity>1) {
        item.quantity--;
      }else
      Favorites.splice(Favorites.indexOf(item),1)
    }
    

  }


}
