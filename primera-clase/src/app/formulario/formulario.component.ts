import { Component, OnInit } from '@angular/core';
import { Alumno } from '../models/Alumno';
import { Router } from '@angular/router';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

    alumno:Alumno;
    carreras = ["ITC","LAE","IIS","LEM"];

  constructor(private router: Router) { 
        this.alumno = new Alumno();
  }

  ngOnInit() {
    
  }
  enviarFormulario(parametros){
    console.log(parametros);
  }

}
