"use strict"

$(window).on("load", function() {
    $('.btn-forget').on('click',function(e){
        e.preventDefault();
       $('.form-items','.form-content').addClass('hide-it');
       $('.form-sent','.form-content').addClass('show-it');
    });
    $('.btn-tab-next').on('click',function(e){
        e.preventDefault();
        $('.nav-tabs .nav-item > .active').parent().next('li').find('a').trigger('click');
    });
});


        function changecss() {
            var links = document.getElementsByTagName("nav");
    
            for (var i = 0; i < links.length; i++) {
                var link = links[i],
                    classes = link.getAttribute("class");
    
                if (classes.indexOf("main-nav") > -1) {
                    link.onmouseover = function () {
                        this.setAttribute("class", classes + "main-nav--expanded");
                    }
                    // Remove active class
                    link.onmouseout = function () {
                        this.setAttribute("class", "main-nav");
                    }
                }
            }
        }
    