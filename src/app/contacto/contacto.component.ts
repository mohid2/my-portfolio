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
    // Validar que los campos no estén vacíos
  if (!this.camposValidos()) {
    // Mostrar un mensaje al usuario indicando que los campos son obligatorios
    Swal.fire({
      icon: 'warning',
      title: 'Todos los campos son obligatorios',
      showConfirmButton: false,
      timer: 3000
    });
    return;
  }
  this.contactoService.sendEmail(this.data)
  .then((response) => {
    Swal.fire({
      icon: 'success',
      title: 'Mensaje enviado con éxito',
      showConfirmButton: false,
      timer: 3000
    });
    // Restablecer los campos a sus valores iniciales
    this.resetearCampos();
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
  camposValidos(): boolean {
    // Verificar que los campos necesarios no estén vacíos
    return !!this.data.name && !!this.data.email && !!this.data.message;
  }

  resetearCampos(): void {
    // Restablecer los campos a sus valores iniciales
    this.data = {
      name: '',
      email: '',
      message: ''
    };
  }

}
