import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { ContactoDto } from '../dto/contacto-dto';


@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { }
  
  sendEmail(data: ContactoDto): Promise<EmailJSResponseStatus> {

    const emailParams = {
      name: data.name,
      email: data.email,
      message: data.message
    };
    // Configura el Service ID y Template ID de Email.js
    const serviceID = 'service_qzkeqn3'; 
    const templateID = 'template_oeckvdk'; 
    const publicKey = 'rXTqarjE_GgYI7zSH'
    

    // Devuelve una promesa para el envío del correo
    return new Promise((resolve, reject) => {
      emailjs.send(serviceID, templateID, emailParams,publicKey)
        .then((response: EmailJSResponseStatus) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
