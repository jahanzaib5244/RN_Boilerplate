# Time Picker component Description

## Usage

```javascript
import { TimePicker } from "src/components";

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
