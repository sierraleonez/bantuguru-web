<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Slider extends Model
{
    protected $fillable = ['title', 'sub_title', 'image_url', 'order_sequence', 'is_active'];

    protected function casts(): array
    {
        return [
            'is_active' => 'boolean',
            'order_sequence' => 'integer',
        ];
    }
}
