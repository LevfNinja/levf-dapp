/*
--------------------------------------------------------------
  Template Name: Olian - Responsive Admin Dashboard Template
  File: Core JS File
--------------------------------------------------------------
 */
"use strict";
$(document).ready(function() {
    /* -- Menu js -- */
    //$.sidebarMenu($('.vertical-menu'));
    $(function() {
//    	console.log("anonymous function:",window.location);
//    	let count=0;
//        for (var a = window.location, abc = $(".vertical-menu a").filter(function() {
//        	console.log("a:",a.href,"this.href:",this.href);
//            return this.href == a.href;
//        }).addClass("active").parent().addClass("active"); ;count++) {
//        	console.log("count:",count,"a:",a,"this.href:",this.href);
//
//            if(!abc.is("li")) break;
//            abc = abc.parent().addClass("in").parent().addClass("active");
//        }

//        var a = window.location;
//        var anchors = document.querySelectorAll(".vertical-menu a");
//        for (var i=0;i<anchors.length;i++) {
//        	if(anchors[i].href==a.href) {
//        		anchors[i].classList.add("active");
//        		anchors[i].parentElement.classList.add("active");
//        	} else {
//        		anchors[i].classList.remove("active");
//        		anchors[i].parentElement.classList.remove("active");
//        	}
//        }
//        updateMenuTabs();
    });




    /* -- Infobar Setting Sidebar -- */
    $("#infobar-settings-open").on("click", function(e) {
        e.preventDefault();
        $(".infobar-settings-sidebar-overlay").css({"background": "rgba(0,0,0,0.4)", "position": "fixed"});
        $("#infobar-settings-sidebar").addClass("sidebarshow");
    });
    $("#infobar-settings-close").on("click", function(e) {
        e.preventDefault();
        $(".infobar-settings-sidebar-overlay").css({"background": "transparent", "position": "initial"});
        $("#infobar-settings-sidebar").removeClass("sidebarshow");
    });
    /* -- Menu Hamburger -- */
    $(".menu-hamburger").on("click", function(e) {
        e.preventDefault();
        $("body").toggleClass("toggle-menu");
        $(".menu-hamburger i").toggle();
    });
    /* -- Menu Topbar Hamburger -- */
    $(".topbar-toggle-hamburger").on("click", function(e) {
        e.preventDefault();
        $("body").toggleClass("topbar-toggle-menu");
        $(".topbar-toggle-hamburger i").toggle();
    });
    /* -- Media Size -- */
    function mediaSize() {
        if (window.matchMedia('(max-width: 767px)').matches) {
            $("body").removeClass("toggle-menu");
            $(".menu-hamburger i.menu-hamburger-close").hide();
            $(".menu-hamburger i.menu-hamburger-collapse").show();
        }
    };
    mediaSize();
    window.addEventListener('resize', mediaSize, false);
    /* -- Bootstrap Popover -- */
    $('[data-toggle="popover"]').popover();
    /* -- Bootstrap Tooltip -- */
    $('[data-toggle="tooltip"]').tooltip();
});