(() => {
  const e = document.getElementById("home"),
    t = document.getElementById("about"),
    n = document.getElementById("projects"),
    c = document.getElementById("contact"),
    o = document.querySelector(".tab.home"),
    d = document.querySelector(".tab.about"),
    l = document.querySelector(".tab.projects"),
    i = document.querySelector(".tab.contact");
  function r(e, t) {
    const n = e,
      c = t.getBoundingClientRect().top + window.scrollY + n;
    window.scrollTo({ top: c });
  }
  o.addEventListener("click", () => {
    e.scrollIntoView({ block: "center", inline: "center" });
  }),
    document.documentElement.clientWidth < 1024
      ? (d.addEventListener("click", () => {
          r(-10, t);
        }),
        l.addEventListener("click", () => {
          r(-10, n);
        }),
        i.addEventListener("click", () => {
          c.scrollIntoView({ block: "start", inline: "start" });
        }))
      : (d.addEventListener("click", () => {
          r(-90, t);
        }),
        l.addEventListener("click", () => {
          r(-90, n);
        }),
        i.addEventListener("click", () => {
          r(-90, c);
        }));
})();
