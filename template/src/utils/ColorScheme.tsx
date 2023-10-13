import {
  makeImageFromView,
  Image,
  Canvas,
  mix,
  vec,
  ImageShader,
  Circle,
  dist,
  useImage,
} from '@shopify/react-native-skia';
import type {SkImage} from '@shopify/react-native-skia';
import {StatusBar} from 'react-native';
import type {ReactNode, RefObject} from 'react';
import {
  createContext,
  useCallback,
  useContext,
  useReducer,
  useRef,
} from 'react';
import {Appearance, Dimensions, View, StyleSheet} from 'react-native';
import type {SharedValue} from 'react-native-reanimated';
import {
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {colors} from '../constants/COLORS';

import ViewShot, {captureRef} from 'react-native-view-shot';

const {width, height} = Dimensions.get('window');
const corners = [vec(0, 0), vec(width, 0), vec(width, height), vec(0, height)];

interface ColorSchemeProviderProps {
  children: ReactNode;
  lightColors: colors;
  darkColors: colors;
}

interface ColorScheme {
  colorScheme: ColorSchemeName;
  colors: colors | null;
  active: boolean;
  overlay1: SkImage | null;
  overlay2: SkImage | null;
}

interface ColorSchemeContext extends ColorScheme {
  ref: RefObject<View>;
  transition: SharedValue<number>;
  circle: SharedValue<{x: number; y: number; r: number}>;
  dispatch: (scheme: ColorScheme) => void;
}

export type ColorSchemeName = 'light' | 'dark';

const wait = async (ms: number) =>
  new Promise(resolve => setTimeout(() => resolve('solved'), ms));

const defaultValue: ColorScheme = {
  colorScheme: Appearance.getColorScheme() ?? 'light',
  colors: null,
  active: false,
  overlay1: null,
  overlay2: null,
};

const ColorSchemeContext = createContext<ColorSchemeContext | null>(null);

const colorSchemeReducer = (_: ColorScheme, colorScheme: ColorScheme) => {
  return colorScheme;
};

export const useColorScheme = () => {
  const ctx = useContext(ColorSchemeContext);
  if (ctx === null) {
    throw new Error('No ColorScheme context context found');
  }
  const {colorScheme, dispatch, circle, ref, transition} = ctx;
  const toggle = useCallback(
    async (x: number, y: number) => {
      try {
        const newColorScheme = colorScheme === 'light' ? 'dark' : 'light';
        dispatch({
          ...ctx,
          active: true,
          colorScheme,
          overlay1: null,
          overlay2: null,
        });
        const r = Math.max(...corners.map(corner => dist(corner, {x, y})));
        circle.value = {x, y, r};
        // const screenShot1 = await captureRef(ref);
        // const overlay1 = useImage('https://picsum.photos/200/300');
        const overlay1 = await makeImageFromView(ref);
        // 2. display it
        dispatch({
          ...ctx,
          active: true,
          colorScheme,
          overlay1,
          overlay2: null,
        });
        // 3. switch to dark mode
        await wait(10);
        dispatch({
          ...ctx,
          active: true,
          colorScheme: newColorScheme,
          overlay1,
          overlay2: null,
        });
        // 4. wait for the dark mode to render
        await wait(16);
        // 5. take screenshot
        // const screenShot2 = await captureRef(ref);
        // const overlay2 = useImage('https://picsum.photos/200/300');
        const overlay2 = await makeImageFromView(ref);
        dispatch({
          ...ctx,
          active: true,
          colorScheme: newColorScheme,
          overlay1,
          overlay2,
        });
        // 6. transition
        transition.value = 0;
        transition.value = withTiming(1, {duration: 650});
        await wait(650);
        dispatch({
          ...ctx,
          active: false,
          colorScheme: newColorScheme,
          overlay1: null,
          overlay2: null,
        });
      } catch (error) {
        console.log(error);
      }
    },
    [colorScheme, dispatch],
  );
  return {colorScheme, toggle, colors: ctx.colors, active: ctx.active};
};

export const ColorSchemeProvider = ({
  lightColors,
  darkColors,
  children,
}: ColorSchemeProviderProps) => {
  const circle = useSharedValue({x: 0, y: 0, r: 0});
  const transition = useSharedValue(0);
  const ref = useRef(null);

  const [{colorScheme, active, overlay1, overlay2}, dispatch] = useReducer(
    colorSchemeReducer,
    defaultValue,
  );

  const r = useDerivedValue(() => {
    return mix(transition.value, 0, circle.value.r);
  });

  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'}
      />
      <ViewShot ref={ref} style={{height, width}}>
        <ColorSchemeContext.Provider
          value={{
            colorScheme,
            dispatch,
            colors: colorScheme === 'light' ? darkColors : lightColors,
            active,
            overlay1,
            overlay2,
            ref,
            circle,
            transition,
          }}>
          {children}
        </ColorSchemeContext.Provider>
      </ViewShot>
      <Canvas style={StyleSheet.absoluteFill} pointerEvents={'none'}>
        <Image
          fit={'cover'}
          image={overlay1}
          x={0}
          y={0}
          width={width}
          height={height}
        />
        {overlay2 && (
          <Circle c={circle} r={r}>
            <ImageShader
              image={overlay2}
              x={0}
              y={0}
              width={width}
              height={height}
              fit={'cover'}
            />
          </Circle>
        )}
      </Canvas>
    </View>
  );
};
