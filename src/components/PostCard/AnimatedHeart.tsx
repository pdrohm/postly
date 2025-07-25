import React, { useEffect } from "react";
import { Animated } from "react-native";
import { useAnimatedHeart } from "./hooks/useAnimatedHeart";
import { animatedHeartStyles } from "./styles/AnimatedHeart.styles";

interface AnimatedHeartProps {
  trigger: boolean;
  size?: number;
}

const AnimatedHeart: React.FC<AnimatedHeartProps> = ({ trigger, size = 120 }) => {
  const { scale, opacity, trigger: triggerAnimation } = useAnimatedHeart();

  useEffect(() => {
    if (trigger) {
      triggerAnimation();
    }
  }, [trigger, triggerAnimation]);

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        animatedHeartStyles.heartContainer,
        {
          opacity,
          transform: [{ scale }],
          width: size,
          height: size,
        },
      ]}
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
    >
      <Animated.Text style={[animatedHeartStyles.heart, { fontSize: size * 0.7 }]}>❤️</Animated.Text>
    </Animated.View>
  );
};

export default AnimatedHeart; 