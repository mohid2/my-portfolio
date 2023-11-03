import { Component, OnInit } from '@angular/core';
import { PerfilDto } from './dto/perfil-dto';
import { CvMohammedService } from './services/cvMohammed.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'my-portfolio';
  perfilDto: PerfilDto;


  constructor(private cv: CvMohammedService){
    
  }
  ngOnInit(): void {
    this.cv.CargarPerfil().subscribe({
      next: value=> this.perfilDto=value
    });
  }
}
