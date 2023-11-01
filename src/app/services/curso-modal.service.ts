import { Injectable } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { CursoModalComponent } from '../curso-modal/curso-modal.component';
import { EducacionCompDto } from '../dto/educacion-comp-dto';

@Injectable({
  providedIn: 'root'
})
export class CursoModalService {

  constructor(private dialog: MatDialog) { }

  openDialgo(data: EducacionCompDto){
    this.dialog.open(CursoModalComponent,{data})
  }
}
