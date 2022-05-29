import React, { Component } from "react";
import CSVReader from "react-csv-reader";

export class Chart extends Component {
    constructor() {
        super();
        this.state = {
            click: false,
            arr: []
        };

        this.handleForce = this.handleForce.bind(this);
        this.click = this.click.bind(this);
    }

    handleForce = (data, fileInfo) => {
        let temp = data.map((item) => {
            let feat1 = parseFloat(item.cochlear_volume);
            let feat2 = parseFloat(item.cochlear_surface);
            let feat3 = parseFloat(item.cochlear_a);
            let feat4 = parseFloat(item.cochlear_b);
            return {
                Feat4: feat4,
                Feat3: feat3,
                Feat2: feat2,
                Feat1: feat1
            };
        });
        // console.log(temp);
        this.setState({ click: false, arr: temp });
    };

    papaparseOptions = {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        transformHeader: (header) => header.toLowerCase().replace(/\W/g, "_")
    };

    click() {
        this.setState({ click: true, data: this.state.arr });
    }

    render() {
        return (
            <div>
                <div className="h1 text-center border m-4 p-3">CSV to Chart</div>
                <CSVReader
                    cssClass="csv-reader-input text-center border m-4 p-3"
                    onFileLoaded={this.handleForce}
                    parserOptions={this.papaparseOptions}
                    key="uniqueKey"
                    inputId="ObiWan"
                    inputName="ObiWan"
                    inputStyle={{ color: "red" }}
                />
                <div className="m-3 d-flex justify-content-center">
                    <button className="btn btn-primary m-2" onClick={this.click}>
                        Columns
                    </button>
                    {/* <button className="btn btn-primary m-2" onClick={this.click}>
            Linear Chart
          </button>
          <button className="btn btn-primary m-2" onClick={this.click}>
            Pie Chart
          </button> */}
                </div>
                <div className="h1">
                    {this.state.click
                        ? this.state.arr.map((item) => {
                            return (
                                <table className="table">
                                    <tbody>
                                        <tr className="d-flex justify-content-center align-items-around">
                                            {/* <th scope="row">1</th> */}
                                            <td className="w-25 d-flex align-items-center">
                                                {item.Feat1.header}
                                                {item.Feat1.toFixed(2)}
                                            </td>
                                            <td className="w-25 d-flex align-items-center">
                                                {item.Feat2.header}
                                                {item.Feat2.toFixed(2)}
                                            </td>
                                            <td className="w-25 d-flex align-items-center">
                                                {item.Feat3.header}
                                                {item.Feat3.toFixed(2)}
                                            </td>
                                            <td className="w-25 d-flex align-items-center">
                                                {item.Feat4.header}
                                                {item.Feat4.toFixed(2)}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            );
                        })
                        : null}
                </div>
            </div>
        );
    }
}

// export default App;
