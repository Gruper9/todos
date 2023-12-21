const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM
const { Provider } = ReactRedux

import { AppHeader } from './cmps/AppHeader.jsx'
import { AppFooter } from './cmps/AppFooter.jsx'

import { Home } from './pages/Home.jsx'
import { About } from './pages/AboutUs.jsx'
import { TodoIndex } from './pages/TodoIndex.jsx'
import { TodoDetails } from './pages/TodoDetails.jsx'
import { store } from './store/store.js'


export class App extends React.Component {
    render(){
        <Provider store={store}>
        <Router>
            <div>
                <AppHeader />
                <main>
                    <Routes>

                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/Todo" element={<TodoIndex />} />
                        <Route path="/Todo/:TodoId" element={<TodoDetails />} />
                    </Routes>
                </main>
                <AppFooter />
            </div>
        </Router>
        </Provider>
    }
}
