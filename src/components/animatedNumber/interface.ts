export interface AnimatedNumberProps {
  $value: number;
  $startValue?: number;
  $prefix?: string;
  $suffix?: string;
  $container?: React.ReactNode;
  $format?: (n: number) => string;
  $onEnd?: () => void;
  $delay?: number;
  $duration?: number;
}
