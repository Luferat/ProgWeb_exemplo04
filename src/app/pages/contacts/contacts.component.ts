import { Component, OnInit } from '@angular/core';

// Aula 11.2) Importa dedependências
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  // Aula 11.2) Atributos do objeto
  contactForm: FormGroup; // Formulário

  constructor(

    // Aula 11.2) Injeta dependências
    private form: FormBuilder,
    private fbStore: AngularFirestore,
    private fbAuth: AngularFireAuth,
  ) { }

  ngOnInit(): void {

    // Aula 11.2) Cria formulário de contatos
    this.contactFormCreate();

    // Aula 11.2) Preenche os campos do formulário se usuário estiver logado
    if (this.contactForm) {
      this.fbAuth.onAuthStateChanged((userData) => {
        this.contactForm.controls.name.setValue(userData.displayName.trim());
        this.contactForm.controls.email.setValue(userData.email.trim());
      });
    }
  }

  // Aula 11.2) Cria formulário de contatos
  contactFormCreate(): void {
    this.contactForm = this.form.group({
      date: [''],
      name: [
        '',

        // Aula 11.2) Validando 'name'
        Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])
      ],
      email: [
        '',

        // Aula 11.2) Validando 'email'
        Validators.compose([
          Validators.required,
          Validators.email
        ])
      ],
      subject: [
        '',

        // Aula 11.2) Validando 'subject'
        Validators.compose([
          Validators.required,
          Validators.minLength(4)
        ])
      ],
      message: [
        '',

        // Aula 11.2) Validando 'subject'
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])
      ],
      status: ['']
    });
  }

  // Aula 11.2) Processa envio do formulário
  contactSend(): void {

    // Criar data e status
    // Salvar no Firebase Cloud Firestore
      // Exibir feeback
      // Resetar formulário

  }
}
