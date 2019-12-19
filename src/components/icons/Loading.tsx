import * as React from 'react';

import {
  motion, MotionProps
} from "framer-motion";

import {
  useTheme
} from "../../hooks";

import {
  SvgCircleNotch
} from "./CircleNotch";

export interface LoadingProps {
  fill?: string;
  width: string;
  height: string;
  motionConfig?: MotionProps;
  icon?: SVGSVGElement;
}

export const Loading: React.FunctionComponent<LoadingProps> = ({
  fill,
  width,
  height,
  motionConfig,
  icon
}) => {
  const theme = useTheme();

  const motionConfigToUse: MotionProps = motionConfig ||  {
    style: {
      height,
      width,
      transformOrigin: 'center center'
    },
    animate: {rotate: 360},
    transition: { duration: theme.animationTimeSlow, loop: Infinity, ease: 'linear'}
  };

  return (
    <motion.div
      {...motionConfigToUse}
    >
      {icon || <SvgCircleNotch fill={fill || theme.colors.primary} />}
    </motion.div>
  );
};
