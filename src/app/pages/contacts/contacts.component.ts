import { Component, OnInit } from '@angular/core';

// Aula 11.2) Importa dedependências
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  // Aula 11.2) Atributos do objeto
  contactForm: FormGroup; // Formulário

  // Aula 12) Cria um objeto de data
  pipe = new DatePipe('en_US');

  // Aula 12) Controla feedback ao usuário
  feedback = false;

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
      status: ['enviado']
    });
  }

  // Aula 11.2) Processa envio do formulário
  // Aula 12) Processa envio do formulário
  contactSend(): void {

    // Criar data
    this.contactForm.controls.date.setValue(
      this.pipe.transform(Date.now(), 'yyyy-MM-dd hh:mm:ss').trim()
    );

    // Salvar no Firebase Cloud Firestore
    this.fbStore.collection('contacts').add(this.contactForm.value)
      .then(() => {

        // Exibir feeback
        this.feedback = true;

        // Resetar formulário
        this.contactForm.reset({
          date: '',
          name: this.contactForm.value.name.trim(),
          email: this.contactForm.value.email.trim(),
          subject: '',
          message: '',
          status: 'enviado'
        });

      })
      .catch((error) => {
        console.error('Erro ao salvar no Db:', error);
      });
  }
}
