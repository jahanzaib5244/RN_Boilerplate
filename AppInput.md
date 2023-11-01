# App Input Component Description

## Usage

```javascript
import { AppInput } from "src/components";

function App() {
  const [email, setEmail] = useState("");

  return (
    <View>
      <AppInput
        label="Email Address"
        onChangeText={(e) => setEmail(e)}
        style={{ width: width * 0.9 }}
        value={email}
      />
    </View>
  );
}
```

### Props

#### props are extended with react native paper TextInputProps

| Prop            |          Type          |      Description      | Default          |
| :-------------- | :--------------------: | :-------------------: | :--------------- |
| label           |        `string`        |      input label      | ''               |
| style           | `StyleProp<ViewStyle>` |  input wrapper style  | null             |
| value           |        `string`        |      input value      | ''               |
| error           |        `string`        | input error in string | ''               |
| secureTextEntry |         `bool`         |  for password field   | false            |
| inputStyle      |   `StyleProp<Text>`    |      input style      | null             |
| errorStyle      |   `StyleProp<Text>`    |   error text style    | null             |
| onChangeText    |          `fn`          | input onchange event  | (e:string)=>void |
