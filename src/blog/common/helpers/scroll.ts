export const scrollToTop = (): void => scrollTo(0);

export const scrollToEntryTop = (): void => scrollTo(144);

export const scrollTo = (top: number): void =>
  window.scrollTo({
    top,
    behavior: 'smooth',
  });
