import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})

export class NewproyectoComponent implements OnInit {
  nombre: string = '';
  descripcion: string = '';

  constructor(private sProyecto: SProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Proyecto(this.nombre, this.descripcion);
    this.sProyecto.save(expe).subscribe(
      data => {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        alert(err.error.mensaje);
        this.router.navigate(['']);
      }
    )
  }

}