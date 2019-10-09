import { Component, OnInit, Input } from '@angular/core';

import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent implements OnInit {

  @Input()matricula;
  sub;

  constructor(private activateRoute: ActivatedRoute, private router: Router) { 
    this.sub = this.activateRoute.paramMap.subscribe(params =>{
        this.matricula = params.get('matricula');
    });
    
  
  }

  ngOnInit() {
  }

}
