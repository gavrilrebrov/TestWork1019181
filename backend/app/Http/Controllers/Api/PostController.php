<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;
use App\Http\Requests\PostRequest;

use App\Models\Post;
use App\Models\Media;

class PostController extends Controller
{
    public function index()
    {
        return PostResource::collection(Post::all());
    }

    public function store(PostRequest $request)
    {
        $post = Post::create($request->validated());

        if ($request->file('thumbnail')) {
            $file = $request->file('thumbnail');

            $path = $file->store('public');

            if ($path) {
                $media = new Media;
                $media->name = $file->getClientOriginalName();
                $media->mime_type = $file->getClientMimeType();
                $media->size = $file->getSize();
                $media->path = $path;

                if ($media->save()) {
                    $post->media_id = $media->id;
                    $post->save();
                }
            }
        }

        return new PostResource($post);
    }

    public function show($id)
    {
        return new PostResource(Post::findOrFail($id));
    }

    public function update(PostRequest $request, Post $post)
    {
        $post->update($request->validated());

        return new PostResource($post);
    }

    public function destroy(Post $post)
    {
        $post->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
