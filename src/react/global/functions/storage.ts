export default (element: string, payLoad: any = 0) => {
  const checkLocalStorage = localStorage.getItem(element) || '';
  return {
    setItem: () => localStorage.setItem(element, JSON.stringify(payLoad)),
    getItem: () => (checkLocalStorage ? JSON.parse(checkLocalStorage) : null),
    removeItem: () => localStorage.removeItem(element),
    clear: () => localStorage.clear(),
  };
};
