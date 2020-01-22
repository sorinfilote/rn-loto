import { Animated } from 'react-native';
import { useState, useEffect } from 'react';


export const usePulse = (startDelay = 500) => {
  const [scaleValue, setScaleValue] = useState(new Animated.Value(1));

  const pulse = () => {
    Animated.sequence([
      Animated.timing(scaleValue, { toValue: 1.2 }),
      Animated.timing(scaleValue, { toValue: 0.8 }),
    ]).start(() => pulse());
  };

  useEffect(() => {
    const timeout = setTimeout(() => pulse(), startDelay);
    return () => clearTimeout(timeout);
  }, []);

  return scaleValue;
}

export const useRotate = () => {

    const [spinValue, SetSpinValue] = useState(new Animated.Value(0));

    const rotate = () => {
      Animated.timing(
        spinValue, 
        {
          toValue: 1,
          duration: 1000
        }
      ).start()
    }

    useEffect(() => {
      rotate();
    }, [])

    return spinValue;
  }

export const useAnimation = ({ doAnimation, duration }) => {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  
  useEffect(() => {
    Animated.timing(animation, {
      toValue: doAnimation ? 1 : 0,
      duration,
    }).start();
  }, [doAnimation]);

  return animation;
}