<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    protected $table = 'applications';
    protected $guarded = ['id'];

    public function jobs() {
        return $this->belongsTo('App\Models\Job', 'job_id');
    }

    public function applications() {
        return $this->belongsTo('App\Models\Candidate', 'candidate_id');
    }
}
