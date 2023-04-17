<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Candidate extends Model
{
    protected $table = 'candidates';
    protected $guarded = ['id'];

    public function jobs() {
        return $this->belongsTo('App\Models\Job', 'job_id');
    }

    public function applications() {
        return $this->hasOne('App\Models\Application', 'candidate_id');
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
