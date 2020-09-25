import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
 
  usuario = {
    nombre:'',
    apellido:'',
    dni:'',
    email:'',
    contra:'',
    contraplus:'',
    date:''
  }

  constructor(public to: ToastController, private router : Router) 
  {
    
  }

  prueba() 
  {
    if (this.usuario.nombre != "" && this.usuario.nombre != null)
    {
      console.log(this.usuario); 
    }
    else
    {
      console.log("empty");
      this.OpenToast(this.to);
      console.log(this.usuario);      
    }

    if (this.usuario.contra == this.usuario.contraplus)
    {
      console.log(this.usuario);
    }
    else
    {
      console.log("empty");
      this.OpenToastContrasenia(this.to);
      console.log(this.usuario);       
    }
  } 

  async OpenToast(toastController: ToastController) 
  {
    const toast = await toastController.create({
      message: 'Por favor, complete todos los campos',
      position: 'bottom',
      buttons: [
        {
          side: 'end',
          icon: 'close',
          text: 'Cerrar',
          handler: () => {
            console.log('Closed clicked');
          }
        }
      ]
    });
    toast.present();
  }

  async OpenToastContrasenia(toastController: ToastController) 
  {
    const toast = await toastController.create({
      message: 'Las contraseñas no coinciden',
      position: 'bottom',
      buttons: [
        {
          side: 'end',
          icon: 'close',
          text: 'Cerrar',
          handler: () => {
            console.log('Closed clicked');
          }
        }
      ]
    });
    toast.present();
  }

  volverAlInicio()
  {
    this.router.navigate(['']);
  }

  ngOnInit() 
  {

  }
}

