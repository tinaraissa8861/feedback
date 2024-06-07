import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { ThemeProvider } from "styled-components"

import { GlobalStyle } from "./styles/global.js"
import { Home } from "./pages/Home"
import { theme } from "./styles/theme.js"

const router = createBrowserRouter([
    {
        path:"/",
        element: <Home/>
    }
])

export function App() {
  return (
   <ThemeProvider theme={theme} >
    <RouterProvider router={router} />
    <GlobalStyle/>
   </ThemeProvider>
  )
}
