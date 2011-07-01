var ModalForms = ModalForms || {};

ModalForms.validationSummary = function () {
    var validationSummary = 0;

    var setup = function ($appendTo) {
        validationSummary = jQuery('.validation-summary-errors', $appendTo);
        if (!validationSummary.length) {
            createNew();
            $appendTo.prepend(validationSummary);
        }
    };

    var createNew = function () {
        validationSummary = jQuery('<div data-valmsg-summary="true" class="validation-summary-valid validation-summary-errors ui-state-error ui-corner-all">' +
                                   '    <ul>' +
                                   '        <li style="display:none"></li>' +
                                   '    </ul>' +
                                   '</div>');
    };

    var addErrors = function (errors) {
        var foundErrors = false;

        clearErrors();
        for (var errorKey in errors) {
            for (var messageKey in errors[errorKey]) {
                addError(errorKey, errors[errorKey][messageKey]);
                foundErrors = true;
            }
        }

        if (foundErrors) {
            validationSummary.removeClass('validation-summary-valid');
        }
    };

    var addError = function (errorKey, error) {
        jQuery('ul', validationSummary).append('<li>' + error + '</li>');
        jQuery('input[name="' + errorKey + '"]').removeClass('valid').addClass('input-validation-error');
    };

    var clearErrors = function () {
        jQuery('ul', validationSummary).html('<li style="display:none"></li>');
        validationSummary.addClass('validation-summary-valid');
        jQuery('input').removeClass('input-validation-error');
    };

    return {
        setup: setup,
        addErrors: addErrors
    };
};
//ValidationSummary
