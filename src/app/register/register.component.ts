import {Component, HostBinding, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {UserAuthService} from '../services/user-auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  @HostBinding('class') class = 'register-form';
  reactiveForm: FormGroup;

  isControlInvalid(controlName: string): boolean {
    const control = this.reactiveForm.controls[controlName];

    const result = control.invalid && control.touched;

    return result;
  }

  onSubmit() {
    const controls = this.reactiveForm.controls;

    /** Проверяем форму на валидность */
    if (this.reactiveForm.invalid) {
      /** Если форма не валидна, то помечаем все контролы как touched*/
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

      /** Прерываем выполнение метода*/
      return;
    }

    /** TODO: Обработка данных формы */
    this.uAuth.newUser(this.reactiveForm.value.name, this.reactiveForm.value.password, this.reactiveForm.value.email).subscribe(() => {
        alert('Регистрация успешна');
        this.router.navigateByUrl('/');
      },
      (response) => {
        console.log(response);
        console.error(response.code, response.message);
        alert(response.message);
      });
  }

  initForm() {
    this.reactiveForm = this.fb.group({
      name: ['', [Validators.required
      ]],
      email: ['', [Validators.required,
        Validators.email
      ]],
      password: ['', [Validators.required]]
    });
  }

  constructor(private fb: FormBuilder,
              private uAuth: UserAuthService,
              private router: Router,) {
  }

  ngOnInit() {
    this.initForm();
  }
}
