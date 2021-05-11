The Chow App


created using expo init the-chow-app

run the project using: npm start

a server will be created and the app can either be opened on ios or android dependent on Expo Go


to use custom fonts, install 'expo-font': expo install expo-font to load the fonts into the project

The app will need to load the fonts and you don't want your components to render before they're done loading...
to avoid that, use AppLoading component that'll allow you to display a splash screen while your fonts load.

Install: expo install expo-app-loading

This project focuses on navigation on therefore you'll need to install some dependencies.

It uses native-navigation; installed: npm install react-navigation
some libraries used: expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

there are different navigators to be used: 
- StackNavigator: npm install --save react-navigation-stack
- TabsNavogator: npm install --save react-navigation-tabs
- DrawerNavigator: npm install --save react-navigation-drawers