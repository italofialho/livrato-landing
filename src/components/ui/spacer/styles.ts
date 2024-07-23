'use client'

import styled from 'styled-components';
import { breakpoints, SpacerProps } from './interface';

function spacing(index: number | undefined): string {
  if (!index) return '';
  return `${index}px`;
}

function getSpacing(value: breakpoints, breakpoint: 'lg' | 'sm' = 'lg') {
  if (typeof value === 'number') return spacing(value);
  else if (value) return spacing(value[breakpoint]);
}

const Spacer = styled.div<SpacerProps>((props) => ({
  margin: getSpacing(props.margin),
  marginTop: getSpacing(props.mt),
  marginRight: getSpacing(props.mr),
  marginBottom: getSpacing(props.mb),
  marginLeft: getSpacing(props.ml),
  padding: getSpacing(props.padding),
  paddingTop: getSpacing(props.pt),
  paddingRight: getSpacing(props.pr),
  paddingBottom: getSpacing(props.pb),
  paddingLeft: getSpacing(props.pl),

  '@media screen and (max-width: 768px)': {
    margin: getSpacing(props.margin, 'sm'),
    marginTop: getSpacing(props.mt, 'sm'),
    marginRight: getSpacing(props.mr, 'sm'),
    marginBottom: getSpacing(props.mb, 'sm'),
    marginLeft: getSpacing(props.ml, 'sm'),
    padding: getSpacing(props.padding, 'sm'),
    paddingTop: getSpacing(props.pt, 'sm'),
    paddingRight: getSpacing(props.pr, 'sm'),
    paddingBottom: getSpacing(props.pb, 'sm'),
    paddingLeft: getSpacing(props.pl, 'sm'),
  },
}));

export { Spacer };
