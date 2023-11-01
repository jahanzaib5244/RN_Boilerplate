# App Alert Component Description

> **Note**: The AppAlert component is the basic configuration of our application alert we can change this configuration according to our application needs. To show the application alert we can import the `showAlert` function from the helper folder and pass some props which will display on alert according to our needs.

## Usage

```javascript
import { showAlert } from "src/helper";

function App() {
  const Alert = () => {
    showAlert({
      title: "alert",
      message: "message",
      onConfirmPress: () => {
        console.log("confirm press");
      },
      onCancelPress: () => {
        console.log("Cancel press");
      },
    });
  };

  return (
    <View>
      <AppButton
        title={"Login"}
        loading={false}
        style={{ backgroundColor: "#000" }}
        titleStyle={{ color: "#fff" }}
        activityColor={"#fff"}
        onPress={Alert}
      />
    </View>
  );
}
```

### Props

#### extended with react native `PressableProps`

| Prop           |   Type   |            Description            | Default    |
| :------------- | :------: | :-------------------------------: | :--------- |
| cancelText     | `string` |        cancel button text         | `''`       |
| confirmText    | `string` |        confirm button text        | `''`       |
| title          | `string` |            Alert title            | `''`       |
| message        | `string` |           Alert message           | `'`        |
| onConfirmPress |   `fn`   | when user click on confirm button | `()=>void` |
| onCancelPress  |   `fn`   | when user click on cancel button  | `()=>void` |
