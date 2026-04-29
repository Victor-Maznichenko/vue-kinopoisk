// contextKey.ts
import type { Ref, InjectionKey } from 'vue';

export type SliderContext = {
  prevEl: Ref<HTMLElement | null>;
  nextEl: Ref<HTMLElement | null>;
};

export const sliderKey: InjectionKey<SliderContext> = Symbol('slider');