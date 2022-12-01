import { ThemeProvider } from "styled-components"
import { PdfProvider } from "./context"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { Worker } from "@react-pdf-viewer/core"
import { Router } from "./Router"
import { BrowserRouter } from "react-router-dom"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <PdfProvider>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js">          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Worker>
      </PdfProvider>
    </ThemeProvider>
  )
}
