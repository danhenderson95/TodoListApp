# Todo app

## Please note the following

- I built this on iOS simulator & device, I have not tested Android.
- the requirements asked for a project built from a <u>bare</u> React Native project, which I did. However, as the React Native docs suggest, I would start a new project using a framework like Expo.
- I have put comments in the various files, I hope they help explain my thoughts.

## Demo

This was recorded on a device, not a simulator.

https://github.com/user-attachments/assets/3ac62bb1-8abc-48c4-9aac-5de332fb003c

## Installation

- run `npm i`
- run `pod install`
- either run `npx react-native run-ios` or open .xcworkspace file in Xcode and run on either a simulator or your device.

### Improvements

With more time and for a production project I would do the following:

- update the auth to use context and persistent state management
- use a router to handle navigation (Expo router / React navigation)
- haptics would be a nice touch to the button interactions
- app assets (icon / in app assets)
- now I'm using alert prompts to take in user input (new todo content), with more time I'd use custom bottom sheets / modal inputs to take in user data
- I've only added a few tests to give an idea of how I'd test. In practice I'd want to increase cover of the different component states.

## Testing

- Run `npm run test`
