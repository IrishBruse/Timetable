import * as fs from "fs";
import * as XLSX from "xlsx";

const DAYS_OF_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

let timetables = [];

const moduleMap = {
    "Theory of Algorithms": {
        Module: "Theory of Algorithms",
        Color: "yellow",
    },
    "Artificial Intelligence": {
        Module: "Artificial Intelligence",
        Color: "orange",
    },
    "Software Eng": {
        Module: "Software Eng",
        Color: "green",
    },
    "Gesture Based UI Dev": {
        Module: "Gesture Based UI",
        Color: "blue",
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

    console.log();
    console.log(groupName);

    for (const module of table) {
        let group = module.Description.split(/ |\//).splice(1);

        if (group.includes(groupName) || group[group.length - 1] == "L") {
            console.log(group);
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
    return value
        .slice(3)
        .replace(" Computing Practical Lab", "")
        .replace(" Science Computer Lab", "")
        .replace("Computer Lab ", "CR");
}

function convertDescription(value: string): {
    Module: string;
    Color: string;
    Type: string;
} {
    let slashSplit = value.split("/")[0].split("Gr");
    let splits = slashSplit[0].trim().split(" ").splice(1);
    let group = slashSplit[1];

    if (!group && (splits[0] == "A" || splits[0] == "B")) {
        group = splits[0];
        splits = splits.splice(1);
    }

    const key = splits.join(" ");
    let test = moduleMap[key];

    if (!test) {
        console.log("\nModule not found\n" + key);
        test = { Module: key, Color: "ERROR" };
    }

    return { ...test, Type: typeMap[value.split("/")[1]] };
}

parseXLSX("A");
parseXLSX("B");

fs.writeFileSync("timetables.json", JSON.stringify(timetables, null, 4));
