import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-<%= dasherize(name) %>-component',
	templateUrl: './<%= dasherize(name) %>.component.html',
	styleUrls: ['./<%= dasherize(name) %>.component.scss'],
})
export class <%= classify(name) %>Component implements OnInit {
	
    constructor() { }
	
    ngOnInit(): void {
        console.log(<%= classify(name) %>Component);
    }
}