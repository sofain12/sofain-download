const apps = [

    // =========================
    // MICROSOFT OFFICE
    // =========================

    {
        name: "Microsoft Word",
        icon: "📝",
        description: "Create, edit and format professional documents.",
        category: "office",
        version: "Microsoft 365",
        image: "assets/word.png",
        link: "https://www.microsoft.com/microsoft-365/word",
        direct: false
    },

    {
        name: "Microsoft Excel",
        icon: "📊",
        description: "Create spreadsheets, analyze data and build charts.",
        category: "office",
        version: "Microsoft 365",
        image: "assets/excel.png",
        link: "https://www.microsoft.com/microsoft-365/excel",
        direct: false
    },

    {
        name: "Microsoft PowerPoint",
        icon: "📽️",
        description: "Create powerful presentations and slides.",
        category: "office",
        version: "Microsoft 365",
        image: "assets/powerpoint.png",
        link: "https://www.microsoft.com/microsoft-365/powerpoint",
        direct: false
    },


    // =========================
    // DEVELOPMENT
    // =========================

    {
        name: "Python",
        icon: "🐍",
        description: "A powerful programming language for development, AI and automation.",
        category: "development",
        version: "Python",
        image: "assets/python.png",
        link: "files/Python.exe",
        direct: true
    },

    {
        name: "Visual Studio Code",
        icon: "💻",
        description: "A powerful and lightweight code editor.",
        category: "development",
        version: "VS Code",
        image: "assets/vscode.png",
        link: "files/VSCode.exe",
        direct: true
    },

    {
        name: "Notepad++",
        icon: "📝",
        description: "Fast and lightweight source code and text editor.",
        category: "development",
        version: "Notepad++",
        image: "assets/npp.png",
        link: "files/npp.exe",
        direct: true
    },


    // =========================
    // MEDIA
    // =========================

    {
        name: "VLC Media Player",
        icon: "🎬",
        description: "Play almost every popular video and audio format.",
        category: "media",
        version: "VLC",
        image: "assets/vlc.png",
        link: "files/VLC.exe",
        direct: true
    },

    {
        name: "Mozilla Firefox",
        icon: "🦊",
        description: "Fast and privacy-focused web browser.",
        category: "tools",
        version: "Firefox",
        image: "assets/firefox.png",
        link: "files/Firefox.exe",
        direct: true
    },


    // =========================
    // TOOLS
    // =========================

    {
        name: "7-Zip",
        icon: "🧰",
        description: "Free file archiver supporting many archive formats.",
        category: "tools",
        version: "7-Zip",
        image: "assets/7zip.png",
        link: "files/7zip.exe",
        direct: true
    }

];


const appGrid = document.getElementById("appGrid");
const searchInput = document.getElementById("searchInput");
const categories = document.querySelectorAll(".category");
const appCount = document.getElementById("appCount");
const noResults = document.getElementById("noResults");

let currentCategory = "all";


function renderApps() {

    const search = searchInput.value
        .toLowerCase()
        .trim();

    appGrid.innerHTML = "";

    const filteredApps = apps.filter(app => {

        const matchesCategory =
            currentCategory === "all" ||
            app.category === currentCategory;

        const matchesSearch =
            app.name.toLowerCase().includes(search) ||
            app.description.toLowerCase().includes(search);

        return matchesCategory && matchesSearch;
    });


    appCount.textContent = filteredApps.length;


    if (filteredApps.length === 0) {

        noResults.style.display = "block";

        return;
    }


    noResults.style.display = "none";


    filteredApps.forEach(app => {

        const card = document.createElement("article");

        card.className = "app-card";


        const button = app.direct
            ? `
                <a
                    class="download-btn"
                    href="${app.link}"
                    download
                >
                    ↓ Download
                </a>
              `
            : `
                <a
                    class="download-btn"
                    href="${app.link}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ↗ Official Site
                </a>
              `;


        card.innerHTML = `

            <div class="app-top">

                <div class="app-icon">

                    <img
                        src="${app.image}"
                        alt="${app.name}"
                        onerror="
                            this.style.display='none';
                            this.parentElement.innerHTML='<span style=&quot;font-size:30px&quot;>${app.icon}</span>';
                        "
                    >

                </div>

                <span class="app-category">
                    ${app.category}
                </span>

            </div>


            <h3>
                ${app.name}
            </h3>


            <p>
                ${app.description}
            </p>


            <div class="app-bottom">

                <span class="version">
                    ${app.version}
                </span>

                ${button}

            </div>

        `;


        appGrid.appendChild(card);

    });

}


/* SEARCH */

searchInput.addEventListener(
    "input",
    renderApps
);


/* CATEGORY BUTTONS */

categories.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            categories.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            currentCategory =
                button.dataset.category;

            renderApps();

        }
    );

});


/* INITIAL LOAD */

renderApps();
