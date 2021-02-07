<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DefaultController extends Controller
{
    public function aplikacija()
    {
        return view('welcome');
    }
}
