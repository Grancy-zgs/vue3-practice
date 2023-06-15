import { Directive, DirectiveBinding } from 'vue';

const debounceFn = <T>(fn: (...args: any[]) => T, delay = 800) => {
  let timer: number | null = null;
  let result: T | null = null;
  return (...args: any[]) => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = window.setTimeout(() => {
      result = fn(...args);
    }, delay);
    return result;
  };
};

export const debounce: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const { value } = binding;
    if (
      typeof binding.value.fn !== 'function' ||
      !binding.value.event
    )
      return;
    el.addEventListener(
      binding.value.event,
      debounceFn(binding.value.fn, binding.value.delay)
    );
  },
  beforeUnmount(el: HTMLElement, binding: DirectiveBinding) {
    const { value } = binding;
    if (
      typeof binding.value.fn !== 'function' ||
      !binding.value.event
    )
      return;
    el.removeEventListener(
      binding.value.event,
      debounceFn(binding.value.fn, binding.value.delay)
    );
  }
};
