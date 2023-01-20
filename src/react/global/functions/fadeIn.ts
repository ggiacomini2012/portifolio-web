const fadeIn = (elementId: string) => {
  const htmlElement = document.getElementById(elementId);
  if (htmlElement) {
    htmlElement.classList.remove('fade-in');
    setTimeout(() => htmlElement.classList.add('fade-in'), 100);
  }
};

export default fadeIn;
