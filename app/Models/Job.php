<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Job extends Model
{
    public $incrementing = false;
    protected $keyType = 'string';
    protected $table = 'jobs';
    protected $guarded = ['id'];

    public function candidates() {
        return $this->hasOne('App\Models\Candidate', 'job_id');
    }

    public function applications() {
        return $this->hasOne('App\Models\Application', 'job_id');
    }

    // generate UUID auto
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->id = Str::uuid();
        });
    }
}
