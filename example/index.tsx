import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FloatingInput } from '../.';

const App = () => {
  return (
    <>
      <FloatingInput label="Nombre" />
    </>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
