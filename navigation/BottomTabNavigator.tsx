/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import WorkoutScreen from '../screens/WorkoutScreen';
import PlateCalculatorScreen from '../screens/PlateCalculatorScreen';
import HomeScreen from '../screens/HomeScreen';
import CalorieCounterScreen from '../screens/CalorieCounterScreen';
import LearnScreen from '../screens/LearnScreen';
import {
  BottomTabParamList,
  WorkoutParamList,
  PlateCalculatorParamList,
  HomeParamList,
  CalorieCounterParamList,
  LearnParamList,
} from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName='Home'
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name='Workout'
        component={WorkoutNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='ios-code' color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Plate Calculator'
        component={PlateCalcuatorNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='ios-code' color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Home'
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='ios-code' color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Calorie Counter'
        component={CalorieCounterNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='ios-code' color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Learn'
        component={LearnNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='ios-code' color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const WorkoutStack = createStackNavigator<WorkoutParamList>();

function WorkoutNavigator() {
  return (
    <WorkoutStack.Navigator>
      <WorkoutStack.Screen
        name='WorkoutScreen'
        component={WorkoutScreen}
        options={{ headerTitle: 'View Workouts' }}
      />
    </WorkoutStack.Navigator>
  );
}

const PlateCalculatorStack = createStackNavigator<PlateCalculatorParamList>();

function PlateCalcuatorNavigator() {
  return (
    <PlateCalculatorStack.Navigator>
      <PlateCalculatorStack.Screen
        name='PlateCalculatorScreen'
        component={PlateCalculatorScreen}
        options={{ headerTitle: 'Plate Calculator' }}
      />
    </PlateCalculatorStack.Navigator>
  );
}

const CalorieCounterStack = createStackNavigator<CalorieCounterParamList>();

function CalorieCounterNavigator() {
  return (
    <CalorieCounterStack.Navigator>
      <CalorieCounterStack.Screen
        name='CalorieCounterScreen'
        component={CalorieCounterScreen}
        options={{ headerTitle: 'Tab Three Title' }}
      />
    </CalorieCounterStack.Navigator>
  );
}

const LearnStack = createStackNavigator<LearnParamList>();

function LearnNavigator() {
  return (
    <LearnStack.Navigator>
      <LearnStack.Screen
        name='LearnScreen'
        component={LearnScreen}
        options={{ headerTitle: 'Tab Four Title' }}
      />
    </LearnStack.Navigator>
  );
}

const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{ headerTitle: 'Home Title' }}
      />
    </HomeStack.Navigator>
  );
}
