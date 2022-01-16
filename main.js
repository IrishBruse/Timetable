const timetableText = `Monday

Activity	Type	Start	End	Duration	Weeks	Room	Staff
KSOFG2 DATABASE MANAGEMENT Gr A/P	P Onsite	9:00	11:00	2:00	21-32, 35	0483 CR2	Naomi Regan-Hurley
KSOFG2 ADVANCED PROCEDURAL PROGRAMMING Gr C/P	P Onsite	9:00	11:00	2:00	21-32, 35	0481 CR4	Martin Hynes
KSOFG2 MOBILE APPLICATIONS DEVELOPMENT/L	L Onsite	11:00	12:00	1:00	21-32, 35	0995	Martin Kenirons
KSOFG2 APPLIED NETWORKING TECHNOLOGY 2/L	L Onsite	12:00	13:00	1:00	21-32, 35	0996	Deirdre O'Donovan
KSOFG2 DATA STRUCTURES AND ALGORITHMS Gr C	P Onsite	14:00	15:00	1:00	21-32, 35	0481 CR4	John Healy
KSOFG2 DATABASE MANAGEMENT Gr D/P	P Onsite	14:00	16:00	2:00	21-32, 35	0484 CR1	Naomi Regan-Hurley
KSOFG2 MOBILE APPLICATIONS DEVELOPMENT Gr A/P	P Onsite	14:00	16:00	2:00	21-32, 35	0480 CR7	Martin Kenirons
KSOFG1 PEER ASSISTED STUDY SESSION Gr C,D/PASS	Ol	16:00	17:00	1:00	21-32, 35
KSOFG1 PEER ASSISTED STUDY SESSION Gr A+B/PASS	Ol	16:00	17:00	1:00	21-32, 35
Tuesday

Activity	Type	Start	End	Duration	Weeks	Room	Staff
KSOFG2 DATA STRUCTURES AND ALGORITHMS/L	L Onsite	9:00	10:00	1:00	21-32, 35	0995	John Healy
KCDMG2/KSOFG2 PROJECT MANAGEMENT/L	L Onsite	11:00	13:00	2:00	21-32, 35	0903	Joe Corr
KSOFG2 APPLIED NETWORKING TECHNOLOGY 2/L	L Onsite	13:00	14:00	1:00	21-32, 35	0995	Deirdre O'Donovan
KSOFG2 PROJECT MANAGEMENT Gr C/P	P Onsite	15:00	16:00	1:00	21-32, 35	0484 CR1	Joe Corr
KSOFG2 PROJECT MANAGEMENT Gr A/P	P Onsite	16:00	17:00	1:00	21-32, 35	0481 CR4	Joe Corr
KSOFG2 MOBILE APPLICATIONS DEVELOPMENT Gr B/P	P Onsite	16:00	18:00	2:00	21-32, 35	0484 CR1	Martin Kenirons
Wednesday

Activity	Type	Start	End	Duration	Weeks	Room	Staff
KSOFG2 DATA STRUCTURES AND ALGORITHMS Gr B	P Onsite	9:00	10:00	1:00	21-32, 35	0481 CR4	John Healy
KSOFG2 MOBILE APPLICATIONS DEVELOPMENT Gr D/P	P Onsite	9:00	11:00	2:00	21-32, 35	0484 CR1	Martin Kenirons
KSOFG2 APPLIED NETWORKING TECHNOLOGY 2 Gr C/P	P Onsite	9:00	11:00	2:00	21-32, 35	0483 CR2	Deirdre O'Donovan
KSOFG2 ADVANCED PROCEDURAL PROGRAMMING Gr B/P	P Onsite	10:00	12:00	2:00	21-32, 35	0481 CR4	Martin Hynes
KSOFG2 APPLIED NETWORKING TECHNOLOGY 2 Gr D/P	P Onsite	11:00	13:00	2:00	21-32, 35	0479 CR8	Deirdre O'Donovan
KSOFG2 APPLIED NETWORKING TECHNOLOGY 2 Gr A/P	P Onsite	11:00	13:00	2:00	21-32, 35	0483 CR2	Dominic Carr
KSOFG2 PROJECT MANAGEMENT Gr D/P	P Onsite	14:00	15:00	1:00	21-32, 35	0481 CR4	Joe Corr
KSOFG2 MOBILE APPLICATIONS DEVELOPMENT Gr C/P	P Onsite	14:00	16:00	2:00	21-32, 35	0484 CR1	Martin Kenirons
KSOFG2 DATA STRUCTURES AND ALGORITHMS Gr A/P	P Onsite	15:00	16:00	1:00	21-32, 35	0481 CR4	John Healy
KSOFG2 PROJECT MANAGEMENT Gr B/P	P Onsite	15:00	16:00	1:00	21-32, 35	0483 CR2	Joe Corr
Thursday

Activity	Type	Start	End	Duration	Weeks	Room	Staff
KSOFG2 ADVANCED PROCEDURAL PROGRAMMING/L	L Onsite	10:00	11:00	1:00	21-32, 35	0996	Martin Hynes
KSOFG2 DATA STRUCTURES AND ALGORITHMS/L	L Onsite	11:00	12:00	1:00	21-32, 35	0995	John Healy
KSOFG2 ADVANCED PROCEDURAL PROGRAMMING Gr D/P	P Onsite	12:00	14:00	2:00	21-32, 35	0484 CR1	Martin Hynes
KSOFG2 DATABASE MANAGEMENT Gr B/P	P Onsite	13:00	15:00	2:00	21-32, 35	0479 CR8	Naomi Regan-Hurley
KSOFG2 MOBILE APPLICATIONS DEVELOPMENT/L	L Onsite	15:00	16:00	1:00	21-32, 35	0995	Martin Kenirons
KSOFG2 ADVANCED PROCEDURAL PROGRAMMING Gr A/P/01	P Onsite	16:00	18:00	2:00	21-32, 35	0484 CR1	Martin Hynes
Friday

Activity	Type	Start	End	Duration	Weeks	Room	Staff
KCDMG2/KSOFG2 DATABASE MANAGEMENT/L	L Onsite	9:00	11:00	2:00	21-32, 35	0903	Naomi Regan-Hurley
KSOFG2 DATA STRUCTURES AND ALGORITHMS Gr D	P Onsite	11:00	12:00	1:00	21-32, 35	0482 CR3	John Healy
KSOFG2 APPLIED NETWORKING TECHNOLOGY 2 Gr B/P	P Onsite	11:00	13:00	2:00	21-32, 35	0483 CR2	Deirdre O'Donovan
KSOFG2 DATABASE MANAGEMENT Gr C/P   P Onsite	11:00	13:00	2:00	21-32, 35	0481 CR4	Naomi Regan-Hurley
`;

const PrintMode = false;
const Use24Hour = false;
const groups = ["A", "B", "C", "D"]
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

function RenderGroup(SelectedGroup) {
    var body = document.getElementById("root");
    var groupTimetable = document.createElement("div");
    groupTimetable.classList.add("Group");
    groupTimetable.classList.add(groups[SelectedGroup]);

    body.appendChild(groupTimetable);

    var hours = document.createElement("div");
    hours.className = "moduleRow";

    for (let i = 9; i <= 18; i++) {
        var div = document.createElement("div");
        var time = document.createElement("h2");
        time.className = "time";
        time.classList.add("text")
        if (Use24Hour) {
            time.textContent = i + ":00";
        } else {
            time.textContent = (i > 12 ? i - 12 : i) + ":00" + (i > 12 ? " pm" : " am");
        }
        div.appendChild(time)
        hours.appendChild(div)
    }

    groupTimetable.appendChild(hours);

    var lines = timetableText.split('\n');
    var daysModules;
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.length < 3 || line.startsWith("Activity")) {
            continue;
        }

        if (days.includes(line)) {
            var title = document.createElement("h3");
            title.className = "dayTitle";
            title.innerText = line;
            groupTimetable.appendChild(title);

            daysModules = document.createElement("div");
            daysModules.className = "moduleRow"
            groupTimetable.appendChild(daysModules);
            continue;
        }
        var data = line.split('\t');

        var group = toGroup(data[0]);

        if (group != "All") {
            if (group.includes(groups[SelectedGroup]) == false) {
                continue;
            }
        }

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
        element.textContent = data[6];
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
        element.textContent = data[7];
        element.className = "text"
        footer.appendChild(element);

        // Module
        var module = document.createElement("div");
        module.className = "module";

        module.style.gridColumnStart = start;
        module.style.gridColumnEnd = end;

        if (PrintMode) {
            module.classList.add("print");
        } else {
            module.classList.add(mod.color);
        }

        module.appendChild(header);
        module.appendChild(middle);
        module.appendChild(footer);
        daysModules.appendChild(module);
    }
}

function toModule(name) {
    if (name.includes("DATABASE MANAGEMENT")) {
        return { name: "Database Management", color: "yellow" }
    } else if (name.includes("ADVANCED PROCEDURAL PROGRAMMING")) {
        return { name: "Advanced Procedural", color: "orange" };
    } else if (name.includes("MOBILE APPLICATIONS DEVELOPMENT")) {
        return { name: "Mobile App Development", color: "green" };
    } else if (name.includes("APPLIED NETWORKING TECHNOLOGY 2")) {
        return { name: "Network Tech 2", color: "blue" };
    } else if (name.includes("DATA STRUCTURES AND ALGORITHMS")) {
        return { name: "Data & Algorithms", color: "red" };
    } else if (name.includes("PROJECT MANAGEMENT")) {
        return { name: "Project Management", color: "pink" };
    } else if (name.includes("PEER ASSISTED STUDY SESSION")) {
        return { name: "Study Session", color: "gray" };
    } else {
        console.error("toModuleName: " + name);
    }
}

function toGroup(group) {
    var start = group.indexOf("Gr ");
    var end = group.indexOf("/");

    if (end == -1) {
        end = group.length;
    }

    if (start == -1) {
        return "All";
    }

    var group = group.substring(start + 3, end);
    group = group.replace(",", "").replace("+", "");

    return group;
}

function toType(type) {
    switch (type[0]) {
        case "O":
            return "(Online)"
        case "P":
            return "(Practical)"
        case "L":
            return "(Lecture)"

        default:
            return "ERROR: " + type;
    }

}

for (let index = 0; index < groups.length; index++) {
    const g = groups[index];

    RenderGroup(index)

    const button = document.createElement('button');
    button.className = "download";

    const a = document.createElement('a');
    a.className = "Group" + g + "Download"
    a.innerText = "Group " + g
    a.setAttribute('download', "Group " + g + '.png');


    button.appendChild(a);

    document.querySelector(".Group." + g).insertBefore(button, document.querySelector(".Group." + g).firstChild)

    setTimeout(() => {
        html2canvas(document.querySelector(".Group." + g))
            .then(canvas => {
                canvas.style.display = 'none';
                document.body.appendChild(canvas);

                return canvas;
            })
            .then(canvas => {
                const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
                document.querySelector(".Group" + g + "Download").setAttribute('href', image);
                document.querySelector(".Group" + g + "Download").parentElement.style.backgroundColor = "#67e672";

            });
    }, 1);
}
