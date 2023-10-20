import { Component } from '@angular/core';
import { SharedService } from './shared/shared.service';
import { Subscription } from 'rxjs';
import { User } from './shared/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private sharedService: SharedService, private router: Router) {}
  userSubscription!: Subscription;

  ngOnInit() {
    this.userSubscription = this.sharedService.user$.subscribe(
      (user: User | null) => {
        if (!user) {
          this.router.navigate(['/']);
        }
      }
    );
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
