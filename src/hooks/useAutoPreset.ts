import { AutoScreenProps } from '@themes/layouts/Screen';
import { useRef, useState } from 'react';
import { LayoutChangeEvent } from 'react-native';

const useAutoPreset = (props: AutoScreenProps) => {
  const { preset, scrollEnabledToggleThreshold } = props;
  const { percent = 0.92, point = 0 } = scrollEnabledToggleThreshold || {};

  const scrollViewHeight = useRef<number | null>(null);
  const scrollViewContentHeight = useRef<number | null>(null);
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const updateScrollState = () => {
    if (
      scrollViewHeight.current === null ||
      scrollViewContentHeight.current === null
    )
      return;
    const contentFitsScreen = (function () {
      if (point) {
        return (
          scrollViewContentHeight.current < scrollViewHeight.current - point
        );
      } else {
        return (
          scrollViewContentHeight.current < scrollViewHeight.current * percent
        );
      }
    })();

    if (scrollEnabled && contentFitsScreen) setScrollEnabled(false);

    if (!scrollEnabled && !contentFitsScreen) setScrollEnabled(true);
  };

  const onContentSizeChange = (w: number, h: number) => {
    scrollViewContentHeight.current = h;
    updateScrollState();
  };

  function onLayout(e: LayoutChangeEvent) {
    const { height } = e.nativeEvent.layout;
    // update scroll-view  height
    scrollViewHeight.current = height;
    updateScrollState();
  }

  if (preset === 'auto') updateScrollState();

  return {
    scrollEnabled: preset === 'auto' ? scrollEnabled : true,
    updateScrollState,
    onContentSizeChange,
    onLayout,
  };
};

export { useAutoPreset };
