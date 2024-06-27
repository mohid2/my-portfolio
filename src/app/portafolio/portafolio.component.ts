import { Component, OnInit } from '@angular/core';
import { Proyectdto } from '../dto/proyectdto';
import { CvMohammedService } from '../services/cvMohammed.service';



@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  proyectos: Proyectdto[]=[];

  constructor(private cv: CvMohammedService) { }


  ngOnInit(): void {
    this.cv.CargarProyects().subscribe({
      next: value=> this.proyectos=value
    })
  }

  
}

