// @flow
import React from 'react';
import {Route, Switch} from 'fusion-plugin-react-router';

import Home from './pages/Home/index';
import PageNotFound from './pages/pageNotFound.js';
import {ChakraProvider} from '@chakra-ui/react';

const root = (
  <ChakraProvider>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={PageNotFound} />
    </Switch>
  </ChakraProvider>
);

export default root;
