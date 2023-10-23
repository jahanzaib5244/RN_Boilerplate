import {Edge, useSafeAreaInsets} from 'react-native-safe-area-context';

export type ExtendedEdge = Edge;

const propertySuffixMap = {
  top: 'Top',
  bottom: 'Bottom',
  left: 'Left',
  right: 'Right',
};

export type style =
  | 'marginBottom'
  | 'marginEnd'
  | 'marginStart'
  | 'marginTop'
  | 'paddingBottom'
  | 'paddingEnd'
  | 'paddingStart'
  | 'paddingTop';
/**
 * A hook that can be used to create a safe-area-aware style object that can be passed directly to a View.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Utils-useSafeAreaInsetsStyle.md)
 */
export function useSafeAreaInsetsStyle(
  safeAreaEdges: ExtendedEdge[] = [],
  property: 'padding' | 'margin' = 'padding',
): {
  edgeStyle: style | {};
  top: number;
  bottom: number;
  left: number;
  right: number;
} {
  const insets = useSafeAreaInsets();

  return {
    edgeStyle: safeAreaEdges.reduce((acc, e) => {
      return {
        ...acc,
        [`${property}${propertySuffixMap[e]}`]: insets[e],
      };
    }, {}),
    top: insets.top,
    bottom: insets.bottom,
    left: insets.left,
    right: insets.right,
  };
}
