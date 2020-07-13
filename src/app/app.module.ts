
import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { AppRoutingModule } from "../modules/AppRoutingModule";
import { TituloComponent } from "../components/titulo/titulo.component";
import { ListaComponent } from "../components/lista/lista.component";
import { DetalheComponent } from "../components/detalhe/detalhe.component";
import { AnimeComponent } from "../components/anime/anime.component";
import { NavComponent } from "../components/nav/nav.component";
import { RodapeComponent } from "../components/rodape/rodape.component";
import { GuiaAnimeComponent } from "../components/guiaAnime/guiaAnime.component";

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    ListaComponent,
    DetalheComponent,
    AnimeComponent,
    NavComponent,
    RodapeComponent,
    GuiaAnimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
