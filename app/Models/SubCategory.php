<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;

class SubCategory extends Model
{
    use HasFactory;
    protected $table = 'sub_categories';
    protected $fillable = [
        'category_id',
        'name',
        'slug',
        'image',
    ];
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'category_id');
    }
    public static function generateSlug($name): string
    {
        $sub_category = Category::where('name', $name)->get();
        if ($sub_category->count() > 0) {
            $count = $sub_category->count();
            $slug = Str::slug($name) . '-' . $count;
        } else {
            $slug = Str::slug($name);
        }
        return $slug;
    }
    public static function updateSlug($sub_category_name, $sub_category_slug, $request_name): mixed
    {
        if ($sub_category_name != $request_name) {
            $slug = SubCategory::generateSlug($request_name);
        } else {
            $slug = $sub_category_slug;
        }
        return $slug;
    }
    public static function fileStore($has_file, $file): string|null
    {
        if ($has_file) {
            $fileExtension = $file->getClientOriginalName();
            $filename = time() . '-sub-category-' . $fileExtension;
            $file->move('upload/images/sub_category/', $filename);
            $path = url('/') . '/upload/images/sub_category/' . $filename;
            return $path;
        } else {
            return null;
        }
    }
    public static function fileUpdate($has_file, $file, $sub_category_file): string|null
    {
        if ($has_file) {
            $image = basename($sub_category_file);
            $file_path = public_path() . '/upload/images/sub_category/' . $image;

            if (File::exists($file_path)) {
                File::delete($file_path);
            }
            $fileExtension = $file->getClientOriginalName();
            $filename = time() . '-sub-category-update-' . $fileExtension;
            $file->move('upload/images/sub_category/', $filename);
            $path = url('/') . '/upload/images/sub_category/' . $filename;
            return $path;
        } else {
            return null;
        }
    }
}
