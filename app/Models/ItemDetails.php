<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ItemDetails extends Model
{
    use HasFactory;
    protected $table = 'item_details';
    protected $fillable = [
        'product_id',
        'name',
        'slug',
        'des',
        'image',
        'video',
    ];
}
