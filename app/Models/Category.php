<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;

class Category extends Model
{
    use HasFactory;
    protected $table = 'categories';
    protected $fillable = [
        'name',
        'slug',
        'image',
    ];
    public static function generateSlug($name): string
    {
        $category = Category::where('name', $name)->get();
        if ($category->count() > 0) {
            $count = $category->count();
            $slug = Str::slug($name) . '-' . $count;
        } else {
            $slug = Str::slug($name);
        }
        return $slug;
    }
    public static function updateSlug($category_name, $category_slug, $request_name): mixed
    {
        if ($category_name != $request_name) {
            $slug = Category::generateSlug($request_name);
        } else {
            $slug = $category_slug;
        }
        return $slug;
    }
    public static function fileStore($has_file, $file): string|null
    {
        if ($has_file) {
            $fileExtension = $file->getClientOriginalName();
            $filename = time() . '-category-' . $fileExtension;
            $file->move('upload/images/category/', $filename);
            $path = url('/') . '/upload/images/category/' . $filename;
            return $path;
        } else {
            return null;
        }
    }
    public static function fileUpdate($has_file, $file, $category_file): string|null
    {
        if ($has_file) {
            $category_image = basename($category_file);
            $file_path = public_path() . '/upload/images/category/' . $category_image;

            if (File::exists($file_path)) {
                File::delete($file_path);
            }
            $fileExtension = $file->getClientOriginalName();
            $filename = time() . '-category-update-' . $fileExtension;
            $file->move('upload/images/category/', $filename);
            $path = url('/') . '/upload/images/category/' . $filename;
            return $path;
        } else {
            return null;
        }
    }
}
