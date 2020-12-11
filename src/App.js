import React, {Suspense} from 'react';
import './App.css';
import Routes from './routes'

const App = () => {
  return <Suspense fallback=''>
         <Routes />
      </Suspense>
}

export default App;
