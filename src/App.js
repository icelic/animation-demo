import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Spring, Keyframes } from 'react-spring';

class App extends Component {
  render() {
    const Container = Keyframes.Spring(async next => {
      while (true) {
        const x = Math.random()*400 - 200;
        const y = Math.random()*700 - 200;

        const xt = Math.random()*400 - 200;
        const yt = Math.random()*700 - 200;

        await next({
          from: { transform: `translate3d(${xt}px,${yt}px,0px) scale(1) rotateZ(0deg)` },
          to: { transform: `translate3d(${x}px,${y}px,0px) scale(0.5) rotateZ(360deg)` },
        });
        await next({
          from: { transform: `translate3d(${x}px,${y}px,0px) scale(0.5) rotateZ(360deg)` },
          to: { transform: `translate3d(${xt}px,${yt}px,0px) scale(1) rotateZ(0deg)` },
          reset: true
        });
      }
    });

    return (
      <div className="App">
        <Container config={{ duration: 1000 }}>
          {props => <img style={props} src={logo} className="App-logo" alt="logo" />}
        </Container>
        {/*<Spring
          from={{
            opacity: 0,
            transform: 'translate3d(800px,800px,0) scale(10) rotateZ(360deg)',
          }}
          to={{
            opacity: 1,
            transform: 'translate3d(0,90vh,0) scale(1) rotateZ(0deg)'
          }} >
          {props => <img style={props} src={logo} className="App-logo" alt="logo" />}
        </Spring>*/}


      </div>
    );
  }
}

export default App;
