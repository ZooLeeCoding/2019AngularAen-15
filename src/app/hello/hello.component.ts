import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObservableExampleService } from '../observable-example.service';
import { ExampleServerService } from '../example-server.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  serverMessage = '';

  constructor(private router: Router, 
    private observableExample: ObservableExampleService,
    private exampleServer: ExampleServerService) { }

  ngOnInit() {
    this.observableExample.callObserver();
  }

  toggleNavigate() {
    this.router.navigate([{outlets: {
      primary: ['world', 'Zoli', {foo: 'bar'}],
      compose: ['content']
    }}]);
  }

}
