import { Component, OnInit } from '@angular/core';
import { CvabastidasService } from './services/cvabastidas.service';
import { PerfilDto } from './dto/perfil-dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'my-portfolio';
  perfilDto: PerfilDto;


  constructor(private cv: CvabastidasService){
    
  }
  ngOnInit(): void {
    this.cv.CargarPerfil().subscribe({
      next: value=> this.perfilDto=value
    });
  }
}
