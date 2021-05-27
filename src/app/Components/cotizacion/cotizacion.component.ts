import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Contacto } from '../../Models/contacto';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent implements OnInit {
  cotizacion: Contacto | undefined
  constructor() {
    this.cotizacion = new Contacto()
  }

  ngOnInit(): void {
    
  }

  cotizar(form:NgForm){
    console.log(form.value)
  }
}
