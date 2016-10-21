;(function($){
  "use strict";

  Metis.OwnerShop = function() {

    init();
      
    function init() {        
        loadGridShopOwnerByData();
        registerOnSelectedShopOwner();
        registerOnActionCommand();
    }

    function loadGridShopOwnerByData() {
        Metis.getData("admin/getShopOwners").then(function(data) {
            showEditArea(false);

            $('#dev-grid-shop-owner').html(loadGridShopOwner(data));

            /*----------- BEGIN TABLESORTER CODE -------------------------*/
            /* required jquery.tablesorter.min.js*/
            $(".sortableTable").tablesorter();
            /*----------- END TABLESORTER CODE -------------------------*/

            /*----------- BEGIN datatable CODE -------------------------*/
            $('#dev-shop-owner-datatable').dataTable({

            });
        });
    }

    function loadGridShopOwner(data) {
      var str = ""; 
      str += '<table id="dev-shop-owner-datatable" class="table table-bordered table-hover">';
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
        str += '    <tr class="row-shop-owner" id="' + shopOwner.Id + '">';
        str += '      <td>' + shopOwner.Id + '</td>';
        str += '      <td>' + shopOwner.FullName + '</td>';
        str += '      <td>' + shopOwner.Phone + '</td>';
        str += '      <td>' + shopOwner.Email + '</td>';
        str += '      <td>' + shopOwner.ShopOwnerStatusId + '</td>';                                  
        str += '    </tr>';
      }                               
      str += '  </tbody>';
      str += '</table>';
      return str;
    }

    function loadShopOwner(data) {
        fillValueInputControls(data);       
        showEditArea(true); 
        $('#dev-cancel-shop-owner').text('Cancel Editing');                
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
            $('#dev-cancel-shop-owner').text('Cancel Adding');            
        });  

        $('#dev-save-shop-owner').on('click', function(event) {
            var shopOwnerId = Metis.OwnerShop.Id || null;
            var postedData = getPostedShopOwnerInput();

            if(shopOwnerId){
                Metis.putData("admin/putShopOwner?id=" + shopOwnerId, postedData).then(function(data) {
                    loadGridShopOwnerByData();
                    showEditArea(false);
                });
            }else{
                Metis.postData("admin/postShopOwner", postedData).then(function(data) {
                    loadGridShopOwnerByData();
                    showEditArea(false);
                });
            }
            

            function getPostedShopOwnerInput() {
                var param = {
                    "fullName": document.getElementById('fullName').value,
                    "phone": document.getElementById('phone').value,
                    "emailAddress": document.getElementById('emailAddress').value,
                    "password": document.getElementById('password').value,
                    "confirmPassword": document.getElementById('confirmPassword').value
                };
                return param;
            }
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

    $('#shopOwner-block-validate').validate({
        rules: {
            fullName: "required",
            phone: "required",
            emailAddress: {
                required: true,
                email: true
            }           
        },
        errorClass: 'help-block',
        errorElement: 'span',
        highlight: function(element, errorClass, validClass) {
            $(element).parents('.form-group').removeClass('has-success').addClass('has-error');
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).parents('.form-group').removeClass('has-error').addClass('has-success');
        }
    });
};
  
return Metis;
})(jQuery);
