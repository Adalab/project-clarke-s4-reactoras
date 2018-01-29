import React, { Component } from 'react';
import Header from './components/Header';
import WelcomeBox from './components/WelcomeBox';
import NavSection from './components/NavSection';
import SectionCV from "./components/SectionCV";
import Footer from './components/Footer';
import Form from './components/Form';
import PrintSection from './components/PrintSection';
import ChangeOrderButtons from './components/ChangeOrderButtons';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Nombre Apellido",
      profession: "Profesión",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      phone: "+34 666 66 66 66",
      mail: "adalab@adalab.com",
      linkedin: "linkedin.com/adalab",
      skill: "habilidad1",
      languageTittle: "Lenguaje1",
      languageContent: "Nivel/título",
      experienceTittle: "Encargado de planta",
      experienceCompany: "Carrefour",
      experienceFromMonth: "junio",
      experienceFromYear: "2016",
      experienceToMonth: "julio",
      experienceToYear: "2017",
      experienceContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      educationTittle: "Licenciatura en Periodismo",
      educationCenter: "Universidad Rey Juan Carlos I",
      educationCompany: "Carrefour",
      educationFromMonth: "junio",
      educationFromYear: "2016",
      educationToMonth: "julio",
      educationToYear: "2017"
    }
  }

  render() {
    return (
      <div>

      <Header/>

      <WelcomeBox/>

      <NavSection/>

      <main>

      <Form />




      <div id="cv_part" className="cv-box hidden" onload="window.print();window.close()" >
      <div className="cv-header">
      <div className="profile">
      <div className="cv-header-text"> {/*dar a esta clase un nombre que indique que contiene un padding de 15px, ha sido quitato il color: white*/}
      <h2 id="name_surname_out" className="title-lg cv-large-text color1 bold-style">Nombre Apellido</h2> {/*añadidas las clases */}
      <h2> <span id="prof_out" className="title-lg cv-large-text color1 no-bold-effects">Profesión</span></h2> {/*añadidas las clases y quitaada la clase profesion*/}
      <p className="cv-description text-justify cv-small-text color1" id="description_out">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p> {/*añadidas las clases cv-small-text color1*/}
      </div>
      </div>
      <div className="contact">
      <ul className="list-contact cv-small-text"> {/*añadida la clase cv-small-text*/}
      <li>
      <img src="images/phone-icon.svg" alt="telefono" />
      <span id="phon_out">+34 666 66 66 66</span>
      </li>
      <li>
      <img src="images/mail-icon.svg" alt="mail" />
      <span id="mail_out">adalab@adalab.com</span>
      </li>
      <li>
      <img src="images/linkedin-icon.svg" alt="linkedin" />
      <span id="linked_out">linkedin.com/adalab</span>
      </li>
      </ul>
      </div>
      </div>

      <SectionCV/>  {/*la parte del cv*/}

      <PrintSection />

      </div>
      </main>

      <Footer/>

      </div>
    );
  }
}

export default App;
