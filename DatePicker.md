# Date Picker Component Description

## Usage

#### `Without Modal`

```javascript
import { DatePicker } from "src/components";

function App() {
  return <DatePicker type={"view"} onChnage={(e) => console.log(e)} />;
}
```

#### `With Modal`

```javascript
import { DatePicker } from "src/components";

function App() {
  const [picker, setPicker] = useState(false);

  const [date, setdate] = useState("");
  const [dates, setdates] = useState([]);

  const showPicker = () => {
    setPicker(true);
  };
  const hidePicker = () => {
    setPicker(false);
  };

  return (
    <View>
      <Text>{date}</Text>
      <DatePicker
        mode="single"
        visible={picker}
        onConfirm={showPicker}
        onCancel={hidePicker}
        type="modal"
        onChnage={(e) => setdates(e)}
        current={"2023-03-01"}
        minDate={"2022-03-01"}
        maxDate={"2025-03-01"}
        showSixWeeks={true}
        showLeftArrow={false}
        showRightArrow={false}
        style={{
          leftArrow: { tintColor: "black" },
          title: { backgroundColor: "red" },
        }}
        hideArrows={false}
        showTitle={true}
      />
      {dates.map((item, index) => {
        return <Text key={index}>{item}</Text>;
      })}
      <DatePicker mode="rangePicker" type="view" onChnage={(e) => setdate(e)} />
    </View>
  );
}
```

### Props

#### Basic

| Prop              |    Type     |               Description               | Default                      |
| :---------------- | :---------: | :-------------------------------------: | :--------------------------- |
| visible           |  `boolean`  |      Show / Hide date picker type       | `true`                       |
| mode              |  `string`   |      show in `modal` or in `view`       | `modal`                      |
| showFooter        |  `boolean`  |          show footer component          | `false`                      |
| confirmButtonText |  `string`   |       change confirm button text        | `Ok`                         |
| cancelButtonText  |  `string`   |        change cancel button text        | `Cancel`                     |
| confirmButton     | `ReactNode` |          custom confirm button          | -                            |
| cancelButton      | `ReactNode` |          custom cancel button           | -                            |
| currentDate       |  `string`   |        initial date for calendar        | `Current date`               |
| onCancel          |    `fun`    | function trigger when user press cancel | `()=>`                       |
| onChnage          |    `fun`    |    event when user click on any date    | `(e)=>string ` / ` string[]` |
| footer            | `ReactNode` |         custom footer compoennt         | -                            |
| minDate           |  `string`   |            min calendar date            | `undefined`                  |
| maxDate           |  `string`   |            max calendar date            | `undefined`                  |
| showSixWeeks      |   `bool`    |        show six week on calnedar        | `false`                      |
| showLeftArrow     |   `bool`    |       show left arrow on calendar       | `true`                       |
| showRightArrow    |   `bool`    |      show right arrow on calendart      | `true`                       |
| hideArrows        |   `bool`    |      hide both arrow from calendar      | `false`                      |
| showWeekDays      |   `bool`    |           show week days name           | `true`                       |
| showTitle         |   `bool`    |         show title on calendar          | `true`                       |
| header            |    `fun`    |         custom header compoent          | `(e:headerEvent)=> <></>`    |
| title             | `ReactNode` |          custom title compoent          | -                            |

#### Styling

| Prop                   |   Type   |           Description            | Default |
| :--------------------- | :------: | :------------------------------: | :------ |
| calender               | `object` | calendar parent container style  | -       |
| footerContainer        | `object` |      footer container style      | -       |
| footerButton           | `object` |       footer button style        | -       |
| footerButtonText       | `object` |    footer buttons text style     | -       |
| footerCancelButton     | `object` |    footer cancel button style    | -       |
| footerConfirmButton    | `object` |   footer coonfirm button style   | -       |
| calendarWrapper        | `object` | calendar wrapper container style | -       |
| modalOverlay           | `object` |    modal over container style    | -       |
| header                 | `object` |           header style           | -       |
| headerButton           | `object` |    header arrow button style     | -       |
| Title                  | `object` |        header text style         | -       |
| headerButtonsContainer | `object` |     header buttons container     | -       |
| daysContainer          | `object` |  name week days container style  | -       |
| dayName                | `object` |       calendar date style        | -       |
| leftArrowButton        | `object` |  header left arrow button style  | -       |
| arrow                  | `object` |        header arrow style        | -       |
| leftArrow              | `object` |     header left arrow style      | -       |
| rightArrow             | `object` |     header right arrow style     | -       |

#### theme

| Prop                   |   Type   |          Description          | Default         |
| :--------------------- | :------: | :---------------------------: | :-------------- |
| selectedDateColor      | `string` |   selected date text color    | #fff            |
| selectedDateBackground | `string` |   selected date background    | #0000FF         |
| footerButtonTextColor  | `string` |   footer button text colors   | #0000FF         |
| modalOverlayColor      | `string` |      modal overlay color      | rgba(0,0,0,0.5) |
| titleColor             | `string` |      header title color       | #000            |
| dayNameColor           | `string` | color of the date on calendar | #fFF            |
| iconColor              | `string` |   calendar arrow icon Color   | #0000FF         |
