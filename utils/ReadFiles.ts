import fs from 'fs';
import { parse } from 'csv-parse/sync';
import * as XLSX from 'xlsx';

export default class ReadFiles {

    readJsonFile(filePath: string): any {
        // const fileData = fs.readFileSync('E:/PWLearning/Batch8PM/testdata/PlaceOrder.json', 'utf-8');
        // const jsonData = JSON.parse(fileData);
        // return jsonData;
        return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }

    readCsvFile(filePath: string): any {
        // const fileData = fs.readFileSync('E:/PWLearning/Batch8PM/testdata/PlaceOrder.csv', 'utf-8');
        //  return parse(fileData,
        //     { columns: true, skip_empty_lines: true }
        // );

        return parse(fs.readFileSync(filePath, 'utf-8'),
            { columns: true, skip_empty_lines: true }
        );
    }

    readExcelFile(filePath: string): any {
        // const xlworkbook = XLSX.readFile(filePath);
        // const sheets = xlworkbook.SheetNames;
        // const sheets1Name = sheets[0];
        // const sheet1 = xlworkbook.Sheets[sheets1Name];
        // const sheet1Data = XLSX.utils.sheet_to_json(sheet1);
        // return sheet1Data;

        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        return XLSX.utils.sheet_to_json(worksheet);
    }



}


// const rf = new ReadFiles();

// const jsonData = rf.readJsonFile('E:/PWLearning/Batch8PM/testdata/PlaceOrder.json');
// console.log(jsonData);
// for (const { prodName, country } of jsonData) {
//     console.log(`Product Name is :: ${prodName} and country is :: ${country}`);
// }


// const csvData = rf.readCsvFile('E:/PWLearning/Batch8PM/testdata/PlaceOrder.csv');

// console.log(csvData);

// for (const { prodName, country, userName } of csvData) {
//     console.log(`Product Name is :: ${prodName} and country is :: ${country} and user Name is :: ${userName}`);
// }

// const excelData = rf.readExcelFile('E:/PWLearning/Batch8PM/testdata/PlaceOrder.xlsx');
// console.log(excelData);
// for (const { prodName, country } of excelData) {
//     console.log(`Product Name is :: ${prodName} and country is :: ${country}`);
// }







