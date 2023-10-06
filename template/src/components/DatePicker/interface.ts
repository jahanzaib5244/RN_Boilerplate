import {ReactElement} from 'react';
import {ImageStyle, StyleProp, TextStyle, ViewStyle} from 'react-native';
import {CalendarContextProps} from 'react-native-calendars/src/expandableCalendar/Context';

import {CalendarHeaderProps} from 'react-native-calendars/src/calendar/header/index';

export interface headerInterface extends CalendarHeaderProps {}

import {CalendarProps} from 'react-native-calendars/src/calendar/index';

export interface props extends Omit<CalendarProps, 'theme' | 'style'> {
  visible?: boolean;
  type?: 'modal' | 'view';
  mode?: 'single' | 'rangePicker';
  hideExtraDays?: boolean;
  theme?: {
    selectedDateColor?: string;
    selectedDateBackground?: string;
    footerButtonTextColor?: string;
    modalOverlayColor?: string;
    titleColor?: string;
    dayNameColor?: string;
    iconColor?: string;
  };
  showFooter?: boolean;
  onConfirm?: () => void;
  confirmButtonText?: string;
  cancelButtonText?: string;
  confirmButton?: ReactElement;
  cancelButton?: ReactElement;
  currentDate?: string; // YYYY-MM-DD
  onCancel?: () => void;
  onChnage: (e: string | string[]) => void;
  footer?: ReactElement;
  style?: {
    calender?: StyleProp<ViewStyle>;
    footerContainer?: StyleProp<ViewStyle>;
    footerButton?: StyleProp<ViewStyle>;
    footerButtonText?: StyleProp<TextStyle>;
    footerCancelButton?: StyleProp<ViewStyle>;
    footerConfirmButton?: StyleProp<ViewStyle>;
    calendarWrapper?: StyleProp<ViewStyle>;
    modalOverlay?: StyleProp<ViewStyle>;
    header?: StyleProp<ViewStyle>;
    headerButton?: StyleProp<ViewStyle>;
    Title?: StyleProp<TextStyle>;
    headerButtonsContainer?: StyleProp<ViewStyle>;
    daysContainer?: StyleProp<ViewStyle>;
    dayName?: StyleProp<TextStyle>;
    leftArrowButton?: StyleProp<ViewStyle>;
    RightArrowButton?: StyleProp<ViewStyle>;
    arrow?: StyleProp<ImageStyle>;
    leftArrow?: StyleProp<ImageStyle>;
    rightArrow?: StyleProp<ImageStyle>;
    customTextStyle?: StyleProp<TextStyle>;
    customContainerStyle?: StyleProp<ViewStyle>;
  };
  current?: string;
  initialDate?: string;
  minDate?: string;
  maxDate?: string;
  showSixWeeks?: boolean;
  markingType?: 'dot' | 'multi-dot' | 'period' | 'multi-period' | 'custom';
  showLeftArrow?: boolean;
  showRightArrow?: boolean;
  hideArrows?: boolean;
  showWeekDays?: boolean;
  showTitle?: boolean;
  header?: (e: CalendarHeaderProps, currentMonth: string) => ReactElement;
  title?: ReactElement;
  dayNames?: string[];
}
