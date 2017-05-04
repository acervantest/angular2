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
var posts_services_1 = require("../services/posts.services");
var UserComponent = (function () {
    function UserComponent(postsService) {
        var _this = this;
        this.postsService = postsService;
        this.name = 'Alex';
        this.email = 'acervantes@gmail.com';
        this.address = {
            street: '777 East Kings Rd',
            city: 'North Vancouver',
            state: 'British Columbia'
        };
        this.hobbies = ['Music', 'Movies', 'Sports'];
        this.showHobbies = true;
        this.postsService.getPosts().subscribe(function (posts) {
            _this.posts = posts;
        });
    }
    UserComponent.prototype.toggleHobbies = function () {
        if (this.showHobbies == true) {
            this.showHobbies = false;
        }
        else {
            this.showHobbies = true;
        }
    };
    UserComponent.prototype.addHobby = function (hobby) {
        this.hobbies.push(hobby);
    };
    UserComponent.prototype.deleteHobby = function (i) {
        this.hobbies.splice(i, 1);
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'user',
        template: "\n    <h1>Hello {{ name }}</h1>\n    <p><strong>Email:</strong>  {{ email }}</p>\n    <p><strong>Address:</strong>  {{ address.street }} {{ address.city }} {{ address.state }}</p>\n    \n    \n    <button (click)=\"toggleHobbies()\">{{ showHobbies ? \"Hide Hobbies\" : \"Show Hobbies\" }}</button>\n    <div *ngIf=\"showHobbies\">\n        <h3>Hobbies</h3>\n        <ul>\n            <li *ngFor=\"let hobby of hobbies; let i = index\">\n                {{ hobby }} <button (click)=\"deleteHobby(i)\">X</button>\n            </li>\n        </ul>\n\n<form (submit)=\"addHobby(hobby.value)\">\n<label>Add Hobby: </label><br />\n<input type=\"text\" #hobby /><br />\n</form>\n    </div>\n    <hr />\n    <h3>Edit User</h3>\n    <form>\n        <label>Name:</label><br/>\n        <input type=\"text\" name=\"name\" [(ngModel)]=\"name\" /><br/>\n        <label>Email:</label><br/>\n                <input type=\"text\" name=\"email\" [(ngModel)]=\"email\" /><br/>\n        <label>Street:</label><br/>\n                <input type=\"text\" name=\"address.street\" [(ngModel)]=\"address.street\" /><br/>\n        <label>City:</label><br/>\n                <input type=\"text\" name=\"address.city\" [(ngModel)]=\"address.city\" /><br/>\n        <label>State:</label><br/>\n                <input type=\"text\" name=\"address.state\" [(ngModel)]=\"address.state\" /><br/>\n    </form>\n    <hr />\n    <h3>Posts</h3>\n    <div *ngFor=\"let post of posts\">\n        <h3>{{ post.title }}</h3>\n        <p>{{ post.body }}</p>\n    </div>\n    ",
        providers: [posts_services_1.PostsService]
    }),
    __metadata("design:paramtypes", [posts_services_1.PostsService])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map