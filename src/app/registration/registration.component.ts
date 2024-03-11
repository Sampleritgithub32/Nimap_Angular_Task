import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent{
  isPopupVisible = false;
  router: any;
  validateImageFile: any;
  formDara: any = {};
  commonService: any;

  // Method to open the popup form

  openPopup() {
    
    this.isPopupVisible = true;
  }

  // Method to close the popup form
  closePopup() {
    this.isPopupVisible = false;
  }
  myForm: FormGroup |any ={};
  age: number = 18;
  userForm: any;

  constructor(private formBuilder: FormBuilder, private service:CommonService, serviceS: SharedService, router: Router) { }
  randomImageUrl:any = "https://identix.state.gov/qotw/images/no-photo.gif"
  imageUrl!: string | ArrayBuffer | any;

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }


  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
     
      name: ['', Validators.required],
     
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      age: ['', Validators.required],
      homeAddress: [''],
      companyAddress: [''],
      state: [''],
      country: [''],
      tags: [''],
    
    

    });
  }

  submitForm() {
    // this.service.AddUpadteUser(this.userForm.value).subscribe(data=>{
    //   alert("Added");
      // console.log();
    // })
    if (this.myForm.valid) {
      this.service.AddUpadteUser(this.myForm.value).subscribe(data=>{
         alert("Added");
         console.log();
         this.router.navigate(['/userprofile'], { state: { formData: this.userForm } });
         
       })
      //  this.commonService.setFormData(this.user);
      
      }
      



      
}

  }
 

  

 


  




  




   