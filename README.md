# Wordle App built wtih Expo

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app). This app is similar to the official [NY Times Wordle game](https://www.nytimes.com/games/wordle/index.html).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npm run start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## How To Play

#### Guess the Wordle in 6 tries.

- Each guess must be a valid 5-letter word.
- The color of the tiles will change to show how close your guess was to the word.
  Examples
  ![image info](assets/images/letter-correct.png)
  C is in the word and in the correct spot.
  ![image info](assets/images/letter-present.png)
  O is in the word and in the correct spot.
  ![image info](assets/images/letter-absent.png)
  S is not in the word in any spot.
  ###
- Unlike the official NY Times game, you can play as many rounds as you like
  - Simply refresh the browser to get a new wordle
  - Pull down to refresh on Android or iOS to get a new wordle
