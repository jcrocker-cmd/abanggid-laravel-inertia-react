<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        return inertia('Crud/Index', [
            'posts' => Post::latest()->get()
        ]);
    }

    public function create()
    {
        return inertia('Crud/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|max:255',
            'content' => 'required'
        ]);

        Post::create($validated);

        return redirect()->route('crud.index')
            ->with('message', 'Post created successfully');
    }

    public function edit(Post $post)
    {
        return inertia('Crud/Edit', [
            'post' => $post
        ]);
    }

    public function update(Request $request, Post $post)
    {
        $validated = $request->validate([
            'title' => 'required|max:255',
            'content' => 'required'
        ]);

        $post->update($validated);

        return redirect()->route('crud.index')
            ->with('message', 'Post updated successfully');
    }

    public function destroy(Post $post)
    {
        $post->delete();

        return redirect()->route('crud.index')
            ->with('message', 'Post deleted successfully');
    }
}