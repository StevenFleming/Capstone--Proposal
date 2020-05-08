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

  makeFunction() {
    return console.log(0);
  }
  makeApiCall() {
    fetch(`url.${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(
        (jsonifiedRepsonse) => {
          this.setState({
            isLoaded: true,
            mediaSource: jsonifiedRepsonse.results
          });
        }
      )
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.makeApiCall()}>
          makeApiCall
      </button >
      </React.Fragment >
    );
  }
}

export default ApiCall;

// makeApiCall() {
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