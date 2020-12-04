import { Client } from './../client.model';
import { ClientService } from './../client.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-delete',
  templateUrl: './client-delete.component.html',
  styleUrls: ['./client-delete.component.css']
})
export class ClientDeleteComponent implements OnInit {

  client: Client;

  constructor(private router:Router, private clienteService: ClientService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.clienteService.readById(id).subscribe(client =>{
      this.client = client;
    })
  }

  deleteClient(){
    this.clienteService.delete(`${this.client.id}`).subscribe( () => {
      this.clienteService.showMessage('Cliente excluído com sucesso');
      this.router.navigate(['/clientes']);
    })

  }

  cancel(): void{
    this.router.navigate(['/clientes']);
  }

}
