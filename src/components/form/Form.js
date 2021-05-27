import React, {useEffect, useState, Component} from "react";
import './Form.css'
import InputMask from 'react-input-mask';
import Parallax from 'react-rellax';
import emailjs from 'emailjs-com';

function enviarEmail(e) {
  e.preventDefault();
  emailjs.sendForm('gmailMessage', 'eon_form', e.target, 'user_d3CNx5ZHMs5sFNMCIVJpy')
    .then((result) => {
        alert('Mensagem enviada com sucesso!')
    }, (error) => {
        alert(error.message)
    });
    e.target.reset()
}

const initialState = {
  nome: "",
  email: "",
  telefone: "",
  assunto: "",
  mensagem: "",
  nomeError: "",
  emailError: "",
  telefoneError: "",
  assuntoError: "",
  mensagemError: "",
};



export class ValiationForm extends Component {

  state = initialState;


  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.nome]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let nomeError = "";
    let emailError = "";
    let telefoneError = "";
    let assuntoError = "";
    let mensagemError = "";

    if (!this.state.nome) {
      nomeError = "Preencha seu nome.";
    }

    if (!this.state.telefone) {
      telefoneError = "Preencha seu telefone.";
    }

    if (this.state.assunto == `Assunto`) {
      assuntoError = "Escolha um assunto.";
    }

    if (!this.state.mensagem) {
      mensagemError = "Preencha sua mensagem.";
    }

    if (!this.state.email.includes("@")) {
      emailError = "Email inválido";
    }

    if (emailError || nomeError || telefoneError || assuntoError || mensagemError) {
      this.setState({ emailError, nomeError, telefoneError, assuntoError, mensagemError });
      return false;
    }

    return true;
  };


  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
    }
  };

  

  render() {
    return (
      <Parallax speed={0}>
      <div className="formpage" id="contato">
        <div className="form-wrapper">
          <div className="form-title">
            <h1>Entre em contato</h1>
            <div className="footer-social">
              <a href="" target="_blank" className="border"><i class="fab fa-linkedin-in"/></a>
              <a href="" target="_blank" className="border"><i class="fab fa-instagram"/></a>
            </div>

          </div>
          <form className="form2container" onSubmit={enviarEmail}>
            <div className="form-group"> 
              <input
                className="form-control"
                type="text"
                name="nome"
                placeholder="Nome"
                // value={this.state.nome}
                onChange={this.handleChange}
              />
              <label className="form-label">Nome</label>
              <div className="error-message">
                <p>{this.state.nomeError}</p>
              </div>
            </div>
            <div className="form-group">
              <input
                className="form-control"
                name="email"
                placeholder="email"
                // value={this.state.email}
                onChange={this.handleChange}
              />
              <label className="form-label">Email</label>
              <div className="error-message">
                {this.state.emailError}
              </div>
            </div>
            <div className="form-group">
              <InputMask 
              mask="(99) 99999-9999"  
              type="text" 
              className="form-control" 
              placeholder="Telefone" 
              name="telefone"
              onChange={this.handleChange}
              // value={this.state.telefone} 
              />
              <label className="form-label">Telefone</label>
              <div className="error-message">
                {this.state.telefoneError}
              </div>
            </div>
            <div className="selectcamp">
              <select
              name="message"
              type="text"
            >
                  <option selected="selected">Assunto</option>
                  <option name="Assunto" type="text" value="Quero contratar a EONLAB">Quero contratar a EONLAB</option>
                  <option name="Assunto" type="text" value="Contato Administrativo / Financeiro">Contato Administrativo / Financeiro</option>
                  <option name="Assunto" type="text" value="Quero fazer parte do time">Quero fazer parte do time</option>
                  <option name="Assunto" type="text" value="Contato geral">Contato geral</option>
              </select>
              <div className="error-message">
                {this.state.assuntoError}
              </div>
            </div>
            <div className="form-group1">
              <textarea  
              type="text" 
              placeholder="Mensagem" 
              name="mensagem" 
              className="form-control1"
              onChange={this.handleChange}
              // value={this.state.mensagem} 
              />
              <label className="form-label">Mensagem</label>
              <div className="error-message1">
                {this.state.mensagemError}
              </div>
            </div>
            <div className="checkbox-container">
              <div className="checkbox-wrapper">
                  <label className="checkbox" for="myCheckboxId">
                      <input className="checkbox__input" type="checkbox" id="myCheckboxId"/>
                      <div className="checkbox__box"></div>
                      <p>Quero receber informações por email</p>
                  </label>
                  <label className="checkbox1" for="myCheckboxId1">
                      <input className="checkbox__input1" type="checkbox" id="myCheckboxId1"/>
                      <div className="checkbox__box1"></div>
                      <p>Concordo com as <a>Políticas de Privacidade</a></p>
                  </label>
              </div>
              <div className="form-button">
                  <button type="submit" class='f-button f-button-slide-up' >
                      Enviar
                  </button>
              </div>
            </div>

          </form>

        </div>
        <div className="footer-title">
            <p>2021 Copyright</p>
            <a href="/privaci">Políticas de Privacidade</a>
          </div>

      </div>
      </Parallax>
    );
  }
}

export default ValiationForm;