<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class JobSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $levels = ['junior', 'middle', 'senior'];
        $randomLevel = $levels[array_rand($levels)];

        DB::table('jobs')->insert([
            'id' => Str::uuid()->toString(),
            'title' => 'Programmer',
            'description' => 'lreo,m okaauijdja odjaoisdj ioajsdoaisjoaisjdi jaidjaio jj iiadj oijaiodjaoi djoaisjdiasjdia jai iadji ji jadaijd oaijoaijd oijai joaidewtg87toaiwjai joaisdji ojad',
            'info' => 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
            'salary' => 5000000,
            'level' => $randomLevel,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
