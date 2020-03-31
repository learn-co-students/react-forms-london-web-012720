import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={event => this.props.handleFirstNameChange(event)}
            value={this.props.formData.firstName}
          />
          <input
            type="text"
            onChange={event => this.props.handleLastNameChange(event)}
            value={this.props.formData.lastName}
          />
        </form>
      </div>
    )
  }
}

export default Form;


// import React from 'react';

// class Form extends React.Component {
//   state = {
//     firstName: "John",
//     lastName: "Henry"
//   }

//   handleFirstNameChange = event => {
//     this.setState({
//       firstName: event.target.value
//     })
//   }

//   handleLastNameChange = event => {
//     this.setState({
//       lastName: event.target.value
//     })
//   }

//   render() {
//     return (
//       <form>
//         <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
//         <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
//       </form>
//     )
//   }
// }

// export default Form;