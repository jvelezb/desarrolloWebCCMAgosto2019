import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import {Routes, RouterModule} from  '@angular/router';//linea

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'; 

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ParrafoComponent } from './parrafo/parrafo.component';
import {AlumnoComponent} from './alumno/alumno.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { FormularioComponent } from './formulario/formulario.component';
import { SettingsComponent } from './components/main/settings/settings.component';
import { MainComponent } from './components/main/main.component';
import { ChartsModule } from 'ng2-charts';
import { GraficaComponent } from './grafica/grafica.component';
const rutas: Routes=[
    {
        path: 'parrafo',
        component:ParrafoComponent    
    },
    {
      path: 'grafica',
      component:GraficaComponent    
  },
    {
        path: 'alumno/:matricula',
        component: AlumnoComponent
    },
     {
        path: 'alumno',
        component: AlumnoComponent
    },
    {
        path: 'desarrolloweb/profesor',
        component: ProfesorComponent
    },
    {
        path: 'profesor',
        component: ProfesorComponent
    },
    {
        path: 'formulario',
        component: FormularioComponent
    }
    
];


@NgModule({
  declarations: [
    AppComponent,
    ParrafoComponent,
    AlumnoComponent,
    ProfesorComponent,
    FormularioComponent,
    SettingsComponent,
    MainComponent,
    GraficaComponent
  ],
  imports: [
    RouterModule.forRoot(rutas),//agregrar para router
    BrowserModule,
    ChartsModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    })
  ],
  exports:[RouterModule],//Agregar para router
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }






