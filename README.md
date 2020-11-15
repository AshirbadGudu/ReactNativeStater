# React Native Stater App

## Open Android Emulator

- `cd %ANDROID_HOME%/tools && emulator -avd Pixel_2_API_26`

## Run On Physical Device

### List of devices attached

- `adb devices`

### Link Device

- `adb -s <device name> reverse tcp:8081 tcp:8081`

### Example

- `adb -s E2MID18100811508 reverse tcp:8081 tcp:8081 && react-native start`

## Create APK

- `cd android && gradlew assembleRelease`

## Use React Native Vector Icons In App

### With yarn

- `yarn add react-native-vector-icons`

### With npm

-`npm i react-native-vector-icons`

### Change App Build Gradle File

- navigate to `android\app\build.gradle` and add following line at the end

- `apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"`

## Use React Navigation 5 In App

- ```yarn add
        react-native-reanimated
        react-native-gesture-handler
        react-native-screens
        react-native-safe-area-context
        @react-navigation/native
        @react-native-community/masked-view
        @react-navigation/drawer
        @react-navigation/material-bottom-tabs
        @react-navigation/stack
        react-native-paper
  ```
