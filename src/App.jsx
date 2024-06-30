import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import ProtectedRoute from './route/ProtectedRoute/ProtectedRoute.jsx';
import {
  AboutPage,
  InfoPage,
  InitialIntake,
  LoginPage,
  SignUpPage,
  UserPage,
  FurnaceIntakePage,
  FurnaceTrackingPage,
  FridgeIntakePage,
  FridgeTrackingPage,
  Under_SinkIntakePage,
  Gutters_n_SpoutsPage,
  DevicesList,
  DeviceProfile,
  DeviceHowToVideos,
} from './pages/pages.jsx';

import './App.css';
import './styles/_styles.scss';

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Switch>
          {/* Visiting localhost:5173 will redirect to localhost:5173/home */}
          <Redirect exact from="/" to="/home" />
          {/* Visiting localhost:5173/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>
          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:5173/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:5173/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/home"
          >
            <UserPage />
          </ProtectedRoute>
          <ProtectedRoute exact path="/info">
            <InfoPage />
          </ProtectedRoute>
          //! new
          <ProtectedRoute
            // logged in shows DevicesList else shows LoginPage
            exact
            path="/devices"
          >
            <DevicesList />
          </ProtectedRoute>
          //! new
          <ProtectedRoute
            // logged in shows DeviceProfile else shows LoginPage
            exact
            path="/device-profile/:deviceId"
          >
            <DeviceProfile />
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows DeviceProfile else shows LoginPage
            exact
            path="/device-how-to-videos/furnace"
          >
            <DeviceHowToVideos />
          </ProtectedRoute>
          <ProtectedRoute exact path="/initial-intake">
            <InitialIntake />
          </ProtectedRoute>
          <Route exact path="/login">
            {user.id ? (
              // If the user is already logged in,
              // redirect to the /user page
              <Redirect to="/home" />
            ) : (
              // Otherwise, show the login page
              <LoginPage />
            )}
          </Route>
          <Route exact path="/sign-up">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /home page
              <Redirect to="/home" />
            ) : (
              // Otherwise, show the registration page
              <SignUpPage />
            )}
          </Route>
          <Route exact path="/home">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the Landing page
              <LoginPage />
            )}
          </Route>
          <ProtectedRoute
            // logged in shows furnace-main-intake else shows LoginPage
            exact
            path="/furnace-intake"
          >
            <FurnaceIntakePage />
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows furnace-tracking else shows LoginPage
            exact
            path="/furnace-tracking"
          >
            <FurnaceTrackingPage />
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows fridge-main-intake else shows LoginPage
            exact
            path="/refrigerator-intake"
          >
            <FridgeIntakePage />
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows fridge-tracking else shows LoginPage
            exact
            path="/refrigerator-tracking"
          >
            <FridgeTrackingPage />
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows Under_Sink-main-intake else shows LoginPage
            exact
            path="/undersink-inspection-intake"
          >
            <Under_SinkIntakePage />
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows Gutters_n_Spouts-main-intake else shows LoginPage
            exact
            path="/gutters-and-downspouts-intake"
          >
            <Gutters_n_SpoutsPage />
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows the Device Profile page else shows LoginPage
            exact
            path="/device-profile"
          >
            <DeviceProfile />
          </ProtectedRoute>
          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <div className="header-one jc-center">404</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
