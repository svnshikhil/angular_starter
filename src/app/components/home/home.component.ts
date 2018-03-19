import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../../services/user-service.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private userService: UserServiceService,
    private router: Router
  ) { }
  title = "App"
  route = this.router
  data: Object = []
  ngOnInit() {
    this.userService.listUser().subscribe(
      (response) => {
        var resp = response.json()
        this.data = resp.data
      },
      (error) => {
        console.log(error.json())
      }
    )
  }
}
