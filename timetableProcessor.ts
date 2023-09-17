import * as XLSX from "xlsx";
import * as fs from "fs";

const DAYS_OF_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

let timetables = [];

const moduleMap = {
    "RESEARCH METHODS IN COMPUTING AND IT": {
        Module: "Research Methods in IT",
        Color: "yellow",
    },
    "APPLIED PROJECT AND MINOR DISSERTATION": {
        Module: "Applied Project",
        Color: "orange",
    },
    "EMERGING TECHNOLOGIES": {
        Module: "Emerging Technologies",
        Color: "green",
    },
    "DISTRIBUTED SYSTEMS": {
        Module: "Distributed Systems",
        Color: "red",
    },
    "MOBILE APPLICATIONS DEVELOPMENT 3": {
        Module: "Mobile App Dev 3",
        Color: "blue",
    },
    "ADVANCED OBJECT ORIENTED SOFTWARE DEVELOPMENT": {
        Module: "Advanced OOP",
        Color: "pink",
    },
};

const typeMap = {
    P: "(Practical)",
    L: "(Lecture)",
    T: "(Tutorial)",
    S: "(Seminar)",
    OL: "(Online)",
    Lab: "(Lab)",
};

type ExcelModule = {
    Module: string;
    Description: string;
    "Start Time": string;
    Day: string;
    Time: string;
    Duration: string;
    Weeks: string;
    Location: string;
    Staff: string;
};

type Module = {
    Staff: string;
    Module: string;
    Day: string;
    Time: string;
    Color: string;
    Type: string;
    Location: string;
};

function parseXLSX(groupName) {
    let data = fs.readFileSync("Timetable.xlsx");
    let spreadsheet = XLSX.read(data);
    let sheet = spreadsheet.Sheets[spreadsheet.SheetNames[0]];
    let table: ExcelModule[] = XLSX.utils.sheet_to_json(sheet);

    table.sort((a, b) => {
        return (
            DAYS_OF_WEEK.indexOf(a.Day) - DAYS_OF_WEEK.indexOf(b.Day) ||
            parseInt(a["Start Time"].split(":")[0]) -
                parseInt(b["Start Time"].split(":")[0])
        );
    });

    let formattedModules: Module[] = [];

    for (const module of table) {
        let group = module.Description.split(" ")[1];
        if (group == groupName || !["A", "B"].includes(group)) {
            formattedModules.push(ConvertModule(module));
        }
    }

    timetables.push(formattedModules);
}

function ConvertModule(module: ExcelModule): Module {
    let parsedDescription = convertDescription(module.Description);
    return {
        Staff: convertStaff(module.Staff),
        Day: module.Day,
        Time: module.Time,
        Module: parsedDescription.Module,
        Color: parsedDescription.Color,
        Type: parsedDescription.Type,
        Location: convertLocation(module.Location),
    } as Module;
}

function convertStaff(value: string): string {
    let parts = value.split(", ");

    return parts[1] + " " + parts[0];
}

function convertLocation(value: string): string {
    let location = value.split(" ")[1];
    return location;
}

function convertDescription(value: string): {
    Module: string;
    Color: string;
    Type: string;
} {
    let slashSplit = value.split("/");

    let splits = slashSplit[0].split(" ");

    let key = splits
        .slice(splits[1] == "A" || splits[1] == "B" ? 2 : 1)
        .join(" ");

    return { ...moduleMap[key], Type: typeMap[slashSplit[1]] };
}

parseXLSX("A");
parseXLSX("B");

fs.writeFileSync("timetables.json", JSON.stringify(timetables, null, 4));
