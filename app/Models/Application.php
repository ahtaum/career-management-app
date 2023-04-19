<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Application extends Model
{
    public $incrementing = false;
    protected $keyType = 'string';
    protected $table = 'applications';
    protected $guarded = ['id'];

    public function jobs() {
        return $this->belongsTo('App\Models\Job', 'job_id');
    }

    public function applications() {
        return $this->belongsTo('App\Models\Candidate', 'candidate_id');
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
