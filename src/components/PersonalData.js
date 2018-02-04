import React, { Component } from 'react';
import Collapse  from './Collapse';


class PersonalData extends Component {

  render() {
    return (
      <div>
      <Collapse legend="Datos personales"> {/*desde form hasta form-cotact modificado desde Sara*/}
        <input  className="contact-field default-input-txtarea" type="text" name="fullname" id="name_surname"  placeholder="Nombre y Apellidos*"  />
        <input  className="contact-field default-input-txtarea" type="text" name="profession" id="prof"  placeholder="Profesión*"  />
        <input  className="contact-field default-input-txtarea" type="tel" name="phone" id="phon"  placeholder="Teléfono*"  />
        <input  className="contact-field default-input-txtarea" type="email" name="email" id="mail"  placeholder="Correo electrónico*"  />
        <input  className="contact-field default-input-txtarea" type="text" name="Linkedin" id="linked"  placeholder="linkedin.com/nombredetuperfil" />
        <textarea  className="contact-field default-input-txtarea" name="comments" id="description" rows={8} cols={20} maxLength={300} placeholder="Perfil*(Escribe una pequeña descripción de ti. Máx:300 caracteres.)"  defaultValue={""} />
        <p className="indicative-text-typo">*Campos obligatorios</p>

        <button className="rounded-lightColor-width45-button colored2-button-typo right margin-md padding-xxxxs" id={`${this.props.idButtonCollapse}`}  type="submit" name="button" onSubmit={this.props.sendLocalPersonalData}>guardar</button>

        <button className="rounded-lightColor-width45-button colored2-button-typo right margin-md padding-xxxxs" id={`${this.props.idButtonCollapse}`}  type="reset" name="button" >reset</button>
      </Collapse>

      </div>
    );
  }
}

export default PersonalData;
