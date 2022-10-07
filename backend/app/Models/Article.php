<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
  use HasFactory;
  protected $fillable = [
    'title',
    'text'
  ];


  // Relationship to user
  public function user()
  {
    return  $this->belongsTo(User::class, 'user_id');
  }
}
