// GA_KSOAG_H08

const PrintMode = false;
const Use24Hour = false;
const days = ["Monday", "Tuesday", "Wednesday", "Thursday"]

const startTime = 9;
const endTime = 17;

let timetables = []

function toModule(name)
{
    if (name.includes("ADVANCED DATA CENTRIC WEB APPLICATIONS"))
    {
        return { name: "Adv D.C. Web Applications", color: "yellow" }
    }
    else if (name.includes("SOFTWARE TESTING"))
    {
        return { name: "Software Testing", color: "orange" };
    }
    else if (name.includes("GRAPH THEORY"))
    {
        return { name: "Graph Theory", color: "green" };
    }
    else if (name.includes("PROFESSIONAL PRACTICE IN IT"))
    {
        return { name: "Professional Practice in IT", color: "red" };
    }
    else if (name.includes("MOBILE APPLICATIONS DEVELOPMENT 2"))
    {
        return { name: "Mobile Applications Development 2", color: "blue" };
    }
    else if (name.includes("DATABASE MANAGEMENT SYSTEMS"))
    {
        return { name: "Database Management", color: "pink" };
    }
    else
    {
        console.error("toModule(" + name + ")");
        return { name: name, color: "pink" };
    }
}

function RenderGroup(groupIndex)
{
    var body = document.getElementById("root");
    var groupTimetable = document.createElement("div");
    groupTimetable.classList.add("Group");

    body.appendChild(groupTimetable);

    var hours = document.createElement("div");
    hours.className = "moduleRow";
    addColumnTemplates(hours)
    for (let i = startTime; i <= endTime; i++)
    {
        var div = document.createElement("div");
        var time = document.createElement("h2");
        time.className = "time";
        time.classList.add("text")
        if (Use24Hour)
        {
            time.textContent = i + ":00";
        }
        else
        {
            time.textContent = (i > 12 ? i - 12 : i) + ":00" + (i > 12 ? " pm" : " am");
        }
        div.appendChild(time)
        hours.appendChild(div)
    }

    groupTimetable.appendChild(hours);


    var modules = timetables[groupIndex];
    var daysModules;

    let lastDay = ""

    for (let i = 0; i < modules.length; i++)
    {
        var data = modules[i];
        console.log(data);

        if (lastDay != data.Day)
        {
            var title = document.createElement("h3");
            title.className = "dayTitle";
            title.innerText = data.Day;
            groupTimetable.appendChild(title);

            daysModules = document.createElement("div");
            daysModules.className = "moduleRow"
            addColumnTemplates(daysModules);

            groupTimetable.appendChild(daysModules);
        }

        var header = document.createElement("div");
        header.className = "moduleTop";

        var middle = document.createElement("div");
        middle.className = "moduleMiddle";

        var footer = document.createElement("div");
        footer.className = "moduleBottom";

        // Name
        var element = document.createElement("h3");
        var mod = toModule(data.Module);
        element.textContent = mod.name;
        element.className = "center";
        middle.appendChild(element);

        // Room
        element = document.createElement("h5");
        element.textContent = data.Location.split(" ")[0];
        element.className = "text"
        element.classList.add("flex-grow")
        header.appendChild(element);

        // Type
        element = document.createElement("h5");
        element.textContent = toType(data.Description.split("/")[1]);
        element.classList.add("text");
        element.classList.add("moduleType");
        header.appendChild(element);

        // Start
        var start = Number(data["Start Time"].split(":")[0]) - 8;
        var end = Number(data["End Time"].split(":")[0]) - 8;

        // Lecturer
        element = document.createElement("h5");
        element.textContent = data[8];
        element.className = "text"
        footer.appendChild(element);

        // Module
        let module = document.createElement("div");
        module.className = "module";

        module.style.gridColumnStart = start;
        module.style.gridColumnEnd = end;

        if (PrintMode)
        {
            module.classList.add("print");
        }
        else
        {
            module.classList.add(mod.color);
        }

        module.appendChild(header);
        module.appendChild(middle);
        module.appendChild(footer);
        daysModules.appendChild(module);

        lastDay = data.Day;
    }
}

function addColumnTemplates(element)
{
    let frs = ""
    for (let i = 0; i <= (endTime - startTime); i++)
    {
        frs += "1fr ";
    }
    element.style.gridTemplateColumns = frs;

}

function toGroup(group)
{
    var start = group.indexOf("Gr ");
    var end = group.indexOf("/");

    if (end == -1)
    {
        end = group.length;
    }

    if (start == -1)
    {
        return "All";
    }

    var group = group.substring(start + 3, end);
    group = group.replace(",", "").replace("+", "");

    return group;
}

function toType(type)
{
    switch (type)
    {
        case "P": return "(Practical)"
        case "L": return "(Lecture)"
        case "T": return "(Tutorial)"
        case "S": return "(Seminar)"
        case "OL": return "(Online)"
        case "Lab": return "(Lab)"
        default: return "(Lecture)";
    }
}

let i = 0;

function RenderAndSaveGroupTimetable(i)
{
    let root = document.querySelector("#root");
    html2canvas(document.getElementById("root").parentElement, {
        onrendered: function (canvas)
        {
            var tempcanvas = document.createElement('canvas');
            let body = document.querySelector("body")
            tempcanvas.width = body.clientWidth;
            tempcanvas.height = body.clientHeight;
            var context = tempcanvas.getContext('2d');
            context.drawImage(canvas, 0, 0, tempcanvas.width, tempcanvas.height, 0, 0, tempcanvas.width, tempcanvas.height);
            var link = document.createElement("a");
            link.href = tempcanvas.toDataURL('image/png');   //function blocks CORS
            link.download = "Group " + String.fromCharCode(((i % timetables.length) + 97)).toUpperCase() + ".png";
            link.click();
        }
    });
    document.querySelector("#Title").textContent = "Group " + String.fromCharCode(((i % timetables.length) + 97)).toUpperCase()
    root.innerHTML = ""
    RenderGroup(i % timetables.length)
}

async function main()
{
    let a = await fetch("./A.xlsx")
    await loadExcelFile(a)
    let b = await fetch("./B.xlsx")
    await loadExcelFile(b)
    let c = await fetch("./C.xlsx")
    await loadExcelFile(c)

    RenderAndSaveGroupTimetable(i)
    i++
    await wait(1000);
    RenderAndSaveGroupTimetable(i)
    i++
    await wait(1000);
    RenderAndSaveGroupTimetable(i)
    i++

}

const wait = (ms) =>
    new Promise((resolve, reject) =>
        setTimeout(() =>
        {
            resolve()
        }, ms)
    )

async function loadExcelFile(d)
{
    let data = await d.arrayBuffer();
    let spreadsheet = XLSX.read(data);
    let sheet = spreadsheet.Sheets[spreadsheet.SheetNames[0]];
    let table = XLSX.utils.sheet_to_json(sheet)

    table = table.sort((a, b) =>
    {
        return days.indexOf(a.Day) - days.indexOf(b.Day) ||
            parseInt(a["Start Time"].split(":")[0]) - parseInt(b["Start Time"].split(":")[0])
    })

    timetables.push(table);
}

main();
