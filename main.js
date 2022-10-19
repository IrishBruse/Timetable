// GA_ESOEG

const PrintMode = false;
const Use24Hour = false;
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

const startTime = 9;
const endTime = 16;

let timetables = []

function toModule(name)
{
    if (name.includes("DATA CENTRIC WEB APPLICATIONS"))
    {
        return { name: "Data Centric Web Applications", color: "yellow" }
    }
    else if (name.includes("GRAPHICS PROGRAMMING"))
    {
        return { name: "Graphics Programming", color: "orange" };
    }
    else if (name.includes("OPERATING SYSTEMS"))
    {
        return { name: "Operating Systems", color: "green" };
    }
    else if (name.includes("DATA REPRESENTATION AND QUERYING"))
    {
        return { name: "Data Rep And Querying", color: "blue" };
    }
    else if (name.includes("SOFTWARE QUALITY MANAGEMENT"))
    {
        return { name: "Software Quality Management", color: "red" };
    }
    else if (name.includes("OBJECT ORIENTED PROGRAMMING"))
    {
        return { name: "Object Oriented Programming", color: "pink" };
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
        element.textContent = data.Location;
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

document.body.onkeyup = function (e)
{
    const spacebar = 32;
    const enter = 13;

    if (e.keyCode == spacebar)
    {
        i++
        RenderAndSaveGroupTimetable(i)
    }

    if (e.keyCode == enter)
    {
        setTimeout(() => RenderAndSaveGroupTimetable(0), 1000);
        setTimeout(() => RenderAndSaveGroupTimetable(1), 2000);
        setTimeout(() => RenderAndSaveGroupTimetable(2), 3000);
    }
}

function RenderAndSaveGroupTimetable(i)
{
    html2canvas(document.getElementById("root").parentElement, {
        onrendered: function (canvas)
        {
            var tempcanvas = document.createElement('canvas');
            tempcanvas.width = 1920;
            tempcanvas.height = 1080;
            var context = tempcanvas.getContext('2d');
            context.drawImage(canvas, 0, 0, 1920, 1080, 0, 0, 1920, 1080);
            var link = document.createElement("a");
            link.href = tempcanvas.toDataURL('image/jpg');   //function blocks CORS
            link.download = "Group " + String.fromCharCode(((i % timetables.length) + 97)).toUpperCase();
            link.click();
        }
    });
    document.querySelector("#Title").textContent = "Group " + String.fromCharCode(((i % timetables.length) + 97)).toUpperCase()
    document.querySelector("#root").innerHTML = ""
    RenderGroup(i % timetables.length)
}

function readFile(e)
{
    const Days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

    let data = e.target.result
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

document.getElementById("test").addEventListener("change",
    (params) =>
    {
        document.getElementById("test").style.display = "none";

        for (const file of document.getElementById("test").files)
        {
            let reader = new FileReader();
            reader.addEventListener('load', readFile);
            reader.readAsArrayBuffer(file);
        }
    }
)
