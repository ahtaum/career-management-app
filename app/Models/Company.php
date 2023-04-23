<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Company extends Model
{
    public $incrementing = false;
    protected $keyType = 'string';
    protected $table = 'companies';
    protected $guarded = ['id'];

    // generate UUID auto
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->id = Str::uuid();
        });
    }
}
