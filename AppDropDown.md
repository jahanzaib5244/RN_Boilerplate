# App Drop down Component Description

## Usage

```javascript
import { AppDropdown } from "src/components";

function App() {
  return (
    <View>
      <AppDropdown
        items={Array(5)
          .fill(0)
          .map((_, index) => `item ${index + 1}`)}
        placeholder="Select item..."
      />
    </View>
  );
}
```

### Props

| Prop               |          Type           |                Description Default                | Default     |
| :----------------- | :---------------------: | :-----------------------------------------------: | :---------- |
| itemStyle          | `StyleProp<ViewStyle>`  |               dropdown items style                | `true`      |
| itemtextStyle      | `StyleProp<TextStyle>`  |             dropdown item text style              | `modal`     |
| itemContainerstyle | `StyleProp<ViewStyle>`  |          dropdown items container style           | `false`     |
| style              | `StyleProp<ViewStyle>`  |             dropdown container style              | `Ok`        |
| items              | Array`strings,objects ` |        Array of object or array of strings        | `Cancel`    |
| defaultvalue       |     `string,object`     |      initial selected value string or object      | -           |
| placeholder        |        `string`         |             placeholder for dropdown              | -           |
| onChnage           |          `fun`          |             when user press any item              | `           |
| objectKey          |        `string`         |      object key which will show on drop down      | -           |
| objectValue        |        `string`         | object key which will get on drop down item press | `undefined` |
