import { Component } from '@angular/core';
import { YourUrlService } from '../../services/your-url.service';

@Component({
  selector: 'app-your-url',
  templateUrl: './your-url.component.html',
  styleUrl: './your-url.component.css'
})
export class YourUrlComponent {

  url:string = "";
  urlShort:string = "";
  errorText:string = 'No ingresaste una URL XD';
  urlProcesada:boolean = false;
  loading:boolean = false;
  alerta:boolean = false;
  constructor(private _serviceUrl:YourUrlService){}

  convertir(){
    this.urlProcesada = false;
    this.loading = true;
    if(this.url===''){
    this.alerta = true;
    this.loading = false;
    return;
    }
    this._serviceUrl.getUrlShort(this.url).subscribe(date => {
    this.loading = false;
    this.urlProcesada = true;
    this.alerta = false;
    this.urlShort = date.url_acortada;
   })

  }
}
