import * as XLSX from "xlsx";
import * as fs from "fs";

const DAYS_OF_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

let timetables = fetch;

[
    "./A.xlsx",
    "./B.xlsx",
    "./C.xlsx",
].forEach(parseXLSX);

function renameModule(name)
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

function parseXLSX(file)
{
    let data = fs.readFileSync(file)
    let spreadsheet = XLSX.read(data);
    let sheet = spreadsheet.Sheets[spreadsheet.SheetNames[0]];
    let table = XLSX.utils.sheet_to_json(sheet)

    table.sort((a, b) =>
    {
        return DAYS_OF_WEEK.indexOf(a.Day) - DAYS_OF_WEEK.indexOf(b.Day) ||
            parseInt(a["Start Time"].split(":")[0]) - parseInt(b["Start Time"].split(":")[0])
    })

    table.map(mod =>
    {
        delete mod["Start Time"]
        delete mod["End Time"]
        delete mod["Duration"]
        delete mod["Weeks"]

        let title = mod.Module;
        title = title.substring(title.indexOf(' ') + 1);
        let newModule = renameModule(title);
        mod.Module = newModule.name;
        mod.Color = newModule.color;

        let moduleInfo = mod.Description.split(title)[1].trim();
        let moduleType = moduleInfo.split("/")[1]// L or P or T

        switch (moduleType)
        {
            case "L":
                mod.Type = "Lecture"
                break;

            case "P":
                mod.Type = "Practical"
                break;

            case "T":
                mod.Type = "Tutorial"
                break;

            default:
                console.log("Unkown module type " + moduleType);
                break;
        }

        delete mod["Description"]

        let locationParts = mod.Location.split(" ")

        mod.Location = "" + (Number.parseInt((locationParts[0])));

        if (locationParts.length == 2)
        {
            mod.Location += " " + locationParts[1];
        }

        return mod
    })

    timetables.push(table);
}


fs.writeFileSync("timetables.json", JSON.stringify(timetables, null, 4));
