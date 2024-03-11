import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  formData: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.formData = this.route.snapshot.state.formData;
    console.log(this.formData); // Use the form data as needed
  }
}
