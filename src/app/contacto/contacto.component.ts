import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../services/contacto.service';
import { ContactoDto } from '../dto/contacto-dto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  data: ContactoDto = {
    name: '',
    email: '',
    message: ''
  };


  constructor(private contactoService: ContactoService) {

   }


  ngOnInit(): void {
  }

  enviarMensaje(): void {
    this.contactoService.sendEmail(this.data)
      .then((response) => {
        Swal.fire({
          icon: 'success',
          title: 'Mensaje enviado con exsito',
          showConfirmButton: false,
          timer: 3000})
        // Manejar la respuesta exitosa aquí, por ejemplo, mostrar un mensaje al usuario.
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Mensaje no enviado',
          showConfirmButton: false,
          timer: 3000})
        // Manejar errores aquí, por ejemplo, mostrar un mensaje de error al usuario.
      });
  }

}
