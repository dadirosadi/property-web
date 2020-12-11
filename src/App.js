import React, {Suspense} from 'react';
import './App.css';
import Routes from './routes'
const Header = React.lazy(() => import('./components/header/header.component'));

const App = () => {
  return <Suspense fallback=''>
         <Header />
         <Routes />
      </Suspense>
}

export default App;
