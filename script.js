
const teams = [
    { name: "Liverpool", logo: "liverpool.png", mp: 22, w: 16, d: 5, l: 1, gd: 33, pts: 53, form: "WDDDW" },
    { name: "Arsenal", logo: "arsenal.png", mp: 23, w: 13, d: 8, l: 2, gd: 23, pts: 47, form: "WWDDW" },
    { name: "Nottingham Forest", logo: "nottingham.jpeg", mp: 23, w: 13, d: 5, l: 5, gd: 6, pts: 44, form: "WW WDL" },
    { name: "Manchester City", logo: "mancity.jpeg", mp: 23, w: 12, d: 5, l: 6, gd: 17, pts: 41, form: "WW WDD" },
    { name: "Newcastle United", logo: "newcastle.png", mp: 23, w: 12, d: 5, l: 6, gd: 14, pts: 41, form: "WWWLW" },
    { name: "Chelsea", logo: "chelsea.png", mp: 23, w: 11, d: 7, l: 5, gd: 15, pts: 40, form: "LLDDW" },
    { name: "Bournemouth", logo: "bournemouth.jpeg", mp: 23, w: 11, d: 7, l: 5, gd: 15, pts: 40, form: "DD DWW" },
    { name: "Aston Villa", logo: "aston villa.jpeg", mp: 23, w: 11, d: 6, l: 6, gd: 0, pts: 39, form: "WLDDW" },
    { name: "Brighton", logo: "brighton.png", mp: 23, w: 8, d: 10, l: 5, gd: 4, pts: 34, form: "DDDDW" },
    { name: "Wolves", logo: "wolves.png", mp: 23, w: 10, d: 7, l: 6, gd: 7, pts: 37, form: "WWLDW" },
    { name: "Ipswich Town", logo: "ipswich.png", mp: 23, w: 10, d: 5, l: 8, gd: 6, pts: 35, form: "WDWLL" },
    { name: "West Ham", logo: "west ham.png", mp: 23, w: 9, d: 6, l: 8, gd: 2, pts: 33, form: "WLDWL" },
    { name: "Crystal Palace", logo: "crystal palace.jpeg", mp: 23, w: 8, d: 7, l: 8, gd: -2, pts: 31, form: "LDDWL" },
    { name: "Brentford", logo: "brentford.png", mp: 23, w: 8, d: 7, l: 8, gd: 3, pts: 31, form: "LDWLD" },
    { name: "Fulham", logo: "fulham.jpeg", mp: 23, w: 8, d: 5, l: 10, gd: -2, pts: 29, form: "WLLDW" },
    { name: "Everton", logo: "everton.jpeg", mp: 23, w: 7, d: 4, l: 12, gd: -8, pts: 25, form: "LWDWL" },
    { name: "Southampton", logo: "southampton.png", mp: 23, w: 6, d: 3, l: 14, gd: -20, pts: 21, form: "LLWDL" }
];

const table = document.getElementById("league-table");

teams.sort((a, b) =>
    b.pts - a.pts || b.gd - a.gd || b.w - a.w
);

teams.forEach((team, index) => {
    const position = index + 1;

    let qualification = "";

    if (position <= 4) qualification = "champions";
    else if (position === 5) qualification = "europa";
    else if (position === 6) qualification = "conference";
    else if (position >= 18) qualification = "relegation";

    const formHTML = team.form.replace(/\s/g, "").slice(-5).split("")
        .map(result => {
            const styles = {
                W: ["win", "W"],
                D: ["draw", "D"],
                L: ["loss", "L"]
            };

            const [className, label] = styles[result];

            return `<span class="form-dot ${className}" title="${
                result === "W" ? "Win" : result === "D" ? "Draw" : "Loss"
            }">${label}</span>`;
        }).join("");

    const row = document.createElement("tr");
    row.className = qualification;

    row.innerHTML = `
        <td class="position">${position}</td>

        <td>
            <div class="club-cell">
                <img class="club-icon"
                     src="${team.logo}"
                     alt="${team.name}"
                     onerror="this.style.visibility='hidden'">
                <span class="club-name">${team.name}</span>
            </div>
        </td>

        <td>${team.mp}</td>
        <td>${team.w}</td>
        <td>${team.d}</td>
        <td>${team.l}</td>
        <td>${team.gd > 0 ? "+" : ""}${team.gd}</td>
        <td class="points">${team.pts}</td>
        <td>
            <div class="form">${formHTML}</div>
        </td>
    `;

    table.appendChild(row);
});
