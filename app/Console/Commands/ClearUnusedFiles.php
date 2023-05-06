<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use App\Models\Company;
use App\Models\User;
use App\Models\Candidate;

use Illuminate\Support\Facades\Schema;

class ClearUnusedFiles extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'clear:unused-files';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command to delete all unused file and image';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        if(Schema::hasTable('users')) {
            $avatarsPath = public_path('storage/avatars');
            $usedAvatars = User::pluck('avatar')->filter()->map(function ($avatar) use ($avatarsPath) {
                return str_replace(url('/'), '', asset($avatar));
            })->toArray();
            $unusedAvatars = array_diff(scandir($avatarsPath), ['.', '..', '.gitkeep'], $usedAvatars);
            foreach ($unusedAvatars as $avatar) {
                unlink($avatarsPath.'/'.$avatar);
            }
        }

        if (Schema::hasTable('companies')) {
            $logoPath = public_path('storage/logo');
            $usedLogos = Company::pluck('logo')->filter()->map(function ($logo) use ($logoPath) {
                return str_replace(url('/'), '', asset($logo));
            })->toArray();
            $unusedLogos = array_diff(scandir($logoPath), ['.', '..', '.gitkeep'], $usedLogos);
            foreach ($unusedLogos as $logo) {
                unlink($logoPath.'/'.$logo);
            }
        }

        if (Schema::hasTable('candidates')) {
            $filesPath = storage_path('app/public/files');
            $usedFiles = Candidate::pluck('cv')->filter()->toArray();
            $unusedFiles = array_diff(scandir($filesPath), ['.', '..', '.gitkeep']);
            foreach ($unusedFiles as $file) {
                if (!in_array($file, $usedFiles)) {
                    unlink($filesPath.'/'.$file);
                }
            }
        }

        return Command::SUCCESS;
    }
}
