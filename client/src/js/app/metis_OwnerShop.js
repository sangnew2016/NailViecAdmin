;(function($){
  "use strict";

  Metis.OwnerShop = function() {

    var config = {
        getListApi: 'admin/getShopOwners',
        getDetailApi: 'admin/getShopOwner?id=',
        putDetailApi: 'admin/putShopOwner',
        postDetailApi: 'admin/postShopOwner',

        gridId: 'dev-grid-shop-owner',
        tableId: 'dev-shop-owner-datatable',
        cancelBtnId: 'dev-cancel-shop-owner',
        addBtnId: 'dev-add-shop-owner',
        editAreaId: 'dev-edit-shop-owner-area',
        formValidate: 'dev-shop-Owner-validate',

        rowClass: 'row-shop-owner',
        sortingClass: 'sortableTable',

        defaultStatusId: 1,
        model: {
            id: 'Id',
            fullName: 'FullName',
            phone: 'Phone',
            email: 'Email',
            status: 'ShopOwnerStatusId',
            password: 'Password',
            confirmPassword: 'ConfirmPassword'
        }
        
    };

    init();
      
    function init() {        
        loadGridShopOwnerByData();
        registerOnSelectedShopOwner();
        registerOnActionCommand();
    }

    function loadGridShopOwnerByData() {
        Metis.getData(config.getListApi).then(function(data) {
            showEditArea(false);
            $('#' + config.gridId).html(loadGridShopOwner(data));        
            $('.' + config.sortingClass).tablesorter();            
            $('#' + config.tableId).dataTable({});
        });
    }

    function loadGridShopOwner(data) {
      var str = ""; 
      str += '<table id="' + config.tableId + '" class="table table-bordered table-hover">';
      str += '  <thead>';
      str += '    <tr>';
      str += '      <th>#</th>';
      str += '      <th>Full Name</th>';
      str += '      <th>Phone</th>';
      str += '      <th>Email</th>';
      str += '      <th>Status</th> ';                                
      str += '    </tr>';
      str += '  </thead>';
      str += '  <tbody>';
      for(var i = 0; i < data.length; i++) {
        var shopOwner = data[i];
        str += '    <tr class="' + config.rowClass + '" id="' + shopOwner[config.model.id] + '">';
        str += '      <td>' + shopOwner[config.model.id] + '</td>';
        str += '      <td>' + shopOwner[config.model.fullName] + '</td>';
        str += '      <td>' + shopOwner[config.model.phone] + '</td>';
        str += '      <td>' + shopOwner[config.model.email] + '</td>';
        str += '      <td>' + shopOwner[config.model.status] + '</td>';                                  
        str += '    </tr>';
      }                               
      str += '  </tbody>';
      str += '</table>';
      return str;
    }

    function loadShopOwner(data) {
        fillValueInputControls(data);       
        showEditArea(true); 
        $('#' + config.cancelBtnId).text('Cancel Editing');                
    }

    function registerOnSelectedShopOwner() {
        $('#' + config.gridId).on('click', '.' + config.rowClass, function(event) {
            $('.' + config.rowClass).css({backgroundColor: '#fff'});
            $(this).css({backgroundColor: '#ddd'});           

            var shopOwnerId = Number(this.getAttribute("id"));
            Metis.OwnerShop.Id = shopOwnerId;
            Metis.getData(config.getDetailApi + shopOwnerId).then(function(shopOwner) {
                shopOwner = (shopOwner && shopOwner[0]) || {};
                loadShopOwner(shopOwner);
            });             
        });         
    }

    function registerOnActionCommand() {
        $('#' + config.addBtnId).on('click', function(event) {
            fillValueInputControls({});
            showEditArea(true);
            Metis.OwnerShop.Id = 0;
            $('#' + config.cancelBtnId).text('Cancel Adding');            
        });      
        $('#' + config.cancelBtnId).on('click', function(event) {
            showEditArea(false);            
        });   
    }
    
    function fillValueInputControls(data) {
        document.getElementById(config.model.fullName).value = data[config.model.fullName] || '';
        document.getElementById(config.model.phone).value = data[config.model.phone] || '';
        document.getElementById(config.model.email).value = data[config.model.email] || '';
        document.getElementById(config.model.password).value = '';
        document.getElementById(config.model.confirmPassword).value = '';       
    }

    function showEditArea(isShowed) {
        if (isShowed) {
            $('#' + config.editAreaId).show(100, function() {
                $('html, body').animate({ scrollTop: $('#' + config.editAreaId).height() - 50 }, 1000);
            });
            $('#' + config.cancelBtnId).show();
        } else {
            $('#' + config.editAreaId).hide(100, function() {
                $('html, body').scrollTop();    
            }); 
            $('#' + config.cancelBtnId).hide();
        }
    }
    

    //======================================
    // UPDATE & INSERT
    //======================================

    $('#dev-shop-Owner-validate').validate({
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

        rule[config.model.fullName] = "required",
        rule[config.model.phone] = "required",
        rule[config.model.email] = {
            required: true,
            email: true
        },
        rule[config.model.password] = {
            required: false,
            minlength: 5
        },
        rule[config.model.confirmPassword] = {
            required: false,
            minlength: 5,
            equalTo: "#" + config.model.password
        }
        return rule;
    }

    function onSubmitHandler(form) {                    
        var postedData = getPostedShopOwnerInput();

        if(Metis.OwnerShop.Id){
            Metis.putData("admin/putShopOwner", postedData).then(function(data) {
                loadGridShopOwnerByData();
                showEditArea(false);
            });
        }else{
            Metis.postData("admin/postShopOwner", postedData).then(function(data) {
                loadGridShopOwnerByData();
                showEditArea(false);
            });
        }                
        return false;  // blocks regular submit since you have ajax

        function getPostedShopOwnerInput() {
            var param = {};
            param[config.model.id] = Metis.OwnerShop.Id || 0,
            param[config.model.fullName] = document.getElementById(config.model.fullName).value,
            param[config.model.phone] = document.getElementById(config.model.phone).value,
            param[config.model.email] = document.getElementById(config.model.email).value,
            param[config.model.status] = config.defaultStatusId,
            param[config.model.password] = document.getElementById(config.model.password).value,
            param[config.model.confirmPassword] = document.getElementById(config.model.confirmPassword).value
             
            return param;
        }    
         
    }
};
  
return Metis;
})(jQuery);
