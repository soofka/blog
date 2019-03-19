export class Scroller {
  static scrollToTop(): void {
    Scroller.scrollTo({ top: 0 });
  }

  static scrollToEntryTop(): void {
    Scroller.scrollTo({ top: 144 });
  }

  static scrollTo(position: { top?: number }): void {
    window.scrollTo({
      ...position,
      behavior: 'smooth',
    });
  }
}

export default Scroller;
