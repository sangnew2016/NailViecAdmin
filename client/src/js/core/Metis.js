;(function(window) {
    var
        // Are we expecting a touch or a click?
        buttonPressedEvent = 'touchstart click',
        apiUrl = 'http://localhost:8000/nailviecadmin/api/',
        data = {},

        Metis = function() {
          this.init();
        };

    // Initialization method
    Metis.prototype.init = function() {
        this.buttonPressedEvent = buttonPressedEvent;
        this.apiUrl = apiUrl;
        this.data = data;
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

    // Creates a Metis object.
    window.Metis = new Metis();



    //========================================================
    // CUSTOM: start
    //========================================================    

    data.get = function(url) {
        var defer = $.Deferred();

        $.ajax({                
            url: apiUrl + url,
            success: function(data) {
                try {
                    var json = JSON.parse(data);
                    defer.resolve(json);
                } catch(ex) {
                    handleError(defer, data);
                }                
            },
            error: function(error) {
                console.log(error);
            }
        }); 

        return defer.promise();
    }

    data.post = function(url, data) {
        var defer = $.Deferred();

        $.ajax({                
            url: apiUrl + url,            
            data: data, 
            success: function(data) {
                try {
                    var json = JSON.parse(data);
                    defer.resolve(json);
                } catch(ex) {
                    handleError(defer, data);
                }                                    
            },
            error: function(error) {
                console.log(error);
            }
        });

        return defer.promise();
    }

    data.put = function(url, data) {
        var defer = $.Deferred();

        $.ajax({                
            url: apiUrl + url,           
            data: data,
            success: function(data) {
                try {
                    var json = JSON.parse(data);
                    defer.resolve(json);
                } catch(ex) {
                    handleError(defer, data);
                }                                    
            },
            error: function(error) {
                console.log(error);
            }
        }); 

        return defer.promise();
    }
    
    function handleError(defer, data) {
        data = data && data.trim();
        if (data.indexOf('@error:noauthentication') >= 0) {
            defer.reject(data); 
            var url = data.replace('@error:noauthentication', '');
            location.assign(url);
            return;
        }

        if (data.indexOf('@error') >= 0) {
            defer.reject(data);

            var message = data.replace('@error:', '');
            alert(message);
            return;                        
        }
        defer.resolve(data);
    }






    data.ownerShop = {
        renderSelectDOMByStatus: function(statusId, elementId) {            
            data.get('admin/getShopOwnerStatus').then(function(data) {                 
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

    data.shop = {
        renderSelectDOMByStatus: function(statusId, elementId) {            
            data.get('admin/getShopStatus').then(function(data) {                 
                var s = '<select class="form form-control">';
                for (var i = 0; i < data.length; i++) {
                    var selected = Number(data[i].Id) === Number(statusId) ? 'selected' : '';

                    s += '<option value="' + data[i].Id + '" ' + selected + '>' + data[i].Name + '</option>';
                }    
                s += '</select>';    
                
                document.getElementById(elementId).innerHTML = s; 
            });            
        },
        renderSelectDOMByArea: function(statusId, elementId) {
            data.get('admin/getAreasBySelectDom').then(function(data) {                 
                var s = '<select class="form form-control chzn-select-area">';
                for (var i = 0; i < data.length; i++) { 
                    var selected = Number(data[i].Id) === Number(statusId) ? 'selected' : '';

                    s += '<option value="' + data[i].Id + '" ' + selected + '>' + data[i].Name + '</option>';
                }    
                s += '</select>';    
                
                document.getElementById(elementId).innerHTML = s;
                setTimeout(function() { $('.chzn-select-area').chosen() }, 1000);
            });            
        },
        renderSelectDOMByShopOwner: function(statusId, elementId) {            
            data.get('admin/getShopOwnerBySelectDom').then(function(data) {                 
                var s = '<select class="form form-control chzn-select-shopowner">';
                for (var i = 0; i < data.length; i++) {
                    var selected = Number(data[i].Id) === Number(statusId) ? 'selected' : '';

                    s += '<option value="' + data[i].Id + '" ' + selected + '>' + data[i].Name + '</option>';
                }    
                s += '</select>';    
                
                document.getElementById(elementId).innerHTML = s; 
                setTimeout(function() { $('.chzn-select-shopowner').chosen() }, 1000);                
            });            
        },
    };

    data.job = {
        renderSelectDOMByStatus: function(statusId, elementId) {            
            data.get('admin/getJobStatus').then(function(data) {                 
                var s = '<select class="form form-control">';
                for (var i = 0; i < data.length; i++) {
                    var selected = Number(data[i].Id) === Number(statusId) ? 'selected' : '';

                    s += '<option value="' + data[i].Id + '" ' + selected + '>' + data[i].Name + '</option>';
                }    
                s += '</select>';    
                
                document.getElementById(elementId).innerHTML = s; 
            });            
        },     
        renderSelectDOMByShop: function(statusId, elementId) {            
            data.get('admin/getShopBySelectDom').then(function(data) {                 
                var s = '<select class="form form-control chzn-select-jobshop">';
                for (var i = 0; i < data.length; i++) {
                    var selected = Number(data[i].Id) === Number(statusId) ? 'selected' : '';

                    s += '<option value="' + data[i].Id + '" ' + selected + '>' + data[i].Name + '</option>';
                }    
                s += '</select>';    
                
                document.getElementById(elementId).innerHTML = s;
                setTimeout(function() { $('.chzn-select-jobshop').chosen() }, 1000);   
            });            
        },
    };

    //========================================================
    // CUSTOM: end
    //========================================================




















})(window);
