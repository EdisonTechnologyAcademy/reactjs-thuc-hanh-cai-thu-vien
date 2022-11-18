import logo from './logo.svg';
import './App.css';
import dayjs from 'dayjs';

function App() {
  return (
    <div className="App">
      <div className='time'>Hiển thị thời gian dùng thư viện dayjs: {dayjs().format('DD-MM-YYYY hh:mm:ss')}</div>
    </div>
  );
}

export default App;
