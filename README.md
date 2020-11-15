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
