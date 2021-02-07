<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Oglas extends Model
{
    protected $table = "oglas";
    const CREATED_AT = 'napravljen_at';
    const UPDATED_AT = 'izmenjen_at';

    public function telefon()
    {
        return $this->belongsTo('App\Telefon');
    }
}
