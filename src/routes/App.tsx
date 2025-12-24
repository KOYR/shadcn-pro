import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";

import { ThemeProvider } from "../core/context/theme-provider";
import { ActiveThemeProvider } from "../layout/basic/active-theme";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ActiveThemeProvider>

          <AppRouter />
        </ActiveThemeProvider>

      </ThemeProvider >
    </BrowserRouter >
  );
}
