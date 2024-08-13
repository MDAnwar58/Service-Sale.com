<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('items', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('category_id');
            $table->unsignedBigInteger('sub_category_id');
            $table->string('name');
            $table->string('slug');
            $table->string('title')->nullable();
            $table->text('des')->nullable();
            $table->string('image')->nullable();
            $table->string('icon_image')->nullable();
            $table->enum('status', ['active', 'unactive'])->default('active');
            $table->string('meta_title')->nullable();
            $table->string('meta_des')->nullable();
            $table->foreign('category_id')->references('id')->on("categories")
                ->cascadeOnDelete()
                ->cascadeOnUpdate();
            $table->foreign('sub_category_id')->references('id')->on("sub_categories")
                ->cascadeOnDelete()
                ->cascadeOnUpdate();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('items');
    }
};
