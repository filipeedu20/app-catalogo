import { ActivatedRoute, Router} from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Anime } from "../../IAnime";
import { DataService } from "../../services/data.service";

@Component({
  selector: "detalhe",
  templateUrl: "./detalhe.component.html",
  styleUrls: ["./detalhe.component.css"]
})
export class DetalheComponent implements OnInit {
 
  anime: Anime;

  constructor(private route: Router, private dataService: DataService) {
    const nav = this.route.getCurrentNavigation();
    this.anime = nav.extras.state.anime;
  }

  ngOnInit() {
    if (!this.anime){
      this.anime = this.dataService.getAnime()
    }
  }
}
