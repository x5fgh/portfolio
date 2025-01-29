import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// إنشاء root باستخدام createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// استخدام render بعد createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// إذا كنت تريد بدء قياس الأداء في التطبيق، يمكنك تمرير دالة لتسجيل النتائج
reportWebVitals();