/**
 * bootstrap-admin-template - Free Admin Template Based On Twitter Bootstrap 3.x
 * @version 2.4.1
 * @license MIT
 * @link https://github.com/puikinsh/Bootstrap-Admin-Template
 */
'use strict';

;(function (window) {
    var
    // Are we expecting a touch or a click?
    buttonPressedEvent = 'touchstart click',
        apiUrl = 'http://localhost/nailviecadmin/api/',
        data = {},
        Metis = function Metis() {
        this.init();
    };

    // Initialization method
    Metis.prototype.init = function () {
        this.buttonPressedEvent = buttonPressedEvent;
        this.apiUrl = apiUrl;
        this.data = data;
    };

    Metis.prototype.getViewportHeight = function () {

        var docElement = document.documentElement,
            client = docElement.clientHeight,
            inner = window.innerHeight;

        if (client < inner) return inner;else return client;
    };

    Metis.prototype.getViewportWidth = function () {

        var docElement = document.documentElement,
            client = docElement.clientWidth,
            inner = window.innerWidth;

        if (client < inner) return inner;else return client;
    };

    // Creates a Metis object.
    window.Metis = new Metis();

    //========================================================
    // CUSTOM: start
    //========================================================    

    data.get = function (url) {
        var defer = $.Deferred();

        $.ajax({
            url: apiUrl + url,
            success: function success(data) {
                try {
                    var json = JSON.parse(data);
                    defer.resolve(json);
                } catch (ex) {
                    defer.resolve(data);
                }
            },
            error: function error(_error) {
                console.log(_error);
            }
        });

        return defer.promise();
    };

    data.post = function (url, data) {
        var defer = $.Deferred();

        $.ajax({
            url: apiUrl + url,
            data: data,
            success: function success(data) {
                try {
                    var json = JSON.parse(data);
                    defer.resolve(json);
                } catch (ex) {
                    defer.resolve(data);
                }
            },
            error: function error(_error2) {
                console.log(_error2);
            }
        });

        return defer.promise();
    };

    data.put = function (url, data) {
        var defer = $.Deferred();

        $.ajax({
            url: apiUrl + url,
            data: data,
            success: function success(data) {
                try {
                    var json = JSON.parse(data);
                    defer.resolve(json);
                } catch (ex) {
                    defer.resolve(data);
                }
            },
            error: function error(_error3) {
                console.log(_error3);
            }
        });

        return defer.promise();
    };

    data.ownerShop = {
        renderSelectDOMByStatus: function renderSelectDOMByStatus(statusId, elementId) {
            data.get('admin/getShopOwnerStatus').then(function (data) {
                var s = '<select class="form form-control">';
                for (var i = 0; i < data.length; i++) {
                    var selected = Number(data[i].Id) === Number(statusId) ? 'selected' : '';

                    s += '<option value="' + data[i].Id + '" ' + selected + '>' + data[i].Name + '</option>';
                }
                s += '</select>';

                document.getElementById(elementId).innerHTML = s;
            });
        }
    };

    //========================================================
    // CUSTOM: end
    //========================================================

})(window);
'use strict';

;(function ($) {
    "use strict";

    var $navBar = $('nav.navbar'),
        $body = $('body'),
        $menu = $('#menu');

    function addPaddingTop(el, val) {
        el.css('padding-top', val);
    }
    function removePaddingTop(el) {
        el.css('padding-top', 'inherit');
    }
    function getHeight(el) {
        return el.outerHeight();
    }

    function init() {
        var isFixedNav = $navBar.hasClass('navbar-fixed-top');
        var bodyPadTop = isFixedNav ? $navBar.outerHeight(true) : 0;

        $body.css('padding-top', bodyPadTop);

        if ($body.hasClass('menu-affix')) {
            $menu.affix({
                offset: {
                    top: $menu.offset().top
                }
            }).css({
                height: function height() {
                    if ($(window).width() < 768) {
                        return $(window).height();
                    } else {
                        return $(window).height();
                    }
                },
                top: bodyPadTop - 1,
                bottom: 0
            });
            console.log($navBar.outerHeight(true));
        }
    }

    Metis.navBar = function () {
        var resizeTimer;
        init();
        $(window).resize(function () {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(init(), 250);
        });
    };
    return Metis;
})(jQuery);
'use strict';

;(function ($, Metis) {
  "use strict";
  // Define toggleFullScreen

  Metis.toggleFullScreen = function () {
    if (window.screenfull !== undefined && screenfull.enabled) {
      $('#toggleFullScreen').on(Metis.buttonPressedEvent, function (e) {
        screenfull.toggle(window.document[0]);
        $('body').toggleClass('fullScreen');
        e.preventDefault();
      });
    } else {
      $('#toggleFullScreen').addClass('hidden');
    }
  };
  // Define boxFullScreen
  Metis.boxFullScreen = function () {
    if (window.screenfull !== undefined && screenfull.enabled) {
      $('.full-box').on(Metis.buttonPressedEvent, function (e) {
        var $toggledPanel = $(this).parents('.box')[0];
        screenfull.toggle($toggledPanel);
        $(this).parents('.box').toggleClass('full-screen-box');
        $(this).parents('.box').children('.body').toggleClass('full-screen-box');
        $(this).children('i').toggleClass('fa-compress');
        e.preventDefault();
      });
    } else {
      $('.full-box').addClass('hidden');
    }
  };
  Metis.panelBodyCollapse = function () {
    var $collapseButton = $('.collapse-box'),
        $collapsedPanelBody = $collapseButton.closest('.box').children('.body');

    $collapsedPanelBody.collapse('show');

    $collapseButton.on(Metis.buttonPressedEvent, function (e) {
      var $collapsePanelBody = $(this).closest('.box').children('.body'),
          $toggleButtonImage = $(this).children('i');
      $collapsePanelBody.on('show.bs.collapse', function () {
        $toggleButtonImage.removeClass('fa-minus fa-plus').addClass('fa-spinner fa-spin');
      });
      $collapsePanelBody.on('shown.bs.collapse', function () {
        $toggleButtonImage.removeClass('fa-spinner fa-spin').addClass('fa-minus');
      });

      $collapsePanelBody.on('hide.bs.collapse', function () {
        $toggleButtonImage.removeClass('fa-minus fa-plus').addClass('fa-spinner fa-spin');
      });

      $collapsePanelBody.on('hidden.bs.collapse', function () {
        $toggleButtonImage.removeClass('fa-spinner fa-spin').addClass('fa-plus');
      });

      $collapsePanelBody.collapse('toggle');

      e.preventDefault();
    });
  };
  Metis.boxHiding = function () {
    $('.close-box').on(Metis.buttonPressedEvent, function () {
      $(this).closest('.box').hide('slow');
    });
  };
  return Metis;
})(jQuery, Metis || {});
'use strict';

;(function ($, Metis) {
    var $body = $('body'),
        $leftToggle = $('.toggle-left'),
        $rightToggle = $('.toggle-right'),
        $count = 0;

    Metis.metisAnimatePanel = function () {

        if ($('#left').length) {
            $leftToggle.on(Metis.buttonPressedEvent, function (e) {

                if ($(window).width() < 768) {
                    $body.toggleClass('sidebar-left-opened');
                } else {
                    switch (true) {
                        case $body.hasClass("sidebar-left-hidden"):
                            $body.removeClass("sidebar-left-hidden sidebar-left-mini");
                            break;
                        case $body.hasClass("sidebar-left-mini"):
                            $body.removeClass("sidebar-left-mini").addClass("sidebar-left-hidden");
                            break;
                        default:
                            $body.addClass("sidebar-left-mini");
                    }

                    e.preventDefault();
                }
            });
        } else {
            $leftToggle.addClass('hidden');
        }
        if ($('#right').length) {
            $rightToggle.on(Metis.buttonPressedEvent, function (e) {
                switch (true) {
                    // Close right panel
                    case $body.hasClass("sidebar-right-opened"):
                        $body.removeClass("sidebar-right-opened");
                        break;
                    default:
                        // Open right panel
                        $body.addClass("sidebar-right-opened");
                        if (!$body.hasClass("sidebar-left-mini") & !$body.hasClass("sidebar-left-hidden")) {
                            $body.addClass("sidebar-left-mini");
                        }
                }
                e.preventDefault();
            });
        } else {
            $rightToggle.addClass('hidden');
        }
    };
    return Metis;
})(jQuery, Metis || {});
'use strict';

;(function ($) {
   $(document).ready(function () {

      $('[data-toggle="tooltip"]').tooltip();

      $('#menu').metisMenu();
      Metis.navBar();
      Metis.metisAnimatePanel();
      Metis.toggleFullScreen();
      Metis.boxFullScreen();
      Metis.panelBodyCollapse();
      Metis.boxHiding();
   });
})(jQuery);