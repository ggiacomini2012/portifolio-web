type TReactDom = typeof import('/Users/guilherme/Desktop/trabalho-e-estudo/portifolio/portifolio-web/node_modules/@types/react-dom/client')

export default (react: TReactDom, root: HTMLElement, app: JSX.Element) => {
  const rootExtractor = root;
  setTimeout(() => {
    react.createRoot(root).render(
      app,
    );
  rootExtractor!.style.display = 'flex';
  }, 500);
  setTimeout(() => {
  rootExtractor!.style.opacity = '1';
  }, 1000);
};
