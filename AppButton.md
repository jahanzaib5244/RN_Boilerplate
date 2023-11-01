# App Button Component Description

## Usage

```javascript
import { AppButton } from "src/components";

function App() {
  return (
    <View>
      <AppButton
        title={"Login"}
        loading={false}
        style={{ backgroundColor: "#000" }}
        titleStyle={{ color: "#fff" }}
        activityColor={"#fff"}
      />
    </View>
  );
}
```

### Props

#### extended with react native `PressableProps`

| Prop          |          Type          |       Description       | Default    |
| :------------ | :--------------------: | :---------------------: | :--------- |
| title         |        `string`        |      button title       | `''`       |
| onPress       |          `fn`          | onbutton press function | `()=>void` |
| style         | `StyleProp<ViewStyle>` | button container style  | `{}`       |
| titleStyle    | `StyleProp<TextStyle>` | button title text style | `{}`       |
| activityColor |        `string`        | loading activity color  | `#fff`     |
| loading       |       `boolean`        | show activity indicator | `false`    |
