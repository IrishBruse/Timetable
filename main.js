// GA_KSOAG_H08

const DAYS_OF_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

var startTime;
var endTime;

function CreateTimetableHtml(data, letter, isMobile) {
    let body = document.getElementById("root");
    let group = document.createElement("div");

    let timetable = document.createElement("div");
    timetable.classList.add("Timetable");

    addTime(timetable);
    addColumnTemplates(timetable);
    addRowTemplates(timetable);

    for (const day of DAYS_OF_WEEK) {
        addDayHeader(day, timetable);

        for (const mod of data.filter((d) => day == d.Day)) {
            let node = document.createElement("div");
            node.classList.add("Module");

            let times = mod.Time.split("-");
            times[0] = Number.parseInt(times[0]) - startTime + 1;
            times[1] = Number.parseInt(times[1]) - startTime + 1;
            node.style.gridColumn = times.join(" / ");

            addModule(node, mod);

            timetable.appendChild(node);
        }
    }

    addGroupTitle(letter, group);

    group.appendChild(timetable);
    if (isMobile) {
        group.classList.add("Mobile");
    }

    // group.id = letter;
    group.classList.add("Group");

    body.appendChild(group);

    setTimeout(
        html2canvas(group, {
            onrendered: function (canvas) {
                var tempcanvas = document.createElement("canvas");
                tempcanvas.width = group.clientWidth;
                tempcanvas.height = group.clientHeight;
                var context = tempcanvas.getContext("2d");
                context.drawImage(
                    canvas,
                    0,
                    0,
                    tempcanvas.width,
                    tempcanvas.height,
                    0,
                    0,
                    tempcanvas.width,
                    tempcanvas.height
                );
                var link = document.createElement("a");
                link.href = tempcanvas.toDataURL("image/png"); //function blocks CORS
                link.download =
                    (isMobile ? "Mobile-" : "") + "Group " + letter + ".png";
                link.click();
            },
        }),
        1
    );
}

function addDayHeader(day, timetable) {
    let node = document.createElement("h2");
    node.classList.add("text-center", "day-title");
    node.textContent = day;
    timetable.appendChild(node);
}

function addGroupTitle(letter, group) {
    let groupTitle = document.createElement("h1");
    groupTitle.textContent = "Group " + letter;
    groupTitle.classList.add("Title");
    group.appendChild(groupTitle);
}

function addModule(module, mod) {
    console.log(mod);
    module.classList.add(mod.Color);

    let headerContainer = document.createElement("div");
    let container = document.createElement("div");
    let footerContainer = document.createElement("div");
    let moduleName = document.createElement("h1");

    moduleName.textContent = mod.Module;
    moduleName.classList.add("moduleName");
    container.classList.add("container");
    headerContainer.classList.add("title-header");
    footerContainer.classList.add("title-header");
    footerContainer.innerText = mod.Staff;

    headerContainer.appendChild(h3(mod.Location));
    headerContainer.appendChild(h4(mod.Type));
    container.appendChild(moduleName);

    module.appendChild(headerContainer);
    module.appendChild(container);
    module.appendChild(footerContainer);
}

function h3(content, ...classes) {
    let node = document.createElement("h3");
    node.textContent = content;
    node.classList = classes;
    return node;
}
function h4(content, ...classes) {
    let node = document.createElement("h4");
    node.textContent = content;
    node.classList = classes;
    return node;
}

function addTime(group) {
    for (let i = startTime; i < endTime; i++) {
        var time = document.createElement("h2");
        time.textContent =
            (i > 12 ? i - 12 : i) + ":00" + (i >= 12 ? " pm" : " am");
        time.classList.add("text-center");
        group.appendChild(time);
    }
}

function addColumnTemplates(element) {
    let frs = "";
    for (let i = 0; i < endTime - startTime; i++) {
        frs += "1fr ";
    }

    element.style.gridTemplateColumns = frs;
}

function addRowTemplates(element) {
    let frs = "2rem "; // for the time row
    for (let i = 0; i < 5; i++) {
        if (i != 1) {
            frs += "2rem ";
            frs += "1fr ";
        } else {
            frs += "2rem ";
        }
    }

    element.style.gridTemplateRows = frs;
}

async function main() {
    let data = await fetch("./timetables.json");
    let timetables = await data.json();

    for (let i = 0; i < timetables.length; i++) {
        let groupLetter = String.fromCharCode(
            (i % timetables.length) + 97
        ).toUpperCase();

        if (groupLetter == "A") {
            startTime = 10;
            endTime = 18;
        } else {
            startTime = 9;
            endTime = 16;
        }

        if (groupLetter == "A") {
            CreateTimetableHtml(timetables[i], groupLetter, true);
        }

        CreateTimetableHtml(timetables[i], groupLetter, false);
    }
}

main();
