import React, { Component } from "react";
import ReactDOM from "react-dom";
import Telefon from "./Telefon";
import Oglas from "./Oglas";

export default class Aplikacija extends Component {
    constructor(props) {
        super(props);

        this.state = {
            oglasi: [],
            telefoni: [],
            showTelefoni: false,
            showOglasi: false,
            trenutniID: 0
        };
        this.url = "http://127.0.0.1:8000/";
        this.loadOglasi();
        this.loadTelefoni();
        this.prikaziOglaseZaTelefon = this.prikaziOglaseZaTelefon.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.dodajOglas = this.dodajOglas.bind(this);
    }

    prikaziTelefone() {
        if (this.state.showTelefoni)
            return (
                <table className="table table-light">
                    <thead className="thead-dark">
                        <tr>
                            <th>Model</th>

                            <th>Proizvodjac</th>

                            <th>Dijagonala Ekrana</th>

                            <th>Ram Memorija</th>

                            <th>Procesor</th>
                            <th>Brisanje</th>
                            <th>Prikaz</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.telefoni.map(t => {
                            return (
                                <Telefon
                                    prikazOglasa={this.prikaziOglaseZaTelefon}
                                    key={t.id}
                                    telefon={t}
                                />
                            );
                        })}
                    </tbody>
                </table>
            );
    }

    loadOglasi() {
        axios.get(this.url + "oglasi/get").then(res => {
            const oglasi = res.data.oglasi;
            this.setState({ oglasi });
        });
    }
    loadTelefoni() {
        axios.get(this.url + "telefoni/get").then(res => {
            const telefoni = res.data.telefoni;
            this.setState({ telefoni });
        });
    }

    prikaziOglase() {
        if (this.state.showOglasi)
            return (
                <table className="table table-light">
                    <thead className="thead-dark">
                        <tr>
                            <th style={{ width: "10%" }}>Model</th>

                            <th style={{ width: "10%" }}>Stanje</th>

                            <th style={{ width: "10%" }}>Cena</th>

                            <th style={{ width: "10%" }}>Ocuvanost</th>

                            <th>Opis</th>

                            <th style={{ width: "16%" }}>Datum kreiranja</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.oglasi.map(o => {
                            return (
                                <tr className="table-info">
                                    <td>{o.model}</td>
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
                        })}
                    </tbody>
                </table>
            );
    }

    prikaziOglaseZaTelefon(oglasi) {
        if (isNaN(oglasi))
            this.setState({
                prikazOglasaPoTelefonu: (
                    <table className="table table-light">
                        <thead className="thead-dark">
                            <tr>
                                <th style={{ width: "10%" }}>Stanje</th>

                                <th style={{ width: "10%" }}>Cena</th>

                                <th style={{ width: "10%" }}>Ocuvanost</th>

                                <th>Opis</th>

                                <th style={{ width: "16%" }}>
                                    Datum kreiranja
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {oglasi.map(o => {
                                return <Oglas key={o.id} oglas={o} />;
                            })}
                        </tbody>
                    </table>
                )
            });
        else {
            this.setState({
                prikazOglasaPoTelefonu: (
                    <form onSubmit={this.dodajOglas}>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Stanje"
                            name="stanje"
                            onChange={this.handleInputChange}
                        ></input>
                        <input
                            className="form-control"
                            type="number"
                            placeholder="Cena"
                            name="cena"
                            onChange={this.handleInputChange}
                        ></input>
                        <input
                            className="form-control"
                            type="number"
                            placeholder="Ocuvanost (1-5)"
                            name="ocuvanost"
                            onChange={this.handleInputChange}
                        ></input>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Opis"
                            name="opis"
                            onChange={this.handleInputChange}
                        ></input>
                        <input
                            className="form-control btn btn-success"
                            type="submit"
                            value="Dodaj oglas!"
                        ></input>
                    </form>
                ),
                trenutniID: oglasi
            });
        }
    }

    dodajOglas(e) {
        e.preventDefault();
        axios
            .post(this.url + "oglasi/post", {
                opis: this.state.opis,
                ocuvanost: this.state.ocuvanost,
                cena: this.state.cena,
                stanje: this.state.stanje,
                telefon_id: this.state.trenutniID
            })
            .then(res => {});
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    }

    showTelefoni() {
        this.setState({
            showTelefoni: !this.state.showTelefoni,
            showOglasi: false
        });
    }
    showOglasi() {
        this.setState({
            showOglasi: !this.state.showOglasi,
            showTelefoni: false
        });
    }

    render() {
        return (
            <div className="container">
                <button
                    className="btn btn-warning"
                    onClick={this.showTelefoni.bind(this)}
                >
                    Prikazi telefone
                </button>
                <button
                    className="btn btn-warning"
                    onClick={this.showOglasi.bind(this)}
                >
                    Prikazi sve oglase
                </button>
                {this.prikaziOglase()}
                {this.prikaziTelefone()}
                {this.state.prikazOglasaPoTelefonu}
            </div>
        );
    }
}

if (document.getElementById("aplikacija")) {
    ReactDOM.render(<Aplikacija />, document.getElementById("aplikacija"));
}
