<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Item;
use App\Models\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Backend/Item/Index', [
            "items" => Item::with('category', 'sub_category')->latest()->paginate(5)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Backend/Item/Create', [
            "categories" => Category::latest()->get(),
            "sub_categories" => SubCategory::latest()->get()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $item = new Item();
        $item->name = $request->name;
        $item->slug = Item::generateSlug($request->name);
        $item->category_id = $request->category_id;
        $item->sub_category_id = $request->sub_category_id;
        $item->title = $request->title;
        $item->des = $request->des;
        $item->image = Item::fileStore($request->hasFile('image'), $request->file('image'), $request->image ? "image" : "");
        $item->icon_image = Item::fileStore($request->hasFile('icon_image'), $request->file('icon_image'), $request->icon_image ? "icon_image" : "");
        // seo
        $item->meta_title = $request->meta_title;
        $item->meta_des = $request->meta_des;
        $item->save();

        return Redirect::route('admin.item')->with('success', 'Item Created!');
    }

    public function status($id)
    {
        $item = Item::find($id);
        if ($item->status === "active") {
            $item->status = "unactive";
            $item->update();
        } else {
            $item->status = "active";
            $item->update();
        }

        $status = $item->status === "active" ? "Active" : "UnActive";
        return Redirect::route('admin.item')->with('success', "Item Status" . $status);
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
        return Inertia::render('Backend/Item/Edit', [
            "item" => Item::find($id),
            "categories" => Category::latest()->get(),
            "sub_categories" => SubCategory::latest()->get()
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $item = Item::find($id);
        $item->name = $request->name;
        $item->slug = Item::updateSlug($item->name, $item->slug, $request->name);
        $item->category_id = $request->category_id;
        $item->sub_category_id = $request->sub_category_id;
        $item->title = $request->title;
        $item->des = $request->des;
        $item->image = Item::fileUpdate($request->hasFile('image'), $request->file('image'), $request->image ? "image" : "", $item->image);
        $item->icon_image = Item::fileUpdate($request->hasFile('icon_image'), $request->file('icon_image'), $request->icon_image ? "icon_image" : "", $item->icon_image);
        // seo
        $item->meta_title = $request->meta_title;
        $item->meta_des = $request->meta_des;
        $item->update();

        return Redirect::route('admin.item')->with('success', 'Item Updated!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $item = Item::find($id);
        $image = basename($item->image);
        $file_path = public_path() . '/upload/images/item/' . $image;

        if (File::exists($file_path)) {
            File::delete($file_path);
        }
        $icon_image = basename($item->icon_image);
        $file_path = public_path() . '/upload/images/item/' . $icon_image;

        if (File::exists($file_path)) {
            File::delete($file_path);
        }
        $item->delete();

        return back()->with('success', 'Item Deleted!');
    }
}
