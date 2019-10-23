import { Component, OnInit } from '@angular/core';
import { Alumno } from '../models/Alumno';
import { Router } from '@angular/router';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

    
    submitted =false;
    alumno:Alumno;
     carreras = ["ITC","LAE","IIS","LEM"];

  constructor(private router: Router) { 
        this.alumno = new Alumno();
  }

  ngOnInit() {
    
  }
  enviarFormulario(){
    this.submitted = true;
    console.log(this.alumno);
    this.alumno = new Alumno();
  }

}
