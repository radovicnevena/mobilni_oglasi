<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'DefaultController@aplikacija');


Route::get('/oglasi/get-po-telefonu', 'OglasController@vrati_oglase');
Route::get('/oglasi/get', 'OglasController@vrati_sve_oglase');
Route::post('/oglasi/post', 'OglasController@novi_oglas');

Route::get('/telefoni/get', 'TelefonController@vrati_telefon');
Route::delete('/telefoni/delete', 'TelefonController@obrisi_telefon');
