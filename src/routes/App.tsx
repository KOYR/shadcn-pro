import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";

import { ThemeProvider } from "../core/context/theme-provider";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
}
