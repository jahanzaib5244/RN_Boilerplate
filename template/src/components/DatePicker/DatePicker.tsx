import {View, Text, Modal, Pressable, Image, TextStyle} from 'react-native';
import React, {ReactElement, useCallback, useState} from 'react';
import {styles} from './styles';

import {Calendar} from 'react-native-calendars';
import moment from 'moment';
import {headerInterface, props} from './interface';
import {MarkingProps} from 'react-native-calendars/src/calendar/day/marking';
import {days} from './useDatePicker';

const DatePicker: React.FC<props> = props => {
  const {
    type = 'modal',
    showFooter = props?.type === 'modal',
    current,
    initialDate,
    minDate,
    maxDate,
    style,
    mode = 'single',
    theme,
    markingType,
    showLeftArrow = true,
    showRightArrow = true,
    hideArrows = false,
    showWeekDays = true,
    showTitle = true,
    header,
    dayNames,
    title,
    onChnage,
    ...rest
  } = props;
  const [markedDates, setmarkedDates] = useState<{[key: string]: any}>({});
  const [startDate, setstartDate] = useState<null | string>(null);
  const [endDate, setendDate] = useState<null | string>(null);
  const [currentMonth, setcurrentMonth] = useState(moment().format('MMMM'));

  // calender view type
  const Root = useCallback(
    ({children}: {children: ReactElement}) => {
      if (type === 'modal') {
        return (
          <Modal
            visible={props?.visible}
            onRequestClose={props?.onCancel}
            animationType="fade">
            <View
              style={[
                styles.modal_overlay,
                {
                  backgroundColor:
                    props?.theme?.modalOverlayColor ?? 'rgba(0,0,0,0.5)',
                },
                props?.style?.modalOverlay,
              ]}>
              {children}
            </View>
          </Modal>
        );
      } else {
        return <View>{children}</View>;
      }
    },
    [props],
  );

  // on press any date
  const onPressDay = (selected: string) => {
    // if mode is single markedDates always store ony one date element
    if (mode === 'single') {
      setmarkedDates({
        [selected]: {
          selected: true,
          selectedColor: theme?.selectedDateColor ?? 'blue',
        },
      });
      // return single date as string
      onChnage(selected);
    } else {
      if (!startDate || (startDate && endDate)) {
        // If start date is not set or both start and end dates are set,
        // set the selected date as the start date.
        setstartDate(selected);
        setendDate(null);
        setmarkedDates({
          [selected]: {
            selected: true,
            color: theme?.selectedDateBackground ?? 'blue',
            customTextStyle: {
              color: theme?.selectedDateColor ?? 'white',
              ...(style?.customTextStyle as TextStyle),
            },
            customContainerStyle: style?.customContainerStyle,
          },
        });
      } else {
        // If start date is set but end date is not set, set the selected date as the end date.
        let range: {[key: string]: MarkingProps} = {};
        // start date
        let date = new Date(startDate);
        // end date
        let end = new Date(selected);
        // select all dates between start and end
        while (date <= end) {
          let dateString = moment(date).format('YYYY-MM-DD');
          range[dateString] = {
            type: 'period',
            // selectedTextColor: props?.theme?.selectedDateColor ?? 'green',
            startingDay: startDate === dateString,
            endingDay: selected === dateString,
            selected: true,
            color: theme?.selectedDateBackground ?? 'blue',
            customTextStyle: {
              color: theme?.selectedDateColor ?? 'white',
              ...(style?.customTextStyle as TextStyle),
            },
            customContainerStyle: style?.customContainerStyle,
          };
          date.setDate(date.getDate() + 1);
        }
        setendDate(selected);
        // return all selected dates in array of strings
        props.onChnage(Object.keys(range));
        setmarkedDates(range);
      }
    }
  };

  const Footer = () => {
    return (
      <View style={[styles.footer, props?.style?.footerContainer]}>
        {props?.cancelButton ? (
          props.cancelButton
        ) : (
          <Pressable
            onPress={props?.onCancel}
            style={[styles.footer_btn, props?.style?.footerButton]}>
            <Text
              style={[
                styles.footer_btn_txt,
                {color: props?.theme?.footerButtonTextColor ?? 'blue'},
                props?.style?.footerButtonText,
              ]}>
              {props?.cancelButtonText ?? 'Cancel'}
            </Text>
          </Pressable>
        )}
        {props?.confirmButton ? (
          props.confirmButton
        ) : (
          <Pressable
            onPress={props?.onConfirm}
            style={[styles.footer_btn, props?.style?.footerButton]}>
            <Text
              style={[
                styles.footer_btn_txt,
                {color: props?.theme?.footerButtonTextColor ?? 'blue'},
                props?.style?.footerButtonText,
              ]}>
              {props?.cancelButtonText ?? 'Ok'}
            </Text>
          </Pressable>
        )}
      </View>
    );
  };

  const Header = (header: headerInterface) => {
    return (
      <View {...header} style={[styles.header, style?.header]}>
        <View
          style={[styles.headerButtonContainer, style?.headerButtonsContainer]}>
          {!hideArrows && showLeftArrow && (
            <Pressable
              onPress={() => (!!header?.addMonth ? header?.addMonth(-1) : {})}
              style={[
                styles.arrow_button,
                style?.headerButton,
                style?.leftArrowButton,
              ]}>
              <Image
                style={[styles.arrow, style?.arrow, style?.leftArrow]}
                source={require('./assets/left-arrow.png')}
              />
            </Pressable>
          )}
          {showTitle && title ? (
            title
          ) : (
            <Text style={[styles.title, style?.Title]}>{currentMonth}</Text>
          )}
          {!hideArrows && showRightArrow && (
            <Pressable
              onPress={() => (!!header?.addMonth ? header?.addMonth(1) : {})}
              style={[
                styles.arrow_button,
                style?.headerButton,
                style?.RightArrowButton,
              ]}>
              <Image
                style={[styles.arrow, style?.arrow, style?.rightArrow]}
                source={require('./assets/right-arrow.png')}
              />
            </Pressable>
          )}
        </View>
        {showWeekDays && (
          <View style={[styles.days_container, style?.daysContainer]}>
            {(dayNames && dayNames.length === 7 ? dayNames : days).map(
              (item, index) => {
                return (
                  <Text
                    key={index}
                    style={[
                      styles.day_name,
                      {color: theme?.titleColor ?? 'black'},
                      style?.dayName,
                    ]}>
                    {item}
                  </Text>
                );
              },
            )}
          </View>
        )}
      </View>
    );
  };

  return (
    <Root>
      <View style={[styles.wrapper, props?.style?.calendarWrapper]}>
        <Calendar
          {...rest}
          onDayPress={day => onPressDay(day.dateString)}
          current={props?.current ?? moment().format('YYYY-MM-DD')}
          initialDate={props?.initialDate ?? ''}
          minDate={props?.minDate ?? ''}
          maxDate={props?.maxDate ?? ''}
          style={[styles.calender_wrapper, props?.style?.calender]}
          markedDates={markedDates}
          enableSwipeMonths={true}
          hideExtraDays={props?.hideExtraDays ?? false}
          showSixWeeks={props?.showSixWeeks ?? false}
          disableArrowLeft={true}
          disableArrowRight={true}
          onMonthChange={e => {
            setcurrentMonth(moment(e.timestamp).format('MMMM'));
          }}
          markingType={
            markingType
              ? markingType
              : mode === 'rangePicker'
              ? 'period'
              : undefined
          }
          customHeader={(e: headerInterface) =>
            // props includes header , render props header
            !!header ? header(e, currentMonth) : <Header {...e} />
          }
        />
        {props?.footer
          ? props.footer
          : props?.type === 'modal' && showFooter && <Footer />}
      </View>
    </Root>
  );
};

export default DatePicker;
