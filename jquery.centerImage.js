;(function($) {"use strict";
    var pluginName = 'centerImage';

    var pluginController = function(element, theOptions) {
        var $container = $(element);

        var defaults = {
            imgClass : "centerImage"
        };
        // Get options saved within $container's data attributes
        var meta = $container.data(pluginName + '-options');
        var options = $.extend(defaults, meta, theOptions);

        var $img = $container.find("img."+ options.imgClass);
        var tempImg = new Image();
        var init = function() {
            $img.css({
                position: "absolute",
                "max-width": "none",
                "max-height": "none"
            });

            tempImg.src = $img.attr("src");
            centerImage();
            $(window).on('resize.'+ pluginName + ' '+ 'orientationchange.'+ pluginName, centerImage);
        };

        var getImageDim = function() {
            var $imgContainer = $container;
            var containerWidth = $imgContainer.width();
            var containerHeight = $imgContainer.height();
            var containerRatio = containerHeight / containerWidth;
            var imageWidth = tempImg.width;
            var imageHeight = tempImg.height;
            var imageRatio = imageHeight / imageWidth;
            var necontainerWidth;
            var necontainerHeight;

            if (containerRatio > imageRatio) {
                necontainerHeight = containerHeight;
                necontainerWidth = containerHeight / imageRatio;
            } else {
                necontainerHeight = containerWidth * imageRatio;
                necontainerWidth = containerWidth;
            }

            return {
                width : necontainerWidth,
                height : necontainerHeight,
                left : (containerWidth - necontainerWidth ) / 2,
                top : (containerHeight - necontainerHeight ) / 2
            };
        };

        // apply style for bg image and canvas
        var centerImage = function() {
            var dim = getImageDim();
            var styleCSS = {
                width : dim.width,
                height : dim.height,
                left : dim.left,
                top : dim.top
            };

            $img.css(styleCSS);
        };

        // Destroy the warp object without removing elements
        var destroy = function() {
            // Unbind events
            $container.off('.'+ pluginName);
            $container.find('*').off('.'+ pluginName);
            // Remove data
            $container.removeData(pluginName);
            $container = null;
        };

        // Wapper object
        var that = {};
        that.options = options;
        that.destroy = destroy;

        // Initialize the wrapper object to generate elements of the widget
        init();

        //
        // Store wrapper object in $container using jQuery's $.data function.
        // Usage: console.log($('#theListener').data('jqListener'));
        $container.data(pluginName, that);
    };

    //
    // jQuery function
    //
    $.fn[pluginName] = function(options) {
        this.each(function() {
            pluginController(this, options);
        });
        // Chain-ability of jQuery objects
        return this;
    };
})(jQuery);