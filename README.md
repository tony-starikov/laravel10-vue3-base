## Laravel 10, vue.js 3 project template.

Installation steps.

- composer create-project laravel/laravel laravel10-vue3-base
- npm install vue@next
- npm install @vitejs/plugin-vue
- edit vite.config.js, import there vue from @vitejs/plugin-vue and add it to the plugins
- add @vite('resources/js/app.js') and app container to the main blade template
- edit routes in web.php to Route::get('{any?}', fn() => view('app'))->where('any', '.*');
- add default component App.vue
- edit resources/js/app.js
- npm install vue-router@4
- add header component
- add pages components
- add route and routes file add them to the app.js
- npm install vuex@next --save
