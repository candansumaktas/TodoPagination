import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { AlbumComponent } from './album/album.component';
import { FavoriteComponent } from './favorites/favorites.component';
import { FavoriteDetailComponent } from './favorite-detail/favorite-detail.component';
import { NaviComponent } from './navi/navi.component';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    UserComponent,
    NotFoundComponent,
    TodoDetailComponent,
    AlbumComponent,
    FavoriteComponent,
    FavoriteDetailComponent,
    NaviComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    ToastrModule.forRoot({positionClass:"toast-bottom-right"})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
