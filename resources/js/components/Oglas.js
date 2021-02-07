import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Oglas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            oglas: this.props.oglas
        };
    }

    render() {
        let o = this.state.oglas;
        return (
            <tr className="table-info">
                <td>{o.stanje}</td>
                <td>{o.cena}</td>
                <td align="center">{o.ocuvanost}</td>
                <td
                    style={{
                        wordWrap: "break-word",
                        minWidth: "200px",
                        maxWidth: "200px"
                    }}
                >
                    {o.opis}
                </td>
                <td>{o.napravljen_at}</td>
            </tr>
        );
    }
}

if (document.getElementById("oglas")) {
    ReactDOM.render(<Oglas />, document.getElementById("oglas"));
}
