import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styles from './App.module.scss'

import ThemeProvider from './context/Theme'

import Home from './pages/Home'

function App() {
  return (
    <ThemeProvider>
      <div className={styles.App}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App
