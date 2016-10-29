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

        defaultId: 0,
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
        loadGridByData();
        registerOnSelectedRow();
        registerOnActionCommand();
    }

    function loadGridByData() {
        Metis.getData(config.getListApi).then(function(data) {
            showEditArea(false);
            $('#' + config.gridId).html(buildHtmlGrid(data));        
            $('.' + config.sortingClass).tablesorter();            
            $('#' + config.tableId).dataTable({});
        });

        function buildHtmlGrid(data) {
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
    }    

    function registerOnSelectedRow() {
        $('#' + config.gridId).on('click', '.' + config.rowClass, onSelectRow);

        function onSelectRow() {
            changeBackgroundOnSelectedRow();                     
            config.defaultId = Number(this.getAttribute("id"));             
            Metis.getData(config.getDetailApi + config.defaultId).then(function(rows) {
                var rowData = (rows && rows[0]) || {};
                fillDataIntoDetailUI(rowData);
            });    
        }

        function changeBackgroundOnSelectedRow() {
            $('.' + config.rowClass).css({backgroundColor: '#fff'});
            $(this).css({backgroundColor: '#ddd'});  
        }

        function fillDataIntoDetailUI(data) {
            fillValueInputControls(data);       
            showEditArea(true); 
            $('#' + config.cancelBtnId).text('Cancel Editing');                
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
        document.getElementById(config.model.fullName).value = data[config.model.fullName] || '';
        document.getElementById(config.model.phone).value = data[config.model.phone] || '';
        document.getElementById(config.model.email).value = data[config.model.email] || '';
        document.getElementById(config.model.password).value = '';
        document.getElementById(config.model.confirmPassword).value = '';       
    }

    function showEditArea(isShowed) {
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
        var postedData = getParameters();

        if (config.defaultId){
            Metis.putData(config.putDetailApi, postedData).then(function(data) {
                loadGridByData();
                showEditArea(false);
            });
        } else { 
            Metis.postData(config.postDetailApi, postedData).then(function(data) {
                loadGridByData();
                showEditArea(false);
            });
        }                
        return false;  // blocks regular submit since you have ajax

        function getParameters() {
            var param = {};
            param[config.model.id] = config.defaultId || 0,
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
