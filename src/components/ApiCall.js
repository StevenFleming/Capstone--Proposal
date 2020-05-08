import React from 'react';



class ApiCall extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      mediaSource: []
    };
  }

  render() {
    return (<button> makeApiCall</button>)
  }
}

// makeApiCall = () => {
//   fetch(`url.${process.env.REACT_APP_API_KEY}`)
//     .then(response => response.json())
//     .then(
//       (jsonifiedResponse) => {
//         this.setState({
//           isLoaded: true,
//           headlines: jsonifiedResponse.results
//         });
//       })
//     .catch((error) => {
//       this.setState({
//         isLoaded: true,
//         error
//       });
//     });
// }

export default ApiCall;