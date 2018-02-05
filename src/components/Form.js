import React, { Component } from 'react';
import PersonalData from './PersonalData';
import Skills from './Skills';
import Languages from './Languages'
import Experience from './Experience';
import Education from './Education';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue : ''
    }
    this.changeInputText = this.changeInputText.bind(this);
  }

  changeInputText(event){
    this.setState({
      inputValue: event.target.value
    })
  }

  handleInsertPhoto(event) {
    const input = document.querySelector("#photo");
    const img = document.querySelector('.photo-CV');
    const files = input.files;
    if (files && files.length > 0) {
      showImage(files[0], img);
    }
    function showImage(image, imgTag) {
      const fr = new FileReader();
      fr.onload = function () {
        imgTag.src = fr.result;
      }
      fr.readAsDataURL(image);
    }
  }
  render() {

    return (

    <div className="form-box margin-top-xs">
      <form className="form" onSubmit={this.props.handleClick}>
        <PersonalData  sendLocalPersonalData={this.props.sendPersonalData}

          inputPersonal1a={this.props.inputPersonal1b}
          updateInputPersonal1a={this.props.updateInputPersonal1b}

          inputPersonal2a={this.props.inputPersonal2b}
          updateInputPersonal2a={this.props.updateInputPersonal2b}

         />

        <Skills changeInputText={this.changeInputText}
        sendLocalSkills={this.props.sendSkills}  />
        <Languages changeInputText={this.changeInputText}
        sendLocalLanguages={this.props.sendLanguages} />
        <Experience changeInputText={this.changeInputText}
        sendLocalExperiencie={this.props.sendExperiencie} />
        <Education changeInputText={this.changeInputText}
        sendLocalEducation={this.props.sendEducation} />
        <div>
            <label htmlFor="photo" className="insert-photo-input colored1-button-typo rounded-primaryColor-width100-button">Insertar fotografía
            </label>
            <input className="hidden" type="file" name="photo" value="" id="photo" onChange= {this.handleInsertPhoto}/>
         </div>
        <input type="submit" className="rounded-primaryColor-width100-button colored1-button-typo text-center margin-top-xxxs margin-bottom-lg padding-xxxxxs" id="save" value="enviar datos al cv"/ >

      </form>
     </div>
    );
  }
}




export default Form;
