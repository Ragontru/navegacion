import { Component, OnInit } from '@angular/core';
// Importar para pasar datos
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  // Inyectar en el paréntesis
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  // Para pasar datos, iniciar la pagina por id
    let id = this.route.snapshot.paramMap.get('id');
    alert(id);
  }

}
