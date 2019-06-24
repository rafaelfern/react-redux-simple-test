import React from 'react';
import { Provider } from 'react-redux'; //Utiliza Context Api
import Sidebar from './components/Sidebar';
import Video from './components/Video';
import store from './store';


/*
	1- Provider passa para os componentes filhos algum tipo de informação, no caso do Store.
*/

function App() {
  return (
    <div className="container">
		<Provider store={store}>
			<header>Header</header>
			<Video/>
			<Sidebar/>
		</Provider>
    </div>
  );
}



export default App;
