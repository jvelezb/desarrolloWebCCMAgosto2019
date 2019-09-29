import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-parrafo',
  templateUrl: './parrafo.component.html',
  styleUrls: ['./parrafo.component.scss']
})
export class ParrafoComponent implements OnInit {

 public lenguaje = 'es';

  constructor(
  	private translate: TranslateService
  	) { 
  		this.translate.setDefaultLang(this.lenguaje);
  }

  ngOnInit() {
  }

  public cambiarLenguaje(lang){
  	this.lenguaje = lang;
  	this.translate.use(lang);

  }

}
