import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider} from "@chakra-ui/react";
import { themes } from "./styles/themes"; 
import Fonts from "./styles/fonts";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={themes}>
      <Fonts/>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

