import { Provider } from 'react-redux';
import { storeHomeWork } from './store-HomeWork/store-HomeWork';
import { Form } from './sections/form';
import './App.css';
import { FormBoard } from './sections/FormBoard';

function App() {
  return (
    <Provider store={storeHomeWork}>
      <div className="App">
        <Form />
        <FormBoard />
      </div>
    </Provider>
  )
}

export default App