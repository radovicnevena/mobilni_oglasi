<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTelefonsTable extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('telefons', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('proizvodjac');
            $table->string('model');
            $table->string('dijagonala_ekrana');
            $table->string('ram_memorija');
            $table->string('procesor');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('telefons');
    }
}
