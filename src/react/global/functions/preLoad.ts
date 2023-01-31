const timer = (root: HTMLElement): void => {
  const rootExtractor = root;
  setTimeout(() => {
    rootExtractor!.style.display = 'flex';
  }, 300);
  setTimeout(() => {
    rootExtractor!.style.opacity = '1';
  }, 1500);
};

export { timer };

export default (react: any, root: HTMLElement, app: JSX.Element): HTMLElement => {
  const react2 = react as unknown as any;
  react2.createRoot(root).render(
    app,
  );
  timer(root);
  return root;
};
