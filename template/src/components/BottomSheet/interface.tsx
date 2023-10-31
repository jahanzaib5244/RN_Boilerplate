export type BottomSheetProps = {
  children: React.ReactNode;
  label?: string;
  maxScrollPosition?: number;
  top?: number;
  style?: Record<string, unknown>;
  height?: number;
  map?: boolean;
};

export type BottomSheetHandler = {
  scrollTo: (destination: number) => void;
  isActive: () => boolean;
  maxScroll: (position: number) => void;
  toggle: () => void;
};
export type context = {
  translateY: number;
};
