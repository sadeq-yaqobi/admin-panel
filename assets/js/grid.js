$(document).ready(function () {
  function removeAllSidebarToggleClass() {
    $("#sidebar-toggle-hide").removeClass("d-md-inline d-none");
    $("#sidebar-toggle-show").removeClass("d-md-none d-inline");
  }

  $("#sidebar-toggle-hide").click(function () {
    $("#sidebar").fadeOut(300);
    $("#main-body").animate({ width: "100%" }, 300);
    setTimeout(function () {
      removeAllSidebarToggleClass();
      $("#sidebar-toggle-hide").addClass("d-none");
      $("#sidebar-toggle-show").removeClass("d-none");
    }, 300);
  });

  $("#sidebar-toggle-show").click(function () {
    $("#sidebar").fadeIn(300);
    setTimeout(function () {
      removeAllSidebarToggleClass();
      $("#sidebar-toggle-hide").removeClass("d-none");
      $("#sidebar-toggle-show").addClass("d-none");
    }, 300);
  });

  $("#menu-toggle").click(function () {
    $("#body-header").toggle(300);
  });

  $("#search-toggle").click(function () {
    $("#search-toggle").removeClass("d-md-inline");
    $("#search-input").animate({ width: "13rem" }, 300);
    $("#search-area").addClass("d-md-inline");
  });
  $("#search-area-hide").click(function () {
    $("#search-input").animate({ width: "0" }, 300);
    setTimeout(function () {
      $("#search-toggle").addClass("d-md-inline");
      $("#search-area").removeClass("d-md-inline");
    }, 250);
  });
  // Toggle header notification on click
  $("#header-notification-toggle").click(function () {
    $("#header-notification").fadeToggle(300);
  });

  // Hide header notification on click outside of element
  $(document).mouseup(function (e) {
    var notificationCont = $("#header-notification");
    if (
      !notificationCont.is(e.target) &&
      notificationCont.has(e.target).length === 0
    ) {
      notificationCont.hide();
    }
  });

  // Toggle header comment on click
  $("#header-comment-toggle").click(function () {
    $("#header-comment").fadeToggle(300);
  });

  // Hide header comment on click outside of element
  $(document).mouseup(function (e) {
    var commentCont = $("#header-comment");
    if (!commentCont.is(e.target) && commentCont.has(e.target).length === 0) {
      commentCont.hide();
    }
  });

  // Toggle header profile on click
  $("#header-profile-toggle").click(function () {
    $("#header-profile").fadeToggle(300);
  });

  // Hide header profile on click outside of element
  $(document).mouseup(function (e) {
    var profileCont = $("#header-profile");
    if (!profileCont.is(e.target) && profileCont.has(e.target).length === 0) {
      profileCont.hide();
    }
  });

  $(".slider-dropdown-toggle").click(function () {
    var thisElem = $(this);
    var parentElem = thisElem.parent();
    var angleIconElem = thisElem.children(".sidebar-angle-icon");

    if (parentElem.hasClass("sidebar-group-link-active")) {
      parentElem.removeClass("sidebar-group-link-active");
      angleIconElem.removeClass("fa-angle-down").addClass("fa-angle-left");
    } else {
      $(".slider-dropdown-toggle")
        .not(thisElem)
        .parent()
        .removeClass("sidebar-group-link-active");
      $(".slider-dropdown-toggle")
        .not(thisElem)
        .parent()
        .children(".slider-dropdown-toggle")
        .children(".sidebar-angle-icon")
        .addClass("fa-angle-left");
      $(".slider-dropdown-toggle")
        .not(thisElem)
        .parent()
        .children(".slider-dropdown-toggle")
        .children(".sidebar-angle-icon")
        .removeClass("fa-angle-down");
      parentElem.addClass("sidebar-group-link-active");
      angleIconElem.addClass("fa-angle-down").removeClass("fa-angle-left");
    }
  });

  $("#full-screen").click(function () {
    toggleFullScreen();
  });

  function toggleFullScreen() {
    if (
      (document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)
    ) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullscreen) {
        document.documentElement.mozRequestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
      $("#screen-compress").removeClass("d-none");
      $("#screen-expand").addClass("d-none");
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
      $("#screen-compress").addClass("d-none");
      $("#screen-expand").removeClass("d-none");
    }
  }
});
