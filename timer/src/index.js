import React from 'react'
import {createRoot} from 'react-dom/client'
const container = document.getElementById('root');
const root = createRoot(container);

function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    root.render(element);
}

setInterval(tick, 1000);