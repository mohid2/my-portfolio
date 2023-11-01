import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExperienciaDto } from '../dto/experiencia-dto';
import { Observable } from 'rxjs';
import { EducacionDto } from '../dto/educacion-dto';
import { environment } from 'src/environments/environment.prod';
import { EducacionCompDto } from '../dto/educacion-comp-dto';
import { PerfilDto } from '../dto/perfil-dto';

@Injectable({
  providedIn: 'root'
})
export class CvabastidasService {

  private  apiURL: string =  environment.apiUrl

  profesional: any[] = [];

  constructor(private http: HttpClient) {

  }


   /**private CargarProfesional(){
    this.http.get('https://cv-tutorial-70504.firebaseio.com/Profesional.json')
      .subscribe((resp: any[]) => {
        this.profesional = resp;
        console.log(resp);
    });
  }

*/

  public CargarPerfil(): Observable<PerfilDto> {
    return  this.http.get<PerfilDto>(this.apiURL.concat('perfil/0.json'));
  }
  public CargarEducacion(): Observable<EducacionDto[]> {
    return  this.http.get<EducacionDto[]>(this.apiURL.concat('Educacion.json'));
  }

  public CargarEducacionComple():Observable<EducacionCompDto[]>{
    return  this.http.get<EducacionCompDto[]>(this.apiURL.concat('EducacionComple.json'));
  }


  public CargarExperiencia(): Observable<ExperienciaDto[]>{
    return this.http.get<ExperienciaDto[]>(this.apiURL.concat('Experiencia.json'));
  }
  
}
