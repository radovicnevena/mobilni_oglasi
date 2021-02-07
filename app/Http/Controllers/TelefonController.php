<?php

namespace App\Http\Controllers;

use App\Telefon;
use Illuminate\Http\Request;

class TelefonController extends Controller
{
    public function vrati_telefon()
    {
        $telefoni = Telefon::all();

        return response()->json([
            'telefoni' => $telefoni
        ]);
    }

    public function obrisi_telefon(Request $request)
    {
        $id = $request->input('id');
        Telefon::find($id)->delete();
    }
}
