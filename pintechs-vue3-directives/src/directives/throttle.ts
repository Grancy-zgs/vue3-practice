import { Directive, DirectiveBinding } from 'vue';

const throttleFn = <T>(fn: (...args: any[]) => T, delay = 800) => {
  let timer: number | null = null;
  let result: T | null = null;
  return (...args: any[]) => {
    if (timer) return;
    else {
      timer = window.setTimeout(() => {
        result = fn(...args);
        timer = null;
      }, delay);
      return result;
    }
  };
};

export const throttle: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    if (typeof binding.value.fn !== 'function' || !binding.value.event) return;
    el.addEventListener(
      binding.value.event,
      throttleFn(binding.value.fn, binding.value.delay)
    );
  },
  beforeUnmount(el: HTMLElement, binding: DirectiveBinding) {
    if (typeof binding.value.fn !== 'function' || !binding.value.event) return;
    el.removeEventListener(
      binding.value.event,
      throttleFn(binding.value.fn, binding.value.delay)
    );
  }
};
