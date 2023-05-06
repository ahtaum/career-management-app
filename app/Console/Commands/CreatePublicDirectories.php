<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class CreatePublicDirectories extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'create:default-assets';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create default assets in storage/app/public';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $directories = ['logo', 'avatars', 'files'];
        foreach ($directories as $directory) {
            $path = storage_path('app/public/' . $directory);
            if (!is_dir($path)) {
                File::makeDirectory($path, 0755, true, true);
                $this->info("Directory $path created successfully.");
            } else {
                $this->info("Directory $path already exists.");
            }
        }
        
        return Command::SUCCESS;
    }
}
