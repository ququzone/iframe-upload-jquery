(function($){
    $.fn.upload = function(options) {
        var settings = $.extend({
            fileName: 'filedata',
            callback: 'upload_complete',
            extraParams: '',
            uploadCallback: function(){}
        }, options );

        var id = Math.ceil(Math.random() * 10000);
        var formId = 'form-' + id;
        var iframeName = 'upload-' + id;
        var fileInputId = 'file-' + id; 

        $('body').append('<form id="' + formId + '" enctype="multipart/form-data" method="post" '
            + 'target="' + iframeName + '" action="' + settings.action + '">'
            + '<input id="' + fileInputId + '" type="file" name="' + settings.fileName + '">'
            + '<input type="hidden" name="callback" + value="' + settings.callback + '">'
            + settings.extraParams
            + '</form>'
            + '<iframe style="width: 0px; height: 0px; padding: 0px;" src="" '
            + 'frameborder="0" id="' + iframeName + '" name="' + iframeName + '"</iframe>');
        $('#' + fileInputId).css({
            position: 'absolute',
            top: $(this).offset().top,
            left: $(this).offset().left,
            filter: 'alpha(opacity = 0)',
            opacity: 0,
            'z-index': 698,
            display: 'block',
            width: $(this).outerWidth(),
            height: $(this).outerHeight(),
            cursor: 'pointer'
        });
        $('#' + fileInputId).change(function() {
            settings.uploadCallback();
            $("#" + formId).submit();
        });
        $(this).attr('upload-id', id);
        return this;
    };
    
    $.fn.destroyUpload = function() {
        var id = $(this).attr('upload-id');
        $('#form-'+id).remove();
        $('#upload-'+id).remove();
    };
}(jQuery));
