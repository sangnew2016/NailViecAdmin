;(function($){
  "use strict";

  Metis.Jobs = function() {

    var config = {
        getListApi: 'admin/getJobList',
        getDetailApi: 'admin/getJobItem?id=',
        putDetailApi: 'admin/putJobItem',
        postDetailApi: 'admin/postJobItem',

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
            title: 'Title',
            body: 'Body',
            phoneContact: 'PhoneContact',
            salary: 'Salary',
            statusId: 'JobStatusId',
            shopId: 'NailShopId',            

            statusName: 'JobStatusName',
            shopName: 'ShopName'                    
        }
        
    };

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
            $('#' + config.tableId).dataTable();
        });

        function buildHtmlGrid(data) {
            var str = ""; 
            str += '<table id="' + config.tableId + '" class="table table-bordered table-hover">';
            str += '  <thead>';
            str += '    <tr>';
            str += '      <th>#</th>';
            str += '      <th>Shop Name</th>';
            str += '      <th>Title</th>';
            str += '      <th>Phone Contact</th>';
            str += '      <th>Salary</th>';            
            str += '      <th>Status</th>';
            str += '    </tr>';
            str += '  </thead>';
            str += '  <tbody>';
            for(var i = 0; i < data.length; i++) {
                var shopOwner = data[i];
                str += '    <tr class="' + config.rowClass + '" id="' + shopOwner[config.model.id] + '">';
                str += '      <td>' + shopOwner[config.model.id] + '</td>';
                str += '      <td>' + shopOwner[config.model.shopName] + '</td>';
                str += '      <td>' + shopOwner[config.model.title] + '</td>';
                str += '      <td>' + shopOwner[config.model.phoneContact] + '</td>';
                str += '      <td>' + shopOwner[config.model.salary] + '</td>';
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
        document.getElementById(config.model.title).value = data[config.model.title] || '';
        document.getElementById(config.model.body).value = data[config.model.body] || '';
        document.getElementById(config.model.phoneContact).value = data[config.model.phoneContact] || '';
        document.getElementById(config.model.salary).value = data[config.model.salary] || '';            

        //render combobox
        Metis.data.job.renderSelectDOMByStatus(data[config.model.statusId], config.model.statusId);               
        Metis.data.job.renderSelectDOMByShop(data[config.model.shopId], config.model.shopId);
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
        rule[config.model.title] = "required";
        rule[config.model.body] = "required";
        rule[config.model.phoneContact] = "required";
        rule[config.model.salary] = "required";
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
            param[config.model.title] = document.getElementById(config.model.title).value;
            param[config.model.body] = document.getElementById(config.model.body).value;
            param[config.model.phoneContact] = document.getElementById(config.model.phoneContact).value;
            param[config.model.salary] = document.getElementById(config.model.salary).value;

            var selectedValueStatus = $('#' + config.model.statusId + ' select').find(":selected").val();
            param[config.model.statusId] = selectedValueStatus;    

            var selectedValueShop = $('#' + config.model.shopId + ' select').find(":selected").val();
            param[config.model.shopId] = selectedValueShop;
           
            if(!config.defaultId) {                
                param[config.model.statusId] = config.defaultStatusId;
            }   

            return param;
        }    
         
    }
};
  
return Metis;
})(jQuery);
