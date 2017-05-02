"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UserComponent = (function () {
    function UserComponent() {
        this.name = 'Alex';
        this.email = 'acervantes@gmail.com';
        this.address = {
            street: '777 East Kings Rd',
            city: 'North Vancouver',
            state: 'British Columbia'
        };
        this.hobbies = ['Music', 'Movies', 'Sports'];
        this.showHobbies = true;
    }
    UserComponent.prototype.toggleHobbies = function () {
        if (this.showHobbies == true) {
            this.showHobbies = false;
        }
        else {
            this.showHobbies = true;
        }
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'user',
        template: "\n    <h1>Hello {{name}}</h1>\n    <p><strong>Email:</strong>  {{ email }}</p>\n    <p><strong>Address:</strong>  {{ address.street }} {{ address.city }} {{ address.state }}</p>\n    \n    \n    <button (click)=\"toggleHobbies()\">{{ showHobbies ? \"Hide Hobbies\" : \"Show Hobbies\" }}</button>\n    <div *ngIf=\"showHobbies\">\n        <h3>Hobbies</h3>\n        <ul>\n            <li *ngFor=\"let hobby of hobbies\">\n                {{ hobby }}\n            </li>\n        </ul>\n    </div>\n    ",
    }),
    __metadata("design:paramtypes", [])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map