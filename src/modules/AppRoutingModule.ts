import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListaComponent } from "../components/lista/lista.component";
import { AnimeComponent } from "../components/anime/anime.component";
import { DetalheComponent } from "../components/detalhe/detalhe.component";
import { GuiaAnimeComponent } from "../components/guiaAnime/guiaAnime.component";
import { from } from "rxjs";

const routes: Routes = [
  // {path: "", component: AnimeComponent},
  {path: "", component: ListaComponent},
  { path: "detalhe", component: DetalheComponent },
  { path: "guia_anime", component: GuiaAnimeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
