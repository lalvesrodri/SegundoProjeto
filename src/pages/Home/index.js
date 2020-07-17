import React, { Component } from "react";
import "./style.css";
import insta from "../../components/735145cfe0a4.png";
import navegador from "../../components/navegador.svg";
import origami from "../../components/origami.svg";
import bussola from "../../components/bussola.svg";
import coracao from "../../components/coracao.svg";
import perfil from "../../components/ft_entrega1.jpg";
import postagem from "../../components/01-12-17-97548520_156917345868286_6086438138105222836_n.jpg";
import mais from "../../components/mais.svg";

class Home extends Component {
  render() {
    return (
      <>
        <header
          class="header"
          style={{
            background: "white",
            margin: "0",
            padding: "20px",
          }}
        >
          <div class="Instagram">
            <img src={insta} width="100" alt="logo" />
          </div>
          <forms class="buscar">
            <div>
              <input type="text" id="pesquisar" placeholder="pesquisar" />
            </div>
          </forms>
          <div class="logo">
            <li>
              <img src={navegador} width="20" alt="navegador" />
            </li>
            <li>
              <img src={origami} width="20" alt="origami" />
            </li>
            <li>
              <img src={bussola} width="20" alt="bussola" />
            </li>
            <li>
              <img src={coracao} width="20" alt="coração" />
            </li>
            <li>
              <img src={perfil} width="30" alt="perfil" />
            </li>
          </div>
        </header>
        <div
          class="titulo"
          class="history"
          style={{
            background: "grey",

            margin: "0",
            padding: "40px",
          }}
        >
          <div
            class="history"
            style={{
              background: "grey",

              margin: "0",
              padding: "20px",
            }}
          >
            <div
              class="imagem"
              style={{
                background: "white",

                margin: "0",
                padding: "20px",
              }}
            >
              <li>
                <img src={navegador} width="20" alt="navegador" />
              </li>
              <li>
                <img src={origami} width="20" alt="origami" />
              </li>
              <li>
                <img src={bussola} width="20" alt="bussola" />
              </li>
              <li>
                <img src={coracao} width="20" alt="coração" />
              </li>
              <li>
                <img src={perfil} width="30" alt="perfil" />
              </li>
            </div>

            <div class="flutuante">
              <div class="visual">
                <li>
                  <img src={perfil} width="30" />
                </li>
                <li>
                  <img src={mais} width="30" />
                </li>
              </div>

              <div class="janela">
                <li>
                  <img src={perfil} width="30" alt="perfil" />
                  <a>perfil 1</a>
                </li>
                <li>
                  <img src={coracao} width="20" alt="coração" />
                  <a>perfil 2</a>
                </li>
                <li>
                  <img src={navegador} width="20" alt="navegador" />
                  <a>perfil 3</a>
                </li>
              </div>

              <div class="arte">
                <img src={postagem} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
