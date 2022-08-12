export const debounce = (callback: (props: any) => void, delay: number = 750) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...props: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback(props);
    }, delay);
  };
};
