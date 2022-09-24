<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return Article::all();
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    $request->validate([
      'title' => 'required',
      'text' => 'required'
    ]);

    return Article::create($request->all());
  }

  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show($id)
  {
    return Article::find($id);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $id)
  {
    $article = Article::find($id);
    $article->update($request->all());
    return $article;
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
    return Article::destroy($id);
  }
  
  /**
   * Search specified resource from storage.
   *
   * @param  str  $title
   * @return \Illuminate\Http\Response
   */
  public function search($title)
  {
    return Article::where('title', 'like', '%'.$title.'%')->get();
  }
  
  /**
   * Fetch latest resource from storage.
   *
   * @return \Illuminate\Http\Response
   */
  public function latest()
  {
    return Article::orderBy('created_at', 'desc')->get();
  }
}
