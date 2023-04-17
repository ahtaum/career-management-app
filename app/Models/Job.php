<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    protected $table = 'jobs';
    protected $guarded = ['id'];

    public function candidates() {
        return $this->hasOne('App\Models\Candidate', 'job_id');
    }

    public function applications() {
        return $this->hasOne('App\Models\Application', 'job_id');
    }
}
