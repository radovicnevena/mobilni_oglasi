<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOglasTable extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('oglas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('cena');
            $table->string('stanje');
            $table->integer('ocuvanost');
            $table->string('opis');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('oglas');
    }
}
