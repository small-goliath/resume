import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom/client";
import App from "./App";

export default function Portal() {
  const [root, setRoot] = useState<ReactDOM.Root | null>(null);

  useEffect(() => {
    const el = document.getElementById('root');
    if (el) {
      setRoot(ReactDOM.createRoot(el));
    }
  }, []);

  useEffect(() => {
    if (root) {
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
    }
  }, [root]);

  if (!root) return null; // 초기 렌더링시 null 반환
  return null; // 이미 root에 렌더링 되므로 추가적인 JSX는 필요하지 않음
}