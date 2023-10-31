import {View, Pressable, FlatList} from 'react-native';
import React, {useRef, useState} from 'react';
import {styles} from './styles';
import {Menu, MenuItem} from 'react-native-material-menu';
import AppText from '../AppText/AppText';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {props} from './interface';
import {Height} from 'src/helper';
import {useColorScheme} from 'src/utils/ColorScheme';
import {IMAGES_PATH} from 'src/constants';

const AppDropdown: React.FC<props> = ({
  placeholder,
  items,
  onChange,
  objectKey = 'name',
  objectValue = 'value',
  itemStyle = {},
  itemtextStyle = {},
  itemContainerstyle = {},
  style = {},
}) => {
  // if items consist of array of string
  if (typeof items[0] === 'string') {
    // convert array of string to array of objects
    items = items.map((item, index) => ({
      [objectKey]: item,
      [objectValue]: item,
    }));
  }

  const [visible, setVisible] = useState(false);
  const [selected, setselected] = useState<Record<string, any> | null>(null);

  const {colors} = useColorScheme();

  const flatListRef = useRef<FlatList>(null);

  const rotate = useSharedValue(0);

  // when user click on any item
  const change = (item: Record<string, any>) => {
    setselected(item);
    hideMenu();
    onChange && onChange(item[objectValue]);
  };

  const showMenu = () => {
    rotate.value = withTiming(180, {duration: 500});
    setVisible(true);
  };

  const hideMenu = () => {
    rotate.value = withTiming(0, {duration: 500});
    setVisible(false);
  };

  // down arrow icon style
  const rIconStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${rotate.value}deg`}],
    };
  });

  // on flatlist layout change navigate to selected item
  const onLayout = () => {
    if (selected) {
      const index = (items as Record<string, any>)?.findIndex(
        (item: Record<string, any>) =>
          item[objectValue] === selected[objectValue],
      );
      setTimeout(() => {
        if (index) {
          flatListRef.current?.scrollToOffset({
            animated: true,
            offset: Height(33) * index,
          });
        }
      }, 10);
    }
  };

  // render dropdown input container
  const Input = () => {
    return (
      <Pressable
        onPress={showMenu}
        style={[styles.dropdown_wrapper, {backgroundColor: colors?.white}]}>
        <AppText
          numberOfLines={1}
          style={[
            styles.title,
            {
              color: selected ? colors.black : colors.gray,
            },
          ]}>
          {selected?.name ?? placeholder}
        </AppText>
        <Animated.Image
          style={[styles.down_arrow, rIconStyle]}
          source={IMAGES_PATH.filled_down_arrow}
        />
      </Pressable>
    );
  };

  // rendered content
  const RenderItem = ({item}: {item: Record<string, any>}) => {
    return (
      <MenuItem
        textStyle={{
          color: selected?.name === item?.name ? colors?.white : colors?.black,
          ...(itemtextStyle as object),
        }}
        style={[
          styles.menu_item,
          {
            backgroundColor:
              selected?.name === item?.name ? colors?.black : colors?.white,
          },
          itemStyle,
        ]}
        onPress={() => change(item)}>
        {item[objectKey]}
      </MenuItem>
    );
  };

  return (
    <View style={[styles.root, style]}>
      <Menu
        animationDuration={500}
        visible={visible}
        style={{
          ...styles.content_container,
          ...(itemContainerstyle as object),
        }}
        anchor={Input()}
        onRequestClose={hideMenu}>
        <FlatList
          data={items ?? []}
          ref={flatListRef}
          keyExtractor={(_, index) => index.toString()}
          style={styles.flatlist}
          onLayout={onLayout}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <RenderItem item={item} />}
        />
      </Menu>
    </View>
  );
};

export default AppDropdown;
