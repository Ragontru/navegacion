import { Component } from '@angular/core';
// Importar para navegación programáticamente
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // Inyectar en el constructor
  // *Borrar el paréntesis para el uso de routerLink
  constructor(private navCtrl: NavController){

  }

  // Crear la función del botón
  // *Borrar para el uso de routerLink
  /*goToPagina2(){
    this.navCtrl.navigateForward('/pagina2');
  }

   // Modificar la función del botón para pasar datos
   // * Ir a pagina2.page.ts
   ngOnInit() { 
   let id = this.route.snapshot.paramMap.get('id');
    alert(id); */

  goToPagina2(){
    this.navCtrl.navigateForward('/pagina2/14');
  }

}
