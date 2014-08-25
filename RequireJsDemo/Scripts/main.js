console.info("main加载成功");
require.config({
    paths: {
        "jquery": "/Scripts/jquery/jquery-1.8.2.min",
        "backbone": "/Scripts/Backbone/backbone-min",
        "underscore": "/Scripts/Underscore/underscore-min",
        'domready': '/Scripts/Plugin/domReady',//插件 作用：dom加载完毕执行
        'text':'/Scripts/Plugin/text'//插件 作用：加载文本
    },
    shim: {
        'underscore': {
            exports:'_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports:'Backbone'
        }
    }
});
require(['jquery', 'underscore', 'backbone'],
    function($, _, Backbone) {
        console.info("require 1");
    });

require(['text!/Content/template/template1.template'], function (temp) {
    $("body").html(temp);
});

require(['domready!'], function(doc) {
    console.info(doc);
    require(['jquery', 'underscore', 'backbone'],
    function ($, _, Backbone) {
        console.info("require 2");
    });
});