<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;


class TelefonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 10; $i++) {
            DB::table('telefon')->insert([
                'proizvodjac' => Str::random(4),
                'model' => Str::random(7),
                'dijagonala_ekrana' => rand(10, 21),
                'ram_memorija' => rand(2, 16),
                'procesor' => Str::random(2) . "-" . Str::random(4)
            ]);
        }
    }
}
