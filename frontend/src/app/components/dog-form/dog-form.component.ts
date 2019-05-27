import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {DogsService} from '../../services/dogs.service';
import {Dog} from '../../models/dog';

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.sass']
})
export class DogFormComponent {
  form: FormGroup;
  dogs: any = [];
  upload: Dog = new Dog();

  constructor(
    public dogsService: DogsService, private router: Router,
    private http: HttpClient,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: null,
      description: null,
      uploadImage: null
    });
  }
  //
  // uploadImage() {
  //   this.upload._user_id = '0';
  //   console.log(this.upload);
  // }

  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          this.form.get('uploadImage').setValue({
            filename: file.name,
            filetype: file.type,
            value: reader.result.split(',')[1]
          });
        }
      };
    }
  }

  onSubmit() {
    this.upload._user_id = '0';
    this.upload._name = this.form.value.name;
    this.upload._image = 'data:image/jpeg;base64,' +  this.form.value.uploadImage.value;
    this.upload._description = this.form.value.description;
    console.log("onSubmit");
    console.log(this.upload);
    this.dogsService.postDog(this.upload).subscribe(() => {
      this.router.navigate(['/feed']);
    });
    this.router.navigate(['/']);
  }
}
