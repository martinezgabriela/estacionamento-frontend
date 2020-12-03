import { Client } from './../client.model';

import { ClientService } from './../client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  client: Client = {
    nome: '',
    telefone: '',
    email: ''
  }

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
    
  }

  createClient(): void{
    console.log(this.client.nome);
    console.log(this.client.telefone);
    console.log(this.client.email);
    this.clientService.create(this.client).subscribe( () => {
      this.clientService.showMessage('Cliente criado')
      this.router.navigate(['/clientes'])
    })
  }

  cancel(): void{
    this.router.navigate(['/clientes'])
  }

}
