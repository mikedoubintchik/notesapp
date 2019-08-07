# Notes App (BoomTown Coding Test)

## How to initiate the app
1. In `.env` update the `DB_DATABASE` to be the full path to `database.sqlite` file
1. `npm install && composer install`

## How to run the app
1. `npm run dev`
1. `php artisan serve`

## How to view the app
Go to `http://127.0.0.1:8000/` in browser

### Relevant files
1. `app/Http/Controllers/NoteController.php`
1. `app/Note.php`
1. `database/migrations/2019_08_06_005827_create_notes_table.php`
1. `resources/*`
1. `routes/api.php`
1. `routes/web.php`
