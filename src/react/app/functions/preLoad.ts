export default (react: any, root: HTMLElement, app: JSX.Element) => {
  const rootExtractor = root;
  setTimeout(() => {
    react.createRoot(root).render(
      app,
    );
  rootExtractor!.style.display = 'flex';
  }, 300);
  setTimeout(() => {
  rootExtractor!.style.opacity = '1';
  }, 1500);
};
