import { Injectable } from '@angular/core';
import { Alumno}  from '../models/Alumno';


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

 arr = [new Alumno(955014,'Juan'),
  new Alumno(123,'J123'),
new Alumno(123,'3452563')];

  constructor() { }



  getAlumnos():Alumno[]{
     return this.arr;
  }

  addAlumno(alumno: Alumno){
    this.arr.push(alumno);
    
  }
}
