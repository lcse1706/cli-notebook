import 'bulmaswatch/superhero/bulmaswatch.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Provider } from 'react-redux';
import { store } from './state';
import CellList from './components/cell-list';

import TextEditor from './components/text-editor';
// import CodeCell from './components/code-cell';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <CellList />
      </div>
    </Provider>
  );
};

export default App;
