centerImage
===========

jQuery plugin to auto resize and position image for picture background and responsive web design.

#### Features:

* Auto resize image to fully fill the container 
* Keep width/height ratio
* Auto center the image position

## [Live Demo](http://jsbin.com/umolem/16)

## Screenshots

#### Large

![alt text][screenshot1]

#### Small

![alt text][screenshot2]

#### Wide

![alt text][screenshot3]


## Usage:

    <div id="image-background" class="image-background">
        <img src="http://farm9.staticflickr.com/8460/8041355249_258d9fc96f_b.jpg" class="centerImage">
    </div>


    $(document).ready(function() {
        jQuery("#image-background").centerImage();
    });



[screenshot1]: https://raw.github.com/zhangxin840/centerImage/master/screenshot1.jpg "screenshot"
[screenshot2]: https://raw.github.com/zhangxin840/centerImage/master/screenshot2.jpg "screenshot"
[screenshot3]: https://raw.github.com/zhangxin840/centerImage/master/screenshot3.jpg "screenshot"
