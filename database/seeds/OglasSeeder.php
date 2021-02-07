<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;


class OglasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 45; $i++) {
            $telefon_id = rand(1, 10);

            DB::table('oglas')->insert([
                'cena' => rand(100, 500),
                'stanje' => Str::random(4),
                'opis' => Str::random(155),
                'ocuvanost' => rand(1, 5),
                'napravljen_at' => date("Y-m-d H:i:s"),
                'telefon_id' => $telefon_id,
            ]);
        }
    }
}
