const Page = (() => {
    const home = document.getElementById("home");
    const about = document.getElementById("about");
    const projects = document.getElementById("projects");
    const contact = document.getElementById("contact");
    const homeTab = document.querySelector(".tab.home");
    const aboutTab = document.querySelector(".tab.about");
    const projectsTab = document.querySelector(".tab.projects");
    const contactTab = document.querySelector(".tab.contact");

    function scrollToWithOffset(offset, section) {
        const yOffset = offset;
        const sectionY = section.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({top: sectionY});
    }

    homeTab.addEventListener("click", () => {
        home.scrollIntoView({
            block: "center",
            inline: "center"
        });
    });

    contactTab.addEventListener("click", () => {
        contact.scrollIntoView({
            block: "start",
            inline: "start"
        });
    });

    if (document.documentElement.clientWidth < 1024) {
        aboutTab.addEventListener("click", () => {
            scrollToWithOffset(-10, about);
        });
    
        projectsTab.addEventListener("click", () => {
            scrollToWithOffset(-10, projects);
        });
    } else {
        aboutTab.addEventListener("click", () => {
            scrollToWithOffset(-50, about);
        });
    
        projectsTab.addEventListener("click", () => {
            scrollToWithOffset(-50, projects);
        });
    }
    
})();