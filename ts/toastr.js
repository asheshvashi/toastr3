var defaults = {
    containerId: 'toast-container',
    debug: false,
    extendedTimeOut: 1000,
    fadeIn: 300,
    fadeOut: 1000,
    iconClasses: {
        error: 'toast-error',
        info: 'toast-info',
        success: 'toast-success',
        warning: 'toast-warning'
    },
    iconClass: 'toast-info',
    messageClass: 'toast-message',
    positionClass: 'toast-top-right',
    tapToDismiss: true,
    timeOut: 5000,
    titleClass: 'toast-title',
    toastClass: 'toast'
};
var error = function (message, title, optionsOverride) {
    return notify({
        iconClass: getOptions().iconClasses.error,
        message: message,
        optionsOverride: optionsOverride,
        title: title
    });
};
var getContainer = function (options) {
    var $container = $('#' + options.containerId);
    if($container.length) {
        return $container;
    }
    $container = $('<div/>').attr('id', options.containerId).addClass(options.positionClass);
    $container.appendTo($('body'));
    return $container;
};
var getOptions = function () {
    return $.extend({
    }, defaults, toastr.options);
};
var info = function (message, title, optionsOverride) {
    return notify({
        iconClass: getOptions().iconClasses.info,
        message: message,
        optionsOverride: optionsOverride,
        title: title
    });
};
var notify = function (map) {
    var options = getOptions(), iconClass = map.iconClass || options.iconClass;
    if(typeof (map.optionsOverride) !== 'undefined') {
        options = $.extend(options, map.optionsOverride);
        iconClass = map.optionsOverride.iconClass || iconClass;
    }
    var intervalId = null, $container = getContainer(options), $toastElement = $('<div/>'), $titleElement = $('<div/>'), $messageElement = $('<div/>'), response = {
options: options,
map: map    };
    if(map.iconClass) {
        $toastElement.addClass(options.toastClass).addClass(iconClass);
    }
    if(map.title) {
        $titleElement.append(map.title).addClass(options.titleClass);
        $toastElement.append($titleElement);
    }
    if(map.message) {
        $messageElement.append(map.message).addClass(options.messageClass);
        $toastElement.append($messageElement);
    }
    var fadeAway = function () {
        if($(':focus', $toastElement).length > 0) {
            return;
        }
        var fade = function (callback) {
            return $toastElement.fadeOut(options.fadeOut, callback);
        };
        var removeToast = function () {
            if($toastElement.is(':visible')) {
                return;
            }
            $toastElement.remove();
            if($container.children().length === 0) {
                $container.remove();
            }
        };
        fade(removeToast);
    };
    var delayedFadeAway = function () {
        if(options.timeOut > 0 || options.extendedTimeOut > 0) {
            intervalId = setTimeout(fadeAway, options.extendedTimeOut);
        }
    };
    var stickAround = function () {
        clearTimeout(intervalId);
        $toastElement.stop(true, true).fadeIn(options.fadeIn);
    };
    $toastElement.hide();
    $container.prepend($toastElement);
    $toastElement.fadeIn(options.fadeIn);
    if(options.timeOut > 0) {
        intervalId = setTimeout(fadeAway, options.timeOut);
    }
    $toastElement.hover(stickAround, delayedFadeAway);
    if(!options.onclick && options.tapToDismiss) {
        $toastElement.click(fadeAway);
    }
    if(options.onclick) {
        $toastElement.click(function () {
            options.onclick() && fadeAway();
        });
    }
    if(options.debug && console) {
        console.log(response);
    }
    return $toastElement;
};
var success = function (message, title, optionsOverride) {
    return notify({
        iconClass: getOptions().iconClasses.success,
        message: message,
        optionsOverride: optionsOverride,
        title: title
    });
};
var warning = function (message, title, optionsOverride) {
    return notify({
        iconClass: getOptions().iconClasses.warning,
        message: message,
        optionsOverride: optionsOverride,
        title: title
    });
};
var clear = function ($toastElement) {
    var options = getOptions();
    var $container = $('#' + options.containerId);
    if($toastElement && $(':focus', $toastElement).length === 0) {
        var removeToast = function () {
            if($toastElement.is(':visible')) {
                return;
            }
            $toastElement.remove();
            if($container.children().length === 0) {
                $container.remove();
            }
        };
        $toastElement.fadeOut(options.fadeOut, removeToast);
        return;
    }
    if($container.length) {
        $container.fadeOut(options.fadeOut, function () {
            $container.remove();
        });
    }
};
exports.toastr2 = {
    clear: clear,
    error: error,
    info: info,
    options: {
    },
    success: success,
    version: '1.1.2',
    warning: warning
};