window.addEventListener("load", () => {
  requestAnimationFrame(() => {
    document.body.classList.remove("is-loading");
    document.body.classList.add("is-open");
  });
});
