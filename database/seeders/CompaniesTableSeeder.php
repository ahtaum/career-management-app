<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CompaniesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $name = "PT Default Indonesia";

        DB::table('companies')->insert([
            'name' => $name,
            'address' => 'Cirebon - Jawa Barat',
            'description' => 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero aliquid deleniti odio, officiis eveniet, voluptates ex ad veniam fugit architecto dignissimos commodi quisquam. Expedita adipisci commodi voluptatem reprehenderit possimus voluptates!',
        ]);
    }
}
