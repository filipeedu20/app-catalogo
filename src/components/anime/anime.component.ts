import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import {AnimeService} from "../../services/AnimeService";
import {DataService} from "../../services/data.service";
import { Router, Navigation } from '@angular/router';
import { Anime } from "../../IAnime";
@Component({
  selector: "lista-anime",
  templateUrl: "./anime.component.html",
  styleUrls: ["./anime.component.css"]
})
export class AnimeComponent implements OnInit {
  
  list: Anime[];

  constructor(private api: AnimeService, private dataService: DataService, private router: Router) {

  }
  animes: Array<any> = [
    {nome:'1.Fullmetal Alchemist: Brotherhood'},
    {nome:'2. Code Geass: Lelouch of the Rebellion'},
    {nome:'3. Death Note'},
    {nome:'4. Swort Art Online'},
    {nome:'5. Saiki Kusuo: No Psi Nan'},
    {nome:'6. Seven Deadly Sins'},
    {nome:'7. Naruto'},
    {nome:'8. Bleach7'},
    {nome:'9. Violet Evergarden'},
    {nome:'10. Little Witch Academia'},
  ];
  
  ngOnInit() {

    this.api.getAnime()
    .subscribe((response: any) => {
      this.list = response.data;
    })
  }

  goToDetalhesByState(anime: Anime) {
    this.router.navigateByUrl('/detalhe', {
      state: { anime: anime }
    })
  }

}
