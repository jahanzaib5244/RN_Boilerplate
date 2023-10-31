# React Native Cli Boilerplate

This is the React Native boilerplate that provides all the basic components of apps. Developers who use boilerplate that it saves them two to four weeks on average off the beginning of their React Native project!

# Tech Stack

Boilerplate apps include the following rock-solid technical decisions out of the box:

| Library                        | Category              | Version | Description                                    |
| ------------------------------ | --------------------- | ------- | ---------------------------------------------- |
| React Native                   | Mobile Framework      | v0.72.5 | The best cross-platform mobile framework       |
| React                          | UI Framework          | v18.2.0 | The most popular UI framework in the world     |
| TypeScript                     | Language              | v4      | Static typechecking                            |
| React Navigation               | Navigation            | v6      | Performant and consistent navigation framework |
| @reduxjs/toolkit               | State Management      | v1.9    | Best state management librray                  |
| react-redux                    | React Integration     | v8      | To make state management easy                  |
| redux-persist                  | Save state locally    | v6      | Allows to save redux states locally            |
| react-native-vector-icons      | icons                 | v10     | For vector icons like fontAwesome              |
| react-native-toast-message     | Internationalization  | v2      | For beautiful toast messages                   |
| react-native-paper             | Ui compoenent library | v5.10   | Best Ui library from callstack{}               |
| RN Reanimated                  | Animations            | v3      | Beautiful and performant animations            |
| react-native-mmkv              | Persistence           | v1      | State persistence                              |
| axios                          | REST client           | v1.5    | Communicate with back-end                      |
| react-native-exception-handler | Debugger              | v2      | Native debugging or js exception handler       |
| react-i18next                  | RTL                   | v13     | i18n support (including RTL!)                  |
| Hermes                         | JS engine             |         | Fine-tuned JS engine for RN                    |
| Jest                           | Test Runner           | v26     | Standard test runner for JS apps               |
| @testing-library/react-native  | Testing Framework     |         | Automate end-to-end UI testing                 |
| moment                         | Date library          | v2.29   | Excellent date library                         |
| @shopify/react-native-skia     | Animations            | v0.1    | For best and fast ui animations                |
| formik                         | Form handler          | v2.29   | Excellent library for form                     |
| yup                            | Validation            | v2.29   | Excellent for add validation in form           |

## Quick Start

### Prerequisites:

- React Native, make sure you're set up for React Native by following [the official documentation](https://reactnative.dev/docs/environment-setup).

### Create Project:

#### Get walked through the prompts for the different options to start your new app

```bash
npx react-native init "MyApp" --template https://github.com/zaptatech/React-Native-Template.git

```

### Getting Started:

#### For libraries installation:

```bash
  yarn install
```

#### or

```bash
  npm install
```

#### For ios (pod):

```bash
cd ios && pod install && cd..
```

#### Run Project on android:

```bash
npm run android
```

#### or

```bash
yarn android
```

#### Run Project on ios:

```bash
npm run ios
```

#### or

```bash
yarn ios
```

Once you're up and running, you are good to go 💪.

## ⭐ Key Features

- ✅ The latest version of React Native, along with the Custom Dev client, to give you access to a range of powerful features and tools.
- 🎉 [TypeScript](https://www.typescriptlang.org/) for type checking, to help you catch bugs and improve code quality.
- 💅 A minimal UI kit built with [react-native-paper](https://reactnativepaper.com/), which provides a range of pre-defined classes for styling your app.
- ⚙️ Support for multiple environment builds, including Production, Staging, and Development, using react-native-dot-env configuration.
- 💡 A clean project structure with Absolute Imports, to make it easier to navigate and manage your code.
- 🚫 Lint-staged for running linters and TypeScript checks on Git staged files, to ensure that your code is always up to standards.
- 🗂 VSCode recommended extensions, settings, and snippets to enhance the developer experience.
- ☂️ Pre-installed [React Navigation](https://reactnavigation.org/) with examples, to provide a comprehensive navigation solution for your app.
- 🧵 A good approach for handling forms with [formik](https://formik.org/) and [yup](https://www.npmjs.com/package/yup) for validation + keyboard handling.
- 🎯 Localization with [i18next](https://www.i18next.com/) , along with Eslint for validation.
- 🎯 Dark Theme , along with Eslint for validation.

## Directory layout

- [`src/assets`](template/src/assets): Application Assets
- [`src/compoennts`](template/src/compoennts): The application compoennts
- [`src/helper`](template/src/helper): Helper files or functions like (dimension, AppAlert,keyboardListner)
- [`src/constants`](template/src/constants): Application Constants (images Path, colors, dummy data)
- [`src/locales`](template/src/locales): Language setup and localize used by the application
- [`app/navigator`](template/src/navigator): React-Navigation setting
- [`app/redux`](template/src/redux): Redux Reducers actions
- [`app/screens`](template/src/screens): Application Screens folder
- [`app/types`](template/src/types): Application types like env file and more
- [`app/utils`](template/src/utils): consist of apiCall colorscheme store storage

## Boilerplate Structure

#### Naming Convension:

- ##### Compoennts and Screens file names `PascalCase` like `Login`.
- ##### Function names `camel case` like `ctaLogin`.
- ###### Style or class name `snake_case` like `login_button`.
- ##### Constants name ` SCREAMING_SNAKE_CASE,` like `IMAGES_PATH`.

## Compoennts Usage

- [AppScreen](AppScreen.md)
- [AppButton]('AppButton.md)
- [AppText](AppText.md)
- [AppInput](AppInput.md)
- [AppAlert](AppAlert.md)
- [AppDropdown](AppDropdown.md)
- [DatePicker](DatePicker.md)
- [TimePicker](TimePicker.md)
- [ThemeButton](ThemeButton.md)

## 🤔 Is this starter for you?

If you are planning to build a React Native app and are looking for a strong foundation, well-designed architecture, and a positive developer experience, then this starter kit is an excellent resource to consider. It offers a comprehensive set of best practices and tools that have been tested and proven effective in multiple projects.

Even if you are not sure that using a starter kit is the right choice for your project, you can still benefit from this resource. You can explore the starter kit and draw inspiration from the solutions it provides for common challenges faced by React Native developers. This can be a helpful way to discover good practices and find effective solutions for your own app development process.

Overall, whether you choose to use this starter kit as is or simply take some ideas from it, we believe it offers valuable insights and resources for anyone looking to build a high-quality React Native app.

## 🧑‍💻 Stay up to date

We are committed to continually improving our starter kit and providing the best possible resources for building React Native apps. To that end, we regularly add new features and fix any bugs that are discovered.

If you want to stay up to date with the latest developments in our starter kit, you can either watch the repository or hit the follow button. This will allow you to receive notifications whenever new updates are available.

We value the feedback and contributions of our users, and we encourage you to let us know if you have any suggestions for improving our starter kit. We are always looking for ways to make it even more effective and useful for our community. So, please do not hesitate to reach out and share your thoughts with us.
