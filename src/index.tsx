import React from 'react';
import ReactDOM from 'react-dom';

const App = () => <div>hello</div>;

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

if ((module as any).hot) {
  (module as any).hot.accept(() => {
    render();
  });
}

render();
