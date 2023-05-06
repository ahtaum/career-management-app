## About
Career Management Application is a tool for customizing careers in companies, which can be used as a management tool in the field of human resources.

## Install
- Clone this repository by typing it in the console or terminal
- First is **Important** copy or rename file **.env.example** to **.env** and configuration your database
- type in console or terminal `composer install`
- type in console or terminal `npm i` or `npm install`
- type `php artisan migrate --seed` or `php artisan migrage:fresh --seed` type `--seed` is required because it comes with default data.
- type in console or terminal `php artisan storage:link` for storage link
- and type in console or terminal  `php artisan key:generate`  for security.
-   run this command at same time in your console or terminal  `npm run dev`  and  `php artisan serve`  .
    -   `npm run dev`  for running all asset in frontend with  **Vite**.
    -   `php artisan serve`  run local server.
  -   go in your local url in your browser to open web type  **[http://127.0.0.1:8000](http://127.0.0.1:8000/)**
- if you want clear all assets(image and files) use this costum command `php artisan clear:unused-files` to clear all assets

## Stack

- Laravel 10 (Main Core)
- InertiaJS with ReactJs (Typescript) for frontend
- Mysql (Database)
- Tailwindcss with DaisyUI
