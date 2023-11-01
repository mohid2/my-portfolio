import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EducacionCompDto } from '../dto/educacion-comp-dto';

@Component({
  selector: 'app-curso-modal',
  templateUrl: './curso-modal.component.html',
  styleUrls: ['./curso-modal.component.css']
})
export class CursoModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: EducacionCompDto) {

    
  }

}
