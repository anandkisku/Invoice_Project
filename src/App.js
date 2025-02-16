import './App.css';
import MyForm from './client/form';
import PdfReader from './client/form/pdfReader';
import Header from './client/header/header';

function App() {
  return (
    <div className="App">
      <Header />
      <div id = "app_container">
      <PdfReader />
      <MyForm />
      </div>
     
    </div>
  );
}

export default App;
