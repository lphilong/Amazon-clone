import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes/index';
import { Fragment } from 'react';
import MainLayout from './MainLayout/index';

function App() {
    return (
        <Router basename="/amazon">
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.element;
                        const Layout = route.layout === null ? Fragment : MainLayout;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
