<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class PostResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'content' => $this->content,
            'category' => $this->category,
            'thumbnail' => $this->media ? [
                'id' => $this->media->id,
                'url' => Storage::url($this->media->path),
                'size' => $this->media->size,
                'mime_type' => $this->media->mime_type,
                'name' => $this->media->name,
            ] : null,
            'created_at' => $this->created_at,
        ];
    }
}
