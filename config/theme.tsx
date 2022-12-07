import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
// Create a theme instance.

declare module '@mui/material/styles' {
  interface Palette {
    ebandBlue: Palette['primary'];
  }
  interface PaletteOptions {
    ebandBlue: PaletteOptions['primary'];
  }

}
const theme = createTheme({
palette: {
  mode:'light',
   primary: {
      main: '#046AB3',
   },
   secondary: {
     main: '#0b0800',
   },
   error: {
   main: red.A400,
   },
   ebandBlue:{
    main:'#4D909E',
    dark:'#203E44'
   },
  },
});
export default theme;