;(function($){
  "use strict";

  Metis.Shop = function() {

    var config = {
        getListApi: 'admin/getShopList',
        getDetailApi: 'admin/getShopItem?id=',
        putDetailApi: 'admin/putShopItem',
        postDetailApi: 'admin/postShopItem',

        gridId: 'dev-grid-shop-owner',
        tableId: 'dev-shop-owner-datatable',
        cancelBtnId: 'dev-cancel-shop-owner',
        addBtnId: 'dev-add-shop-owner',
        editAreaId: 'dev-edit-shop-owner-area',
        formValidate: 'dev-shop-Owner-validate',

        rowClass: 'row-shop',
        sortingClass: 'sortableTable',

        defaultId: 0,
        defaultStatusId: 1,
        model: {
            id: 'Id',
            name: 'ShopName',
            address: 'ShopAddress',
            longtitude: 'Longtitude',
            latitude: 'Latitude',
            statusId: 'ShopStatusId',
            ownerId: 'ShopOwnerId',
            areaId: 'AreaId',

            statusName: 'ShopStatusName',
            ownerName: 'ShopOwnerName',
            ownerPhone: 'ShopOwnerPhone',
            ownerEmail: 'ShopOwnerEmail',
            addressMap: 'mapByAddress',
            addressMapLatDefault: -12.043333,
            addressMapLngDefault: -77.028333            
        }
        
    };
    var addressMap;

    init();
      
    function init() {        
        loadGridByData();
        registerOnSelectedRow();
        registerOnActionCommand(); 
    }

    function loadGridByData() {
        Metis.data.get(config.getListApi).then(function(data) {
            showEditArea(false, 0);
            $('#' + config.gridId).html(buildHtmlGrid(data));        
            //$('.' + config.sortingClass).tablesorter();            
            $('#' + config.tableId).dataTable({
                "order": [[ 1, "asc" ]]
            });
        });

        function buildHtmlGrid(data) {
            var str = ""; 
            str += '<table id="' + config.tableId + '" class="table table-bordered table-hover">';
            str += '  <thead>';
            str += '    <tr>';
            str += '      <th>#</th>';
            str += '      <th>Shop Name</th>';
            str += '      <th>Address</th>';
            str += '      <th>Owner Name</th>';
            str += '      <th>Owner Phone</th>';
            str += '      <th>Owner Email</th> ';                                
            str += '      <th>Status</th>';
            str += '    </tr>';
            str += '  </thead>';
            str += '  <tbody>';
            for(var i = 0; i < data.length; i++) {
                var shopOwner = data[i];
                str += '    <tr class="' + config.rowClass + '" id="' + shopOwner[config.model.id] + '">';
                str += '      <td>' + shopOwner[config.model.id] + '</td>';
                str += '      <td>' + shopOwner[config.model.name] + '</td>';
                str += '      <td>' + shopOwner[config.model.address] + '</td>';
                str += '      <td>' + shopOwner[config.model.ownerName] + '</td>';
                str += '      <td>' + shopOwner[config.model.ownerPhone] + '</td>';
                str += '      <td>' + shopOwner[config.model.ownerEmail] + '</td>';                
                str += '      <td>' + shopOwner[config.model.statusName] + '</td>';                                  
                str += '    </tr>';
            }                               
            str += '  </tbody>';
            str += '</table>';
            return str;
        }
    }    

    function registerOnSelectedRow() {
        $('#' + config.gridId).on('click', '.' + config.rowClass, onSelectRow);
        $('#' + config.model.address).on('input', onChangeAddressMap);

        function onSelectRow() {
            changeBackgroundOnSelectedRow(this);                     
            config.defaultId = Number(this.getAttribute("id"));             
            Metis.data.get(config.getDetailApi + config.defaultId).then(function(rows) {
                var rowData = (rows && rows[0]) || {};
                fillDataIntoDetailUI(rowData);        
            });    
        }

        function changeBackgroundOnSelectedRow(rowElement) {
            $('.' + config.rowClass).css({backgroundColor: '#fff'});
            $(rowElement).css({backgroundColor: '#ddd'});  
        }

        function fillDataIntoDetailUI(data) {
            fillValueInputControls(data);       
            showEditArea(true); 
            $('#' + config.cancelBtnId).text('Cancel Editing');                
        }

        function onChangeAddressMap(e) {
            e.preventDefault();
            GMaps.geocode({
                address: $('#' + config.model.address).val().trim(),
                callback: function(results, status) {
                    if (status === 'OK') {
                        var latlng = results[0].geometry.location;
                        if(!addressMap) {
                           alert('AddressMap is not initilized yet');
                           return;    
                        }

                        addressMap.setCenter(latlng.lat(), latlng.lng());
                        addressMap.addMarker({
                            lat: latlng.lat(),
                            lng: latlng.lng(),
                            title: $('#' + config.model.name).val() || '' 
                        });
                    }
                }
            });
        }        
    }

    function registerOnActionCommand() {
        $('#' + config.addBtnId).on('click', function(event) {
            fillValueInputControls({});
            showEditArea(true);
            config.defaultId = 0;
            $('#' + config.cancelBtnId).text('Cancel Adding');            
        });

        $('#' + config.cancelBtnId).on('click', function(event) {
            showEditArea(false);            
        });   
    }
    
    function fillValueInputControls(data) {
        document.getElementById(config.model.name).value = data[config.model.name] || '';
        document.getElementById(config.model.address).value = data[config.model.address] || '';
        document.getElementById(config.model.longtitude).value = data[config.model.longtitude] || '';
        document.getElementById(config.model.latitude).value = data[config.model.latitude] || '';            

        //render combobox
        Metis.data.shop.renderSelectDOMByStatus(data[config.model.statusId], config.model.statusId);       
        Metis.data.shop.renderSelectDOMByArea(data[config.model.areaId], config.model.areaId);
        Metis.data.shop.renderSelectDOMByShopOwner(data[config.model.ownerId], config.model.ownerId);
        
        //render googlemap
        addressMap = new GMaps({
            el: '#' + config.model.addressMap,
            lat: data[config.model.latitude] || config.model.addressMapLatDefault,
            lng: data[config.model.longtitude] || config.model.addressMapLngDefault
        });
        addressMap.addMarker({
            lat: data[config.model.latitude] || config.model.addressMapLatDefault,
            lng: data[config.model.longtitude] || config.model.addressMapLngDefault,
            title: data[config.model.name] || ''            
        });
    }

    function showEditArea(isShowed, delay = 100) {
        if (isShowed) {
            $('#' + config.editAreaId).show(100, function() {
            //    $('html, body').animate({ scrollTop: $('#' + config.editAreaId).height() - 50 }, 1000);
            });
            $('#' + config.cancelBtnId).show();
        } else {
            $('#' + config.editAreaId).hide(100, function() {
            //    $('html, body').scrollTop();    
            }); 
            $('#' + config.cancelBtnId).hide();
        }
    }
    

    //======================================
    // UPDATE & INSERT
    //======================================

    $('#' + config.formValidate).validate({
        rules: setRule(),
        errorClass: 'help-block',
        errorElement: 'span',
        highlight: function(element, errorClass, validClass) {
            $(element).parents('.form-group').removeClass('has-success').addClass('has-error');
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).parents('.form-group').removeClass('has-error').addClass('has-success');
        },
        submitHandler: onSubmitHandler
    });

    function setRule() {
        var rule = {};
        rule[config.model.name] = "required";
        rule[config.model.address] = "required";
        rule[config.model.longtitude] = "required";
        rule[config.model.latitude] = "required";
        //rule[config.model.shopStatusId] = "required";
        //rule[config.model.shopOwnerId] = "required";
        //rule[config.model.areaId] = "required";    

        return rule;
    }

    function onSubmitHandler(form) {                    
        var postedData = getParameters();

        if (config.defaultId){
            Metis.data.put(config.putDetailApi, postedData).then(function(data) {
                loadGridByData();
                showEditArea(false);
            });
        } else { 
            Metis.data.post(config.postDetailApi, postedData).then(function(data) {
                loadGridByData();
                showEditArea(false);
            });
        }                
        return false;  // blocks regular submit since you have ajax

        function getParameters() {
            var param = {};
            param[config.model.id] = config.defaultId || 0;
            param[config.model.name] = document.getElementById(config.model.name).value;
            param[config.model.address] = document.getElementById(config.model.address).value;
            param[config.model.longtitude] = document.getElementById(config.model.longtitude).value;
            param[config.model.latitude] = document.getElementById(config.model.latitude).value;

            var selectedValueStatus = $('#' + config.model.statusId + ' select').find(":selected").val();
            param[config.model.statusId] = selectedValueStatus;    

            var selectedValueOwner = $('#' + config.model.ownerId + ' select').find(":selected").val();
            param[config.model.ownerId] = selectedValueOwner;

            var selectedValueArea = $('#' + config.model.areaId + ' select').find(":selected").val();
            param[config.model.areaId] = selectedValueArea;
            
            if(!config.defaultId) {                
                param[config.model.statusId] = config.defaultStatusId;
            }   

            return param;
        }    
         
    }
    
};
  
return Metis;
})(jQuery);
