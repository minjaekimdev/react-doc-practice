import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './React 학습하기/상호작용성 더하기/컴포넌트의 지역 저장소 State/Challenge4';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const currentTime = new Date();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App time={currentTime} />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
