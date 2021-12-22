import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styles from './App.module.scss'

import ThemeProvider from './context/Theme'

import Footer from './components/Footer'
import Schedule from './components/Schedule'
import About from './pages/About'
import FAQ from './pages/Faq'

function App() {
  return (
    <ThemeProvider>
      <div className={styles.App}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <About />
            </Route>
            <Route path="/faq">
              <FAQ />
            </Route>
            <Route path="/schedule">
              <Schedule />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App
