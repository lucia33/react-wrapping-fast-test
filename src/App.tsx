import React from 'react';
import logo from './logo.svg';
import './App.css';

import { 
  provideFASTDesignSystem, 
  fastCard, 
  fastButton
} from '@microsoft/fast-components';
import { provideReactWrapper } from "@microsoft/fast-react-wrapper";

// This works (somewhat) - importing internally
// the styles are not being loaded tho
import { cerButtonBasic } from "./button/button";

// This does not - importing from an external package bundled by webpack
// import { cerButtonBasic } from "demo-fast-foundation-extended";

const { wrap } = provideReactWrapper(
  React, 
  provideFASTDesignSystem()
);

export const FastCard = wrap(fastCard());
export const FastButton = wrap(fastButton());
export const TestCerButtonBasic = wrap(cerButtonBasic());

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <FastCard>
          <h2>FAST React</h2>
          <FastButton appearance="accent" onClick={() => console.log("clicked")}>Click Me</FastButton>
          <TestCerButtonBasic appearance="accent">test</TestCerButtonBasic>
      </FastCard>
    </div>
  );
}

export default App;
