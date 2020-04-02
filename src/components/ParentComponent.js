import React, { Component } from 'react'
import Form from './Form'
import DisplayData from './DisplayData'

export default class ParentComponent extends Component {
    state = {
        firstName : "",
        lastName : ""
    };

      handleChange = event => {
          const key = event.target.name; 
          this.setState({
              [key] : event.target.value
          })
      }

    render() {
        return (
            <div>
                <Form
                    formData ={this.state}
                    handleFirstNameChange={this.handleChange}
                    handleLastNameChange={this.handleChange}
                />
                <DisplayData formData={this.state} />
            </div>
        )
    }
}
