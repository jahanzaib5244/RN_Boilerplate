# App screen Component Description

## Usage

```javascript
import { AppScreen } from "src/components";

function App() {
  return (
    <AppScreen
      safeAreaEdges={["bottom", "top"]}
      contentContainerStyle={{ flex: 1 }}
      preset="fixed"
      style={{ backgroundColor: colors?.white }}
    >
      {/* { rest components } */}
    </AppScreen>
  );
}
```

### Props

#### screen props

| Prop                      |            Type             |                     Description                      | Default      |
| :------------------------ | :-------------------------: | :--------------------------------------------------: | :----------- |
| children                  |         `ReactNode`         |                 React node elements                  | `null`       |
| style                     |   `StyleProp<ViewStyle>`    |        Style for the outer content container         | `{}`         |
| contentContainerStyle     |   `StyleProp<ViewStyle>`    |        Style for the inner content container         | `{}`         |
| safeAreaEdges             |      `ExtendedEdge[]`       |    Override the default edges for the safe area.     | `undefined`  |
| backgroundColor           |          `string`           |               button title text style                | `#fff`       |
| statusBarStyle            |          `string`           |         Status bar setting. Defaults to dark         | `light,dark` |
| keyboardOffset            |          `number`           |          offset the keyboard? Defaults to 0          | `0`          |
| KeyboardAvoidingViewProps | `KeyboardAvoidingViewProps` | props directly to the KeyboardAvoidingView component | `{}`         |

### Fixed screen props

#### props are extended with basic screen props

| Prop   |   Type   | Description | Default   |
| :----- | :------: | :---------: | :-------- |
| preset | `string` |    fixed    | `'fixed'` |

### Scroll screen props

#### props are extended with basic screen props

| Prop                      |       Type        |              Description              | Default      |
| :------------------------ | :---------------: | :-----------------------------------: | :----------- |
| preset                    |     `string`      |                scroll                 | `'fixed'`    |
| keyboardShouldPersistTaps |     `string`      | 'handled', 'always', 'never', 'fixed' | `'' `        |
| ScrollViewProps           | `ScrollViewProps` |  scrollview props from react native   | `undefined ` |

### Auto screen props

#### props are extended with basic Scroll Screen Props

| Prop                         |   Type   |            Description             | Default  |
| :--------------------------- | :------: | :--------------------------------: | :------- |
| preset                       | `string` |                auto                | `'auto'` |
| scrollEnabledToggleThreshold | `object` | {percent?: number; point?: number} | `null `  |
