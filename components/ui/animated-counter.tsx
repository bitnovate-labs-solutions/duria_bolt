import { useCounter } from '@/hooks/use-counter';

interface AnimatedCounterProps {
  end: number;
  start?: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({ 
  end, 
  start = 0, 
  duration = 2000, 
  delay = 0, 
  suffix = "",
  className = ""
}: AnimatedCounterProps) {
  const count = useCounter({ end, start, duration, delay });

  return (
    <span className={className}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}
