import { Fragment, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components';
import { UserContext } from './context/UserContext';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function App() {
    const { user, loginContext } = useContext(UserContext);

    const dataUserRedux = useSelector((state) => state.user.account);

    console.log('>>>>check redux ', dataUserRedux);

    // console.log('>>user:', user);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            loginContext(localStorage.getItem('email'), localStorage.getItem('token'));
        }
    }, []);
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
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
