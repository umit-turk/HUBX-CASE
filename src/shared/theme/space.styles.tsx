import {StyleSheet} from 'react-native';

export const SpaceStyles = StyleSheet.create({
  px: px => ({
    paddingHorizontal: px,
  }),
  py: py => ({
    paddingVertical: py,
  }),
  p: p => ({
    padding: p,
  }),
  pl: pl => ({
    paddingLeft: pl,
  }),
  pr: py => ({
    paddingRight: py,
  }),
  pt: pt => ({
    paddingTop: pt,
  }),
  pb: pb => ({
    paddingBottom: pb,
  }),

  mx: mx => ({
    marginHorizontal: mx,
  }),
  my: my => ({
    marginVertical: my,
  }),
  m: m => ({
    margin: m,
  }),
  ml: ml => ({
    marginLeft: ml,
  }),
  mr: mr => ({
    marginRight: mr,
  }),
  mt: mt => ({
    marginTop: mt,
  }),
  mb: mb => ({
    marginBottom: mb,
  }),
  width: width => ({
    width,
  }),
  height: height => ({
    height,
  }),
});
