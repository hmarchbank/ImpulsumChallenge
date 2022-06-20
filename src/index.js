import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';
const { colors, breakpoints, components, space, radii, shadows, textStyles} = theme;



const inPulsumTheme = extendTheme({
  components,
  colors, 
  breakpoints, 
  space, 
  radii, 
  shadows, 
  textStyles
})


export default theme

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ChakraProvider theme={inPulsumTheme}>
      <App />
    </ChakraProvider>
);
