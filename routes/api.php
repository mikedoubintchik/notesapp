<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get( 'notes', 'NoteController@index' );
Route::get( 'note/{id}', 'NoteController@show' );
Route::get( 'note/{id}/delete', 'NoteController@destroy' );
Route::post( 'note/{id}/update', 'NoteController@update' );
Route::post( 'notes', 'NoteController@store' );


