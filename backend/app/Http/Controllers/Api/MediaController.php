<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Http\Reqponse;

use App\Models\Media;
use App\Http\Resources\MediaResource;
use App\Http\Requests\MediaRequest;
use Illuminate\Http\Response;

class MediaController extends Controller
{
    public function index()
    {
        return MediaResource::collection(Media::all());
    }

    public function store(MediaRequest $request)
    {
        $media = Media::create($request->validated());

        return new MediaResource($media);
    }

    public function show($id)
    {
        return new MediaResource(Media::findOrFail($id));
    }

    public function update(MediaRequest $request, Media $media)
    {
        $media->update($request->validated());

        return new MediaRequest($media);
    }

    public function destroy(Media $media)
    {
        $media->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
