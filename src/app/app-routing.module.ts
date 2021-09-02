import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { FavoriteComponent } from './favorites/favorites.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoComponent } from './todo/todo.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:AlbumComponent},
  {path:"todos", component:TodoComponent},
  {path:"todos/:id", component:TodoDetailComponent},
  {path:"user-todos/:userId", component:TodoComponent},
  {path:"users", component:UserComponent},
  {path:"albums", component:AlbumComponent},
  {path:"favorites", component:FavoriteComponent},  
  {path:"**", component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
