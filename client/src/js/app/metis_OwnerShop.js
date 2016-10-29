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
        $('#dev-grid-shop-owner').on('click', '.row-shop-owner', function(event) {
            $('.row-shop-owner').css({backgroundColor: '#fff'});
            $(this).css({backgroundColor: '#ddd'});           

            var shopOwnerId = Number(this.getAttribute("id"));
            Metis.OwnerShop.Id = shopOwnerId;
            Metis.getData("admin/getShopOwner?id=" + shopOwnerId).then(function(shopOwner) {
                shopOwner = (shopOwner && shopOwner[0]) || {};
                loadShopOwner(shopOwner);
            });             
        });         
    }

    function registerOnActionCommand() {
        $('#dev-add-shop-owner').on('click', function(event) {
            fillValueInputControls({});
            showEditArea(true);
            Metis.OwnerShop.Id = 0;
            $('#dev-cancel-shop-owner').text('Cancel Adding');            
        });      
        $('#dev-cancel-shop-owner').on('click', function(event) {
            showEditArea(false);            
        });   
    }

    function fillValueInputControls(data) {
        document.getElementById('fullName').value = data.FullName || '';
        document.getElementById('phone').value = data.Phone || '';
        document.getElementById('emailAddress').value = data.Email || '';
        document.getElementById('password').value = '';
        document.getElementById('confirmPassword').value = '';       
    }

    function showEditArea(isShowed) {
        if (isShowed) {
            $('#dev-edit-shop-owner-area').show(100, function() {
                $('html, body').animate({ scrollTop: $('#dev-edit-shop-owner-area').height() - 50 }, 1000);
            });
            $('#dev-cancel-shop-owner').show();
        } else {
            $('#dev-edit-shop-owner-area').hide(100, function() {
                $('html, body').scrollTop();    
            }); 
            $('#dev-cancel-shop-owner').hide();
        }
    }

    $('#dev-shop-Owner-validate').validate({
        rules: {
            fullName: "required",
            phone: "required",
            emailAddress: {
                required: true,
                email: true
            },
            password: {
                required: false,
                minlength: 5
            },
            confirmPassword: {
                required: false,
                minlength: 5,
                equalTo: "#password"
            }        
        },
        errorClass: 'help-block',
        errorElement: 'span',
        highlight: function(element, errorClass, validClass) {
            $(element).parents('.form-group').removeClass('has-success').addClass('has-error');
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).parents('.form-group').removeClass('has-error').addClass('has-success');
        },
        submitHandler: function(form) {                    
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
                var param = {
                    "id": Metis.OwnerShop.Id || 0,
                    "fullName": document.getElementById('fullName').value,
                    "phone": document.getElementById('phone').value,
                    "emailAddress": document.getElementById('emailAddress').value,
                    "shopOwnerStatusId": 1,
                    "password": document.getElementById('password').value,
                    "confirmPassword": document.getElementById('confirmPassword').value
                };
                return param;
            }
        }
    });
};
  
return Metis;
})(jQuery);
