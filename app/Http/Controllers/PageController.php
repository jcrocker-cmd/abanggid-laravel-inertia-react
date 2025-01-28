<?php

namespace App\Http\Controllers;

class PageController extends Controller
{
    public function homepage()
    {
        return inertia('Homepage');
    }

    public function about()
    {
        return inertia('About');
    }
}