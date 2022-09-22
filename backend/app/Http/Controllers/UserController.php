<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
  
  /**
   * Register a newly created user in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function register(Request $request){
    $fields = $request->validate([
      'name' => 'required|string',
      'email' => 'required|string|unique:users,email',
      'password' => 'required|string|confirmed'
    ]);

    $user = User::create([
      'name' => $fields['name'],
      'email' => $fields['email'],
      'password' => bcrypt($fields['password'])
    ]);

    $token = $user->createToken('MYAPPTOEKN')->plainTextToken;

    $response = [
      'user' => $user,
      'token' => $token
    ];

    return response($response, 201);
  }
  
  /**
   * Login for registered User.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function login(Request $request){
    $fields = $request->validate([
      'email' => 'required|string',
      'password' => 'required|string'
    ]);

    // Email check
    $user = User::where('email', $fields['email'])->first();

    // Password check
    if(!$user || !Hash::check($fields['password'], $user->password)){
      return response([
        'message' => 'User not found'
      ], 401);
    }

    $token = $user->createToken('MYAPPTOEKN')->plainTextToken;

    $response = [
      'user' => $user,
      'token' => $token
    ];

    return response($response, 201);
  }


  /**
   * Logout for logged in user.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return Response 
   */
  public function logout(Request $request){
    auth()->user()->tokens()->delete();

    return [
      'message' => 'Logged out'
    ];
  }
}
