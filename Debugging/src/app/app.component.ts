import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Debugging';
  servers = [ ];

  onAddServer() {
    this.servers.push('This is an Add server !');

  }

  onRemoteServer(id: number) { 
    const position  = id + 1;
    this.servers.splice(position, 1);
  }
}
