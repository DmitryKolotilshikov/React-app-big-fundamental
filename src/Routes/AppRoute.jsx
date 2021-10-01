/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { LoginContext } from '../Context/LoginContext';
import { Loader } from '../UI/Loader';
import { publicRoutes, privateRoutes } from './routes';

export const AppRoute = () => {
  const { isAuth, isLoading } = useContext(LoginContext);

  if (isLoading) return <Loader />;

  return (
    isAuth
      ? (
        <Switch>
          {
            privateRoutes.map(({ path, component, exact }) => (
              <Route path={path} component={component} exact={exact} key={path} />
            ))
            }
          <Redirect to="/posts" />
        </Switch>
      )
      : (
        <Switch>
          {
          publicRoutes.map(({ path, component, exact }) => (
            <Route path={path} component={component} exact={exact} key={path} />
          ))
        }
          <Redirect to="/login" />
        </Switch>
      )
  );
};
