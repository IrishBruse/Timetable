// https://timetable.gmit.ie/SWS2223/(S(muzwlv55l2uzryvm4ryohl55))/showtimetable.aspx
const groupsTimetableText = [
    `Monday

Activity,Type,Start,End,Duration,Weeks,Room,Staff
KSOFG3 DATA CENTRIC WEB APPLICATIONS Gr A/P,P,12:00,13:00,1:00,"4-9, 11-17",0484 CR1,Gerard Harrison
KSOFG3 GRAPHICS PROGRAMMING/L,L,13:00,14:00,1:00,"4-9, 11-17",0996,Brian Mc Ginley
KSOFG3 OPERATING SYSTEMS/L,L,14:00,15:00,1:00,"4-9, 11-17",0996,Martin Hynes
Tuesday

Activity,Type,Start,End,Duration,Weeks,Room,Staff
KSOFG3 GRAPHICS PROGRAMMING Gr A/P,P,9:00,11:00,2:00,"4-9, 11-17",0484 CR1,Brian Mc Ginley
KSOFG3 DATA REPRESENTATION AND QUERYING Gr A/P,P,11:00,13:00,2:00,"4-9, 11-17",0484 CR1,Martin Kenirons
KSOFG3 GRAPHICS PROGRAMMING/L,L,15:00,16:00,1:00,"4-9, 11-17",0941,Brian Mc Ginley
KCDMG3/KSOFG3 SOFTWARE QUALITY MANAGEMENT/L,L,16:00,17:00,1:00,"4-9, 11-17",0941,Dominic Carr
Wednesday

Activity,Type,Start,End,Duration,Weeks,Room,Staff
KSOFG3 OPERATING SYSTEMS Gr A/T,T,11:00,12:00,1:00,"4-9, 11-17",0368,Dominic Carr
KSOFG3 DATA CENTRIC WEB APPLICATIONS/L,L,12:00,13:00,1:00,"4-9, 11-17",0995,Gerard Harrison
KSOFG3 OBJECT ORIENTED PROGRAMMING/L,L,14:00,16:00,2:00,"4-9, 11-17",0903,John Healy
KCDMG3/KSOFG3 SOFTWARE QUALITY MANAGEMENT/L,L,16:00,17:00,1:00,"4-9, 11-17",0995,Dominic Carr
Thursday

Activity,Type,Start,End,Duration,Weeks,Room,Staff
KSOFG3 OPERATING SYSTEMS/L,L,10:00,11:00,1:00,"4-9, 11-17",0996,Martin Hynes
KSOFG3 OBJECT ORIENTED PROGRAMMING/L,L,12:00,13:00,1:00,"4-9, 11-17",0996,John Healy
KCDMG3/KSOFG3 SOFTWARE QUALITY MANAGEMENT/L,L,14:00,15:00,1:00,"4-9, 11-17",0903,Dominic Carr
KSOFG3/KCDMG4 DATA REPRESENTATION AND QUERYING/L,L,15:00,16:00,1:00,"4-9, 11-17",0941,Martin Kenirons
Friday

Activity,Type,Start,End,Duration,Weeks,Room,Staff
KSOFG3 DATA CENTRIC WEB APPLICATIONS Gr A/P,P,9:00,11:00,2:00,"4-9, 11-17",0484 CR1,Gerard Harrison
KSOFG3 OPERATING SYSTEMS Gr A/P,P,11:00,13:00,2:00,"4-9, 11-17",0483 CR2,Martin Hynes
`, `
Monday

Activity,Type,Start,End,Duration,Weeks,Room,Staff
KSOFG3 GRAPHICS PROGRAMMING/L,L,13:00,14:00,1:00,"4-9, 11-17",0996,Brian Mc Ginley
KSOFG3 OPERATING SYSTEMS/L,L,14:00,15:00,1:00,"4-9, 11-17",0996,Martin Hynes
Tuesday

Activity,Type,Start,End,Duration,Weeks,Room,Staff
KSOFG3 DATA CENTRIC WEB APPLICATIONS Gr B/P,P,9:00,11:00,2:00,"4-9, 11-17",0480 CR7,Gerard Harrison
KSOFG3 OPERATING SYSTEMS 1 Gr B/P,P,11:00,13:00,2:00,"4-9, 11-17",0479 CR8,Martin Hynes
KSOFG3 GRAPHICS PROGRAMMING/L,L,15:00,16:00,1:00,"4-9, 11-17",0941,Brian Mc Ginley
KCDMG3/KSOFG3 SOFTWARE QUALITY MANAGEMENT/L,L,16:00,17:00,1:00,"4-9, 11-17",0941,Dominic Carr
Wednesday

Activity,Type,Start,End,Duration,Weeks,Room,Staff
KSOFG3 OPERATING SYSTEMS Gr B/T,T,9:00,10:00,1:00,"4-9, 11-17",PF04,Dominic Carr
KSOFG3 DATA CENTRIC WEB APPLICATIONS Gr B/P,P,11:00,12:00,1:00,"4-9, 11-17",0436 CR5,Gerard Harrison
KSOFG3 DATA CENTRIC WEB APPLICATIONS/L,L,12:00,13:00,1:00,"4-9, 11-17",0995,Gerard Harrison
KSOFG3 OBJECT ORIENTED PROGRAMMING/L,L,14:00,16:00,2:00,"4-9, 11-17",0903,John Healy
KCDMG3/KSOFG3 SOFTWARE QUALITY MANAGEMENT/L,L,16:00,17:00,1:00,"4-9, 11-17",0995,Dominic Carr
Thursday

Activity,Type,Start,End,Duration,Weeks,Room,Staff
KSOFG3 OPERATING SYSTEMS/L,L,10:00,11:00,1:00,"4-9, 11-17",0996,Martin Hynes
KSOFG3 OBJECT ORIENTED PROGRAMMING/L,L,12:00,13:00,1:00,"4-9, 11-17",0996,John Healy
KCDMG3/KSOFG3 SOFTWARE QUALITY MANAGEMENT/L,L,14:00,15:00,1:00,"4-9, 11-17",0903,Dominic Carr
KSOFG3/KCDMG4 DATA REPRESENTATION AND QUERYING/L,L,15:00,16:00,1:00,"4-9, 11-17",0941,Martin Kenirons
Friday

Activity,Type,Start,End,Duration,Weeks,Room,Staff
KSOFG3 GRAPHICS PROGRAMMING Gr B/P,P,9:00,11:00,2:00,"4-9, 11-17",0483 CR2,Brian Mc Ginley
KSOFG3 DATA REPRESENTATION AND QUERYING Gr B/P,P,11:00,13:00,2:00,"4-9, 11-17",0480 CR7,Martin Kenirons
`, `
Monday

Activity,Type,Start,End,Duration,Weeks,Room,Staff
KSOFG3 DATA CENTRIC WEB APPLICATIONS Gr C/P,P,10:00,11:00,1:00,"4-9, 11-17",0436 CR5,Gerard Harrison
KSOFG3 OPERATING SYSTEMS Gr C/T,T,11:00,12:00,1:00,"4-9, 11-17",0156,Dominic Carr
KSOFG3 GRAPHICS PROGRAMMING/L,L,13:00,14:00,1:00,"4-9, 11-17",0996,Brian Mc Ginley
KSOFG3 OPERATING SYSTEMS/L,L,14:00,15:00,1:00,"4-9, 11-17",0996,Martin Hynes
Tuesday

Activity,Type,Start,End,Duration,Weeks,Room,Staff
KSOFG3 OPERATING SYSTEMS 1 Gr C/P,P,9:00,11:00,2:00,"4-9, 11-17",0436 CR5,Dominic Carr
KSOFG3 GRAPHICS PROGRAMMING Gr C/P,P,11:00,13:00,2:00,"4-9, 11-17",0480 CR7,Brian Mc Ginley
KSOFG3 GRAPHICS PROGRAMMING/L,L,15:00,16:00,1:00,"4-9, 11-17",0941,Brian Mc Ginley
KCDMG3/KSOFG3 SOFTWARE QUALITY MANAGEMENT/L,L,16:00,17:00,1:00,"4-9, 11-17",0941,Dominic Carr
Wednesday

Activity,Type,Start,End,Duration,Weeks,Room,Staff
KSOFG3 DATA CENTRIC WEB APPLICATIONS Gr C/P,P,9:00,11:00,2:00,"4-9, 11-17",0436 CR5,Gerard Harrison
KSOFG3 DATA CENTRIC WEB APPLICATIONS/L,L,12:00,13:00,1:00,"4-9, 11-17",0995,Gerard Harrison
KSOFG3 OBJECT ORIENTED PROGRAMMING/L,L,14:00,16:00,2:00,"4-9, 11-17",0903,John Healy
KCDMG3/KSOFG3 SOFTWARE QUALITY MANAGEMENT/L,L,16:00,17:00,1:00,"4-9, 11-17",0995,Dominic Carr
Thursday

Activity,Type,Start,End,Duration,Weeks,Room,Staff
KSOFG3 OPERATING SYSTEMS/L,L,10:00,11:00,1:00,"4-9, 11-17",0996,Martin Hynes
KSOFG3 OBJECT ORIENTED PROGRAMMING/L,L,12:00,13:00,1:00,"4-9, 11-17",0996,John Healy
KCDMG3/KSOFG3 SOFTWARE QUALITY MANAGEMENT/L,L,14:00,15:00,1:00,"4-9, 11-17",0903,Dominic Carr
KSOFG3/KCDMG4 DATA REPRESENTATION AND QUERYING/L,L,15:00,16:00,1:00,"4-9, 11-17",0941,Martin Kenirons
Friday

Activity,Type,Start,End,Duration,Weeks,Room,Staff
KSOFG3 DATA REPRESENTATION AND QUERYING Gr C/P,P,9:00,11:00,2:00,"4-9, 11-17",0370 Science Computer Lab,Martin Kenirons`
];

const PrintMode = false;
const Use24Hour = false;
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

const startTime = 9;
const endTime = 16;

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

function RenderGroup(SelectedGroup)
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
        } else
        {
            time.textContent = (i > 12 ? i - 12 : i) + ":00" + (i > 12 ? " pm" : " am");
        }
        div.appendChild(time)
        hours.appendChild(div)
    }

    groupTimetable.appendChild(hours);

    var lines = groupsTimetableText[SelectedGroup].split('\n');
    var daysModules;
    for (let i = 0; i < lines.length; i++)
    {
        const line = lines[i];

        if (line.length < 3 || line.startsWith("Activity"))
        {
            continue;
        }

        if (days.includes(line))
        {
            var title = document.createElement("h3");
            title.className = "dayTitle";
            title.innerText = line;
            groupTimetable.appendChild(title);

            daysModules = document.createElement("div");
            daysModules.className = "moduleRow"
            addColumnTemplates(daysModules);

            groupTimetable.appendChild(daysModules);
            continue;
        }
        var data = line.split(',');
        console.log(data);

        var header = document.createElement("div");
        header.className = "moduleTop";

        var middle = document.createElement("div");
        middle.className = "moduleMiddle";

        var footer = document.createElement("div");
        footer.className = "moduleBottom";

        // Name
        var element = document.createElement("h3");
        var mod = toModule(data[0]);
        element.textContent = mod.name;
        element.className = "center";
        middle.appendChild(element);

        // Room
        element = document.createElement("h5");
        element.textContent = data[7];
        element.className = "text"
        element.classList.add("flex-grow")
        header.appendChild(element);

        // Type
        element = document.createElement("h5");
        element.textContent = toType(data[1]);
        element.classList.add("text");
        element.classList.add("moduleType");
        header.appendChild(element);

        // Start
        var start = Number(data[2].split(":")[0]) - 8;
        var end = Number(data[3].split(":")[0]) - 8;

        // Lecturer
        element = document.createElement("h5");
        element.textContent = data[8];
        element.className = "text"
        footer.appendChild(element);

        // Module
        var module = document.createElement("div");
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
    switch (type[0])
    {
        case "P": return "(Practical)"
        case "L": return "(Lecture)"
        case "T": return "(Tutorial)"
        case "S": return "(Seminar)"
        case "OL": return "(Online)"
        case "Lab": return "(Lab)"
        default: return "(" + type + ")";
    }
}

let i = 0;

Test(i);

document.body.onkeyup = function (e)
{
    if (e.keyCode == 32)
    {
        i++
        Test(i)
    }
}

function Test(i)
{
    document.querySelector("#Title").textContent = "Group " + String.fromCharCode(((i % groupsTimetableText.length) + 97)).toUpperCase()
    document.querySelector("#root").innerHTML = ""
    RenderGroup(i % groupsTimetableText.length)
}
