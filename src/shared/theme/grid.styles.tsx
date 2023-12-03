import {StyleSheet, ViewStyle} from 'react-native';

interface GridStyles {
  flexDefault: ViewStyle;
  flexRow: ViewStyle;
  flexColumn: ViewStyle;
  alignItemsCenter: ViewStyle;
  justifyCenter: ViewStyle;
  justifyBetween: ViewStyle;
  justifyFlexEnd: ViewStyle;
  gridGap: (gap: number) => ViewStyle;
  flex: (flex: number) => ViewStyle;
}

export const GridStyles = StyleSheet.create<GridStyles>({
  flexDefault: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifyFlexEnd: {
    justifyContent: 'flex-end',
  },
  gridGap: (gap: number) => ({
    gap,
  }),
  flex: (flex: number) => ({
    flex,
  }),
});
