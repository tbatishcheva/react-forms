/* eslint-disable prefer-destructuring */
import React, { Component } from 'react';
import Input from '../components/Input';
import CheckBox from '../components/CheckBox';
import Select from '../components/Select';
import TextArea from '../components/TextArea';
import Button from '../components/Button';

const style = {
  margin: '10px 10px 10px 10px',
};

export default class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: '',
        email: '',
        age: '',
        gender: '',
        expertise: '',
        about: '',
        skills: [],
      },
      genderOptions: ['Male', 'Female', 'Others'],
      skillOptions: ['Programming', 'Development', 'Design', 'Testing'],
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const userData = this.state.newUser;

    fetch('http://example.com',
      {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
      })
      .then((response) => {
        response.json()
          .then((data) => {
            console.log(`Successful${data}`);
          });
      });
  }

  handleClearForm = (e) => {
    e.preventDefault();
    this.setState({
      newUser: {
        name: '',
        email: '',
        age: '',
        gender: '',
        expertise: '',
        about: '',
        skills: [],
      },
    });
  }

  handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser, [name]: value,
      },
    }), () => console.log(this.state.newUser));
  }

  handleSkillsCheckBox = (e) => {
    const newSelection = e.target.value;
    let newSelectionArray;
    if (this.state.newUser.skills.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.skills.filter(s => s !== newSelection);
    } else {
      newSelectionArray = [...this.state.newUser.skills, newSelection];
    }
    this.setState(prevState => ({
      newUser: { ...prevState.newUser, skills: newSelectionArray },
    }));
  }

  handleAbout = (e) => {
    const value = e.target.value;
    this.setState(prevState => ({
      newUser: { ...prevState.newUser, about: value },
    }));
  }

  render() {
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>
        <Input
          type="text"
          title="Full Name"
          name="name"
          value={this.state.newUser.name}
          placeholder="Enter your name"
          handleChange={this.handleInput}
          style={style}
        />
        <Input
          type="number"
          title="Age"
          name="age"
          value={this.state.newUser.age}
          placeholder="Enter your age"
          handleChange={this.handleInput}
          style={style}
        />
        <Select
          title="Gender"
          name="gender"
          options={this.state.genderOptions}
          value={this.state.newUser.gender}
          placeholder="Select Gender"
          handleChange={this.handleInput}
          style={style}
        />
        <CheckBox
          title="Skills"
          name="skills"
          options={this.state.skillOptions}
          selectedOptions={this.state.newUser.skills}
          handleChange={this.handleSkillsCheckBox}
          style={style}
        />
        <TextArea
          title="About"
          name="about you"
          rows={5}
          cols={50}
          value={this.state.newUser.about}
          handleChange={this.handleAbout}
          placeholder="Describe your past experience and skills"
          style={style}
        />
        <Button
          title="Submit"
          style={style}
          action={this.handleFormSubmit}
        />
        <Button
          title="Clear Form"
          style={style}
          action={this.handleClearForm}
        />
      </form>
    );
  }
}
