<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;

class Item extends Model
{
    use HasFactory;
    protected $table = 'items';
    protected $fillable = [
        'category_id',
        'sub_category_id',
        'name',
        'slug',
        'title',
        'des',
        'image',
        'icon_image',
        'status',
        'meta_title',
        'meta_des',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'category_id');
    }
    public function sub_category(): BelongsTo
    {
        return $this->belongsTo(SubCategory::class, 'sub_category_id');
    }
    public static function generateSlug($name): string
    {
        $item = Item::where('name', $name)->get();
        if ($item->count() > 0) {
            $count = $item->count();
            $slug = Str::slug($name) . '-' . $count;
        } else {
            $slug = Str::slug($name);
        }
        return $slug;
    }
    public static function updateSlug($item_name, $item_slug, $request_name): mixed
    {
        if ($item_name != $request_name) {
            $slug = Item::generateSlug($request_name);
        } else {
            $slug = $item_slug;
        }
        return $slug;
    }
    public static function fileStore($has_file, $file, $file_type): string|null
    {
        if ($has_file) {
            $fileExtension = $file->getClientOriginalName();
            $filename = time() . "-item-" . $file_type . "-" . $fileExtension;
            $file->move('upload/images/item/', $filename);
            $path = url('/') . '/upload/images/item/' . $filename;
            return $path;
        } else {
            return null;
        }
    }
    public static function fileUpdate($has_file, $file, $file_type, $item_file): string|null
    {
        if ($has_file) {
            $image = basename($item_file);
            $file_path = public_path() . '/upload/images/item/' . $image;

            if (File::exists($file_path)) {
                File::delete($file_path);
            }
            $fileExtension = $file->getClientOriginalName();
            $filename = time() . "-item-" . $file_type . "-update-" . $fileExtension;
            $file->move('upload/images/item/', $filename);
            $path = url('/') . '/upload/images/item/' . $filename;
            return $path;
        } else {
            return null;
        }
    }
}
