import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
    <h1>Hello {{name}}</h1>
    <p><strong>Email:</strong>  {{ email }}</p>
    <p><strong>Address:</strong>  {{ address.street }} {{ address.city }} {{ address.state }}</p>
    
    
    <button (click)="toggleHobbies()">{{ showHobbies ? "Hide Hobbies" : "Show Hobbies" }}</button>
    <div *ngIf="showHobbies">
        <h3>Hobbies</h3>
        <ul>
            <li *ngFor="let hobby of hobbies">
                {{ hobby }}
            </li>
        </ul>
    </div>
    `,
})

export class UserComponent { 
    name: string;
    email: string;
    address: address;
    hobbies: string[];
    showHobbies: boolean;
    
    constructor(){
        this.name  = 'Alex'; 
        this.email = 'acervantes@gmail.com';
        this.address = {
            street: '777 East Kings Rd',
            city: 'North Vancouver',
            state: 'British Columbia'
        }
        this.hobbies = ['Music', 'Movies', 'Sports'];
        this.showHobbies = true;
    }
    
    toggleHobbies(){
        if(this.showHobbies == true){
            this.showHobbies = false;
        }else{
            this.showHobbies = true;
        }
    }
}

interface address {
    street: string;
    city: string;
    state: string;
}