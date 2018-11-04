import React, { Component } from 'react';
import Routing from './Routing'
// import ButtonAppBar from './components/ButtonAppBar'


class App extends Component {
  render() {
    return (
      <div className="App">
       {/* <header>
          <ButtonAppBar />
       </header> */}
       <body>
       
          <Routing />
      </body>
      </div>
    );
  }
}

export default App;
