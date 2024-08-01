export function scrollIntoView(
  id: string,
  getHeaderOffset: boolean = true
): void {
  const element = document.querySelector(id);

  if (!element) throw new Error("Element not found to scroll!");

  if (getHeaderOffset) {
    const headerElement = document.querySelector("#header");
    const headerHeight = headerElement?.getBoundingClientRect()
      .height as number;

    return window.scrollTo({
      behavior: "smooth",
      top:
        element.getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        headerHeight,
    });
  }

  return element.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "nearest",
  });
}
