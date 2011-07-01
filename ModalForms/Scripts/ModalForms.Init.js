(function ($) {
    $(document).ready(function() {
        $('#logon-link').live('click', function() {
            var url = this.href;
            var dialogDiv = $('<div style="display: none;"></div>').appendTo('body');
            dialogDiv.load(url, function () {
                //Load up the dialog
                dialogDiv.dialog({
                    autoOpen: true,
                    height: 450,
                    width: 350,
                    modal: true,
                    draggable: false,
                    resizable: false,
                    close: function () {
                        $(this).remove();
                    }
                });
            });
            //prevent the browser to follow the link
            return false;
        });
    });
})(jQuery)