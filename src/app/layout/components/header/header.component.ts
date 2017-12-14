import { Component } from "@angular/core";
import { AuthService } from "app/core/services/auth.service";
import { Router } from "@angular/router";

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    constructor(public auth: AuthService, public router: Router) {

    }

    logout() {
        this.auth.logout();

         // Redirect the user
         this.router.navigate(['/login']);
    }
}