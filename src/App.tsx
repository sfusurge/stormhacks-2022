import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styles from './App.module.scss'

import ThemeProvider from './context/Theme'

import Footer from './components/Footer'
import About from './components/About'

function App() {
  return (
    <ThemeProvider>
      <div className={styles.App}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <About />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App
