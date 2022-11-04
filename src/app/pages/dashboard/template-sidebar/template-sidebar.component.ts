import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-sidebar',
  templateUrl: './template-sidebar.component.html',
  styleUrls: ['./template-sidebar.component.scss']
})
export class TemplateSidebarComponent implements OnInit {

  lista_menu: any = [
    {
      name: 'Mantenimiento Cliente',
      url: 'mantenimiento/cliente'
    },
    {
      name: 'Mantenimiento Proveedor',
      url: 'mantenimiento/proveedor'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
