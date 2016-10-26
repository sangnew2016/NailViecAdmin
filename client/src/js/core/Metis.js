;(function(window) {
    var
      // Are we expecting a touch or a click?
      buttonPressedEvent = 'touchstart click',
      apiUrl = 'http://localhost/nailviecadmin/api/',





      Metis = function() {
          this.init();
      };

    // Initialization method
    Metis.prototype.init = function() {
        this.buttonPressedEvent = buttonPressedEvent;
        this.apiUrl = apiUrl;
    };

    Metis.prototype.getViewportHeight = function() {

        var docElement = document.documentElement,
                client = docElement.clientHeight,
                inner = window.innerHeight;

        if (client < inner)
            return inner;
        else
            return client;
    };

    Metis.prototype.getViewportWidth = function() {

        var docElement = document.documentElement,
                client = docElement.clientWidth,
                inner = window.innerWidth;

        if (client < inner)
            return inner;
        else
            return client;
    };

    Metis.prototype.getData = function(url) {
        var defer = $.Deferred();

        $.ajax({                
            url: apiUrl + url,
            success: function(data) {
                try {
                    var json = JSON.parse(data);
                    defer.resolve(json);
                } catch(ex) {
                    defer.resolve(data);
                }                
            },
            error: function(error) {
                console.log(error);
            }
        }); 

        return defer.promise();
    }

    Metis.prototype.postData = function(url, data) {
        var defer = $.Deferred();

        $.ajax({                
            url: apiUrl + url,            
            data: data,
            success: function(data) {
                try {
                    var json = JSON.parse(data);
                    defer.resolve(json);
                } catch(ex) {
                    defer.resolve(data);
                }                                    
            },
            error: function(error) {
                console.log(error);
            }
        }); 

        return defer.promise();
    }

    Metis.prototype.putData = function(url, data) {
        var defer = $.Deferred();

        $.ajax({                
            url: apiUrl + url,           
            data: data,
            success: function(data) {
                try {
                    var json = JSON.parse(data);
                    defer.resolve(json);
                } catch(ex) {
                    defer.resolve(data);
                }                                    
            },
            error: function(error) {
                console.log(error);
            }
        }); 

        return defer.promise();
    }

    // Creates a Metis object.
    window.Metis = new Metis();
})(window);
