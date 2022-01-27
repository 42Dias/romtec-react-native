import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../global/styles/theme';

import { Home } from '../screens/Home';

import { AppointmentDetails } from '../screens/AppointmentDetails';
import { AppointmentCreate } from '../screens/AppointmentCreate';
import { Welcome } from '../screens/Welcome';
import { Login } from '../screens/Login';
import { CloseMenu } from '../screens/CloseMenu';
import { Register } from '../screens/Register';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return(

    <Navigator
      headerMode="none"
    > 
      <Screen 
        name="Welcome"
        component={Welcome}
      />

      <Screen 
        name="Register"
        component={Register}
      />

      <Screen 
        name="Login"
        component={Login}
      />
      <Screen 
        name="Home"
        component={Home}
      />

      <Screen 
        name="CloseMenu"
        component={CloseMenu}
      />
      <Screen 
        name="AppointmentDetails"
        component={AppointmentDetails}
      />
      
      <Screen 
        name="AppointmentCreate"
        component={AppointmentCreate}
      />
    </Navigator>
  )
}