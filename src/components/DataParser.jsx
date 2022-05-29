// https://stackoverflow.com/questions/46849677/how-to-extract-data-to-react-state-from-csv-file-using-papa-parse
import React, { Component } from 'react';
import Papa from "papaparse";

export class DataParser extends Component {

    constructor(props) {
        // Call super class
        super(props);

        // Bind this to function updateData (This eliminates the error)
        this.updateData = this.updateData.bind(this);
    }

    componentWillMount() {

        // Your parse code, but not seperated in a function
        var csvFilePath = require("../../src/files/measurements.csv");
        Papa.parse(csvFilePath, {
            header: true,
            download: false,
            skipEmptyLines: true,
            // Here this is also available. So we can call our custom class method
            complete: this.updateData
        });
    }

    updateData(result) {
        const data = result.data;
        // Here this is available and we can call this.setState (since it's binded in the constructor)
        this.setState({ data: data }); // or shorter ES syntax: this.setState({ data });
        console.log(data.data)
    }

    render() {
        // Your render function
        return <div>Data</div>
    }
}

// export default DataParser;