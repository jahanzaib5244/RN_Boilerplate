# Bottom Sheet Component Description

## Usage

```typescript
import { BottomSheet } from "src/components";
import { useRef } from "react";
import { height } from "src/helper";

function App() {
  const bottomsheetRef = useRef<BottomSheetHandler>(null);

  return (
    <View>
      <AppButton
        title="Open Bottom sheet"
        onPress={() => bottomsheetRef.current?.toggle()}
      />
      <BottomSheet height={height * 0.5} ref={bottomsheetRef}>
        <View style={{ flex: 1, backgroundColor: colors?.black_text }} />
      </BottomSheet>
    </View>
  );
}
```

### Props

#### refrence functions

| Prop     | Type |                  Description                  | Default            |
| :------- | :--: | :-------------------------------------------: | :----------------- |
| scrollTo | `fn` |          scroll to specific position          | `(e:number)=>void` |
| isActive | `fn` | return true if bootom sheet active else false | `()=>boolean`      |
| toggle   | `fn` |           show or hide bottom sheet           | `()=>void`         |

#### props

| Prop     |          Type          |             Description             | Default          |
| :------- | :--------------------: | :---------------------------------: | :--------------- |
| children |      `ReactNode`       | react node element for bottom sheet | null             |
| style    | `StyleProp<ViewStyle>` |    bootom sheet container style     | undefined        |
| height   |        `number`        |         bottom sheet height         | screenHeight / 2 |
