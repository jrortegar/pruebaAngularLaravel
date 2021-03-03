import { Component, OnInit } from '@angular/core';
import { RegistroService } from './registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private registroServicio: RegistroService) { }

  ngOnInit(): void {
  }

  registro(e){
    this.registroServicio.registro(e).subscribe(
      response=>{
        alert('Usuario registrado correctamente');
      },
      error=>{
        alert('Ha ocurrido un error');
      }
      
    );
  }

}
