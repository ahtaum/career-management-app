## About
Career Management Application is a tool for customizing careers in companies, which can be used as a management tool in the field of human resources.

## Install
- Clone this repository by typing it in the console or terminal
- type in console or terminal `composer install`
- type in console or terminal `npm i` or `npm install`
- copy or rename file **.env.example** to **.env** and configuration your database
- type `php artisan  migrate --seed` or `php artisan migrage:fresh --seed` type `--seed` is required because it comes with default data.
- and type in console or terminal  `php artisan key:generate`  for security.
-   run this command at same time in your console or terminal  `npm run dev`  and  `php artisan serve`  .
    -   `npm run dev`  for running all asset in frontend with  **Vite**.
    -   `php artisan serve`  run local server.
  -   go in your local url in your browser to open web type  **[http://127.0.0.1:8000](http://127.0.0.1:8000/)**

## Stack

- Laravel 10 (Main Core)
- InertiaJS with ReactJs (Typescript) for frontend
- Mysql (Database)
- Tailwindcss with DaisyUI
