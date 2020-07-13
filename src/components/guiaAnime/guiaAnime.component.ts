import { Component,Input } from "@angular/core";

@Component({
  selector: "guiaAnime-pagina",
  templateUrl: "./guiaAnime.component.html",
  styleUrls: ["./guiaAnime.component.css"]
})
export class GuiaAnimeComponent {
  @Input() animes: Array<any>;
  
}
