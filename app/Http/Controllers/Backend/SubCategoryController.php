<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Facades\File;

class SubCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Backend/SubCategory/Index', [
            'sub_categories' => SubCategory::with('category')
                ->latest()
                ->paginate(5),
            'success' => session('success')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Backend/SubCategory/Create', [
            'categories' => Category::latest()->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $sub_category = new SubCategory();
        $sub_category->category_id = $request->category_id;
        $sub_category->name = $request->name;
        $sub_category->slug = SubCategory::generateSlug($request->name);
        $sub_category->image = SubCategory::fileStore($request->hasFile('image'), $request->file('image'));
        $sub_category->save();

        // session('success', 'Sub Category Created!');

        return Redirect::route('admin.sub_category')->with('success', 'Sub Category Created!');
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
        return Inertia::render('Backend/SubCategory/Edit', [
            'sub_category' => SubCategory::with('category')->find($id),
            'categories' => Category::latest()->get()
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $sub_category = SubCategory::find($id);
        $sub_category->category_id = $request->category_id;
        $sub_category->name = $request->name;
        $sub_category->slug = SubCategory::updateSlug($sub_category->name, $sub_category->slug, $request->name);
        $sub_category->image = SubCategory::fileUpdate($request->hasFile('image'), $request->file('image'), $sub_category->image);
        $sub_category->save();

        return to_route('admin.sub_category')->with('success', 'Sub Category Created!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $sub_category = SubCategory::find($id);
        $image = basename($sub_category->image);
        $file_path = public_path() . '/upload/images/sub_category/' . $image;

        if (File::exists($file_path)) {
            File::delete($file_path);
        }
        $sub_category->delete();

        return back()->with('success', 'Sub Category Deleted!');
    }
}
