import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './style.css';
import PageHeader from '../../componets/PageHeader';



function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponíveis ">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matérias</label>
                        <input type="text" id="jubject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="weed-day">Dia da semana</label>
                        <input type="text" id="weed-day" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </PageHeader>

            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://scontent-gru1-1.xx.fbcdn.net/v/t1.0-9/46513157_186027849013861_2589128263100006400_n.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=_RvqCM2ohGYAX9tgS4D&_nc_ht=scontent-gru1-1.xx&oh=d1c364ef13ddcc2bb4da301c34c38055&oe=5F5350C4" alt="Kengy Guedes" />
                        <div>
                            <strong>
                                Kengy Guedes de Freitas
                            </strong>
                            <span>Química</span>
                        </div>
                    </header>
                    <p>
                        Entusiasta das melhores tecnologias de química avançada.
                         <br /><br />
                         Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
                    </p>
                    <footer>
                        <p>
                            Preço / hora
                                    <strong>R$ 150,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp" />
                            <p>Entrar em contato</p>

                        </button>

                    </footer>
                </article>
            </main>
        </div>
    )
}

export default TeacherList;