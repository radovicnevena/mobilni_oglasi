<?php

namespace App\Http\Controllers;

use App\Oglas;
use App\Telefon;
use Illuminate\Http\Request;

class OglasController extends Controller
{
    public function vrati_sve_oglase()
    {
        $oglasi = Oglas::join('telefon', 'telefon.id', '=', 'oglas.telefon_id')->get();

        return response()->json([
            'oglasi' => $oglasi
        ]);
    }

    public function vrati_oglase(Request $request)
    {
        $telefon_id = $request->input('telefon_id');
        $oglasi = Telefon::find($telefon_id)->oglasi()->get();

        return response()->json([
            'oglasi' => $oglasi
        ]);
    }

    public function novi_oglas(Request $request)
    {
        $cena = $request->input('cena');
        $stanje = $request->input('stanje');
        $ocuvanost = $request->input('ocuvanost');
        $opis = $request->input('opis');

        $telefon_id = $request->input('telefon_id');

        Oglas::insert([
            'cena' => $cena,
            'stanje' => $stanje,
            'ocuvanost' => $ocuvanost,
            'opis' => $opis,
            'napravljen_at' => date("Y-m-d H:i:s"),
            'telefon_id' => $telefon_id
        ]);
    }
}
