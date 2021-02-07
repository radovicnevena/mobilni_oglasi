<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class SpoljnjiKljucOglas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('oglas', function (Blueprint $table) {
            $table->unsignedBigInteger('telefon_id');
            $table->foreign('telefon_id')->references('id')->on('telefon')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('oglas', function (Blueprint $table) {
            $table->dropForeign('oglas_telefon_id_foreign');
        });
    }
}
