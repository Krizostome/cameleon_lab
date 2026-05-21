<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn () => Inertia::render('Home'));

Route::get('/portfolio', fn () => Inertia::render('Portfolio/Index'));

Route::get('/portfolio/{slug}', fn (string $slug) => Inertia::render('Portfolio/Show', [
    'slug' => $slug,
]));

Route::get('/contact', fn () => Inertia::render('Contact'));

Route::get('/blog', fn () => Inertia::render('Blog/Index'));

Route::get('/blog/{slug}', fn (string $slug) => Inertia::render('Blog/Show', [
    'slug' => $slug,
]));
