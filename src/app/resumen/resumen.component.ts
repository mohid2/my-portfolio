import { Component, OnInit } from '@angular/core';
import { CvabastidasService } from '../services/cvabastidas.service';
import { ExperienciaDto } from '../dto/experiencia-dto';
import { EducacionDto } from '../dto/educacion-dto';
import { EducacionCompDto } from '../dto/educacion-comp-dto';
import { CursoModalService } from '../services/curso-modal.service';
import { PerfilDto } from '../dto/perfil-dto';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  experiencia: ExperienciaDto[] = [];
  educacion: EducacionDto[] = [];
  educacionComple: EducacionCompDto[] = [];
  perfilDto: PerfilDto;


  isModalOpen = false;

  constructor(private cv: CvabastidasService,private modal:CursoModalService) {
   }

  ngOnInit(): void {
    this.cv.CargarExperiencia().subscribe({
      next: value=> this.experiencia=value
    });
    this.cv.CargarEducacion().subscribe({
      next: value=> this.educacion=value
    });
    this.cv.CargarEducacionComple().subscribe({
      next: value=> this.educacionComple=value
    });
    this.cv.CargarPerfil().subscribe({
      next: value=> this.perfilDto=value
    });
  }
openModal(curso: EducacionCompDto){
  this.modal.openDialgo(curso);
}
}
