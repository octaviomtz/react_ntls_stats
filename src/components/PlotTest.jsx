import React from "react";
import Papa from "papaparse";
import csvFile from '../../src/files/measurements.csv';

// https://stackoverflow.com/questions/42628426/read-local-csv-with-relative-path-in-reactjs
Papa.parse(csvFile, {
    download: true,
    complete: function (input) {
        const records = input.slug;
        return records
    }
});

export function PlotTest() {
    const aa = 'tttttt1'
    // var csvFilePath = require('../../src/files/measurements.csv')
    var res = Papa.parse('../../src/files/measurements.csv');
    console.log(res)
    // var slugs = Papa.parse(csvFile);
    return (
        <div className='plot-container'>
            <p className="plot-name">SOME PLOT</p>
            <p className="plot-text">{aa}</p>
            {/* <p className="plot-text2">{res}</p> */}
        </div>
    );
} 