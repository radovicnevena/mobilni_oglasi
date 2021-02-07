import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Telefon extends Component {
    constructor(props) {
        super(props);

        this.state = {
            telefon: this.props.telefon,
            oglasi: []
        };
        this.url = "http://127.0.0.1:8000/";
        this.loadOglasiZaTelefon();
    }

    loadOglasiZaTelefon() {
        axios
            .get(
                this.url +
                    "oglasi/get-po-telefonu?telefon_id=" +
                    this.state.telefon.id
            )
            .then(res => {
                const oglasi = res.data.oglasi;
                this.setState({ oglasi });
            });
    }

    handleDelete() {
        axios.delete(this.url + "telefoni/delete?id=" + this.state.telefon.id);
    }

    showOglasi() {
        this.props.prikazOglasa(this.state.oglasi);
    }
    dodajOglas() {
        this.props.prikazOglasa(this.state.telefon.id); //sifra
    }

    render() {
        let t = this.state.telefon;
        return (
            <tr className="table-info">
                <td>{t.model}</td>
                <td>{t.proizvodjac}</td>
                <td>{t.dijagonala_ekrana}</td>
                <td>{t.ram_memorija}</td>
                <td>{t.procesor}</td>
                <td align="center">
                    <button
                        onClick={this.handleDelete.bind(this)}
                        className="btn btn-danger"
                    >
                        X
                    </button>
                </td>
                <td>
                    <button
                        onClick={this.showOglasi.bind(this)}
                        className="btn btn-secondary"
                    >
                        Prikazi oglase
                    </button>
                </td>
                <td>
                    <button
                        onClick={this.dodajOglas.bind(this)}
                        className="btn btn-success"
                    >
                        Dodaj oglas
                    </button>
                </td>
            </tr>
        );
    }
}

if (document.getElementById("telefon")) {
    ReactDOM.render(<Telefon />, document.getElementById("telefon"));
}
