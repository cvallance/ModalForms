(function ($) {
    $(document).ready(function () {
        //Change Password
        $('#changepassword-link').live('click', function () {
            var url = this.href;
            var dialogDiv = $('<div style="display: none;"></div>').appendTo('body');
            dialogDiv.load(url, function () {
                //Enable the client side validation
                var $form = $('form', dialogDiv);
                $.validator.unobtrusive.parse($form);

                var buttons = {
                    Submit: function () {
                        //Create a validation summary container
                        var valSummary = ModalForms.validationSummary();
                        valSummary.setup($form);

                        if ($form.valid()) {
                            var postUrl = $form.attr('action');
                            var formData = $form.serialize();
                            jQuery.ajax({
                                url: postUrl,
                                type: 'POST',
                                data: formData,
                                success: function (data) {
                                    document.location.reload(true);
                                },
                                error: function (jqXHR, textStatus, errorThrown) {
                                    var data = jQuery.parseJSON(jqXHR.responseText);
                                    if (data && data.errors) {
                                        valSummary.addErrors(data.errors);
                                    }
                                }
                            });
                        }
                    },
                    Cancel: function () {
                        dialogDiv.dialog('close');
                    }
                };

                //Load up the dialog
                dialogDiv.dialog({
                    autoOpen: true,
                    height: 550,
                    width: 350,
                    modal: true,
                    draggable: false,
                    resizable: false,
                    title: "Change Password",
                    buttons: buttons,
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