# react-native-modal-time-picker

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

<p align="center"><img src="https://firebasestorage.googleapis.com/v0/b/musafir-49f4d.appspot.com/o/timepicker.png?alt=media&token=6922733e-1db5-4601-ac6d-ff749cf281e3&_gl=1*18rp4s8*_ga*MTcxMDI1NjE4My4xNjk3MTA2NTYz*_ga_CW55HF8NVT*MTY5NzE3ODUwNy40LjEuMTY5NzE3ODUzNi4zMS4wLjA." alt="Showcase iOS" width="200" height="433">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>

##

> **Note**: Make sure you have install [react-native-reanimated](https://www.npmjs.com/package/react-native-reanimated), [react-native-gesture-handler](https://www.npmjs.com/package/react-native-gesture-handler),[@react-native-masked-view/masked-view](https://www.npmjs.com/package/@react-native-masked-view/masked-view) instructions till step, before proceeding.

## Installation

using yarn:

```sh
yarn add react-native-modal-time-picker
```

using npm:

```sh
npm install --save react-native-modal-time-picker
```

## Usage

```javascript
import React, { useState } from "react";
import TimePicker from "react-native-modal-time-picker";

function App() {
  const [visible, setVisible] = useState(false);

  const openTimePicker = () => {
    setVisible(true);
  };

  const closeTimePicker = () => {
    setVisible(false);
  };

  return (
    <TimePicker
      visible={visible}
      handelChange={(e) => console.log(e)}
      onPressCancel={closeTimePicker}
      onPressConfirm={closeTimePicker}
      confirmButtonText={"Confirm"}
      cancelButtonText={"Cancel"}
    />
  );
}
```

### Props

#### Basic

| Prop              |    Type     |                    Description                     | Default  |
| :---------------- | :---------: | :------------------------------------------------: | :------- |
| handelChange      |    `fn`     |             function return an object              | `fn`     |
| visible           |   `bool`    |              Show / Hide date picker               | `false`  |
| onPressCancel     |    `fn`     | function trigger when user click on cancel button  | `-`      |
| onPressConfirm    |    `fn`     | function trigger when user click on confirm button | `-`      |
| style             |  `object`   |                  see style props                   | `{}`     |
| header            | `ReactNode` |                   custom header                    | -        |
| confirmButtonText |  `string`   |                confirm button text                 | `Ok`     |
| cancelButtonText  |  `string`   |                 cancel button text                 | `Cancel` |

#### Styling

| Prop              |          Type          |          Description          | Default |
| :---------------- | :--------------------: | :---------------------------: | :------ |
| buttonsContainer  | `StyleProp<ViewStyle>` | footer button container style | -       |
| cancelButton      | `StyleProp<ViewStyle>` |  footer cancel button style   | -       |
| confirmButton     | `StyleProp<ViewStyle>` |  footer confirm button style  | -       |
| footerButton      | `StyleProp<ViewStyle>` |     footer buttons style      | -       |
| footerButtonsText | `StyleProp<TextStyle>` |   footer button text style    | -       |
| cancelButtonText  | `StyleProp<TextStyle>` |   cancel button text style    | -       |
| confirmButtonText | `StyleProp<TextStyle>` |   confirm button text style   | -       |
| timeText          | `StyleProp<TextStyle>` |    picker time text style     | -       |
| timeTextContainer | `StyleProp<ViewStyle>` |  picker time container style  | -       |

## Authors

- [Muhammad Jahanzaib](https://github.com/jahanzaib5244/) - Initial code - [@jahanzaib5244](https://twitter.com/jahanzaib5244)

See also the list of [contributors](https://github.com/jahanzaib5244/react-native-modal-time-picker/contributors) who participated in this project.

## Contributing

We welcome contributions to react-native-modal-time-picker.

If you have an idea for a new feature or have discovered a bug, please open an issue.

Don't forget to add a **title** and a **description** explaining the issue you're trying to solve and your proposed solution.

Screenshots and Gifs are VERY helpful to add to the PR for reviews.

Please DO NOT format the files - we're trying to keep a unified syntax and keep the reviewing process fast and simple.

## Questions

Feel free to [Contact me](mailto:jahanzaib5244@gmail.com) or [Create an issue](https://github.com/jahanzaib5244/react-native-modal-time-picker/issues/new)
