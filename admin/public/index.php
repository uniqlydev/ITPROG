<?php 

require __DIR__ . '/../vendor/autoload.php';


// Routings
$requestLink = $_SERVER['REQUEST_URI'];
$baseLink = str_replace('/public', '', $_SERVER['SCRIPT_NAME']);
$route = str_replace($baseLink, '', $requestLink);
$route = trim($route, '/');

// Defining controllers
$defaultController = 'IndexController';
$defaultAction = 'index';

// Mapping controllers
$routes = [
    '' => [
        'controller' => $defaultController,
        'action' => $defaultAction
    ]

    // Basic routes add more if needed
    ];


if (array_key_exists($route, $routes)) {
    $controller = $routes[$route]['controller'];
    $action = $routes[$route]['action'];
} else {
    $controller = $defaultController;
    $action = $defaultAction;
}

// Loading controller
$controller = 'App\\Controllers\\' . $controller . '.php';
if (file_exists($controller)) {
    require $controller;
} else {
    echo "Controller not found";
    exit();
}

// Creating 
$controller = new $controller();
if (method_exists($controller, $action)) {
    ob_start();
    $controller->$action();
    $content = ob_get_clean();

    require __DIR__ . '/../app/views/index.php';
} else {
    echo "Action not found";
    exit();
}



?>