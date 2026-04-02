
from tutorial React Native Web Full App Tutorial - Build a Workout App for iOS, Android, and Web
https://www.youtube.com/watch?v=_CBYbEGvxYY

goals:
======
mobx with react-native in real application
monorepo with react-native and react-native-web

changes from tutorial:
======================
react-native@0.55 -> 0.84.1
react-native-web@0.10 -> 0.21.2
react@16 -> 19.2.3 (actual @19.2.4)
    (react-native@0.84.1 -(require)-> react-native-renderer@19.2.3 -(require)-> react@19.2.3)
react-native-cli -> @react-native-community/cli
create-react-app -> vite@7 (actual @8)
    (react-native-web@0.21.2 -(require)-> vite@7)
yarn -> npm
react-router-native@4 -> react-router-native@6 (actual @6)
react-router-dom@4 -> react-router-dom@6 (actual @7)
  use react-router-dom@6 to match react-router-native@6
  use <BrowserRouter>/<NativeRouter>,
    not use new createBrowserRouter(). react-router does not have this for react-native
mobx-persist -> mobx-persist-store@1.1.8
  mobx-persist: not updated 9 years, error in '@persist @observable accessor someProperty'


issue: RN app does not show shadow for card