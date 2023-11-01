# App Header Component Description

## Usage

```javascript
import { AppHeader } from "src/components";

function App() {
  return <AppHeader title="Home" showLeftButton={false} />;
}
```

### Props

| Prop           |    Type     |        Description         | Default |
| :------------- | :---------: | :------------------------: | :------ |
| title          |  `string`   |        header title        | ''      |
| showLeftButton |  `boolean`  | show header left container | true    |
| left           | `ReactNode` |   header left container    | null    |
| right          | `ReactNode` |   header right container   | null    |
