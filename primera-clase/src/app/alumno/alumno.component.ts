import { Component, OnInit, Input } from '@angular/core';
import {AlumnoService} from '../service/alumno.service';
import {Router, ActivatedRoute } from '@angular/router';
import { Alumno } from '../models/Alumno';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss'],
  providers: [AlumnoService]
})
export class AlumnoComponent implements OnInit {

  @Input()matricula;
  sub;
  alumnos: Alumno[];

  constructor(private activateRoute: ActivatedRoute, 
              private router: Router,
              private alumnoService: AlumnoService) { 
        this.sub = this.activateRoute.paramMap.subscribe(params =>{
        this.matricula = params.get('matricula');
    });


    
  
  }

  ngOnInit() {
    this.alumnos = this.alumnoService.getAlumnos();
  }

  anadirAlumno(){
    this.alumnoService.addAlumno(new Alumno(1231,'dsafs'));
  }

}
