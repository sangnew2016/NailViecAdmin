;(function($) {
    $(document).ready(function() {
    
        $('[data-toggle="tooltip"]').tooltip();
 
        $('#menu').metisMenu();
        Metis.navBar();
        Metis.metisAnimatePanel();
        Metis.toggleFullScreen();
        Metis.boxFullScreen();
        Metis.panelBodyCollapse();
        Metis.boxHiding();
        init();   
    });

    function init() {

        //set url by environment
        var urlLogout = window.env.isDevelopment ? window.env.logoutUrlLocal : window.env.logoutUrlHost;
        $('#logout').attr('href', urlLogout);

    }

})(jQuery);
