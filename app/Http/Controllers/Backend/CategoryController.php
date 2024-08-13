<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\File;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Backend/Category/Index', [
            'categories' => Category::latest()->paginate(5)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Backend/Category/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'image' => 'required|max:10240'
        ]);

        $category = new Category();
        $category->name = $request->name;
        $category->slug = Category::generateSlug($request->name);
        $category->image = Category::fileStore($request->hasFile('image'), $request->file('image'));
        $category->save();

        return to_route('admin.category')->with('success', 'Category Created!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return Inertia::render('Backend/Category/Edit', [
            'category' => Category::find($id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required',
            'image' => 'nullable|max:10240'
        ]);
        $category = Category::find($id);
        $category->name = $request->name;
        $category->slug = Category::updateSlug($category->name, $category->slug, $request->name);
        $category->image = Category::fileUpdate($request->hasFile('image'), $request->file('image'), $category->image);
        $category->update();

        return to_route('admin.category')->with('success', 'Category Updated!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $category = Category::find($id);
        $category_image = basename($category->image);
        $file_path = public_path() . '/upload/images/category/' . $category_image;

        if (File::exists($file_path)) {
            File::delete($file_path);
        }
        $category->delete();

        return back()->with('success', 'Category Deleted!');
    }
}
