<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Telefon extends Model
{
    protected $table = "telefon";
    public $timestamps = false;

    public function oglasi()
    {
        return $this->hasMany('App\Oglas');
    }
}
