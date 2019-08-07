<?php

namespace App\Http\Controllers;

use App\Note;
use Illuminate\Http\Request;


class NoteController extends Controller {
    public function index() {
        $notes = Note::orderBy( 'created_at', 'desc' )
                     ->get();

        return $notes->toJson();
    }

    public function store( Request $request ) {
        $validatedData = $request->validate( [
            'title'   => 'required',
            'content' => 'required',
        ] );

        $note = Note::create( [
            'title'   => $validatedData['title'],
            'content' => $validatedData['content'],
        ] );

        return response()->json( [
            "code"    => 200,
            "message" => "Note added successfully"
        ] );
    }

    public function update( Request $request, $id ) {
        $note          = Note::find( $id );
        $note->title   = $request->input( 'title' );
        $note->content = $request->input( 'content' );
        $note->save();

        return response()->json( [
            "code"    => 200,
            "message" => "Note successfully updated"
        ] );
    }

    public function show( $id ) {
        $note = Note::find( $id );

        return $note->toJson();
    }

    public function destroy( $id ) {
        $note = Note::find( $id );
        $note = $note->delete();

        return response()->json( [
            "code"    => 200,
            "message" => "Note deleted successfully"
        ] );
    }
}
