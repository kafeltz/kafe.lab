;(function ( $, window, document, undefined )
{
    "use strict";

    var pluginName = "timeMask";
    var defaults = {
        debug: false,
        mask: "00:00",
        jqueryMaskDefaults: {}
    };

    var warn = function() {};

    function Plugin( element, options )
    {
        this.element  = element;
        this.$element = $(element);

        this.options = $.extend( {}, defaults, options ) ;

        this._defaults = defaults;
        this._name     = pluginName;

        if (this.options.debug)
        {
            warn = function() {
                console.warn.apply(console, arguments);
            };
        }

        if ($.fn.mask === undefined) {
            warn("$.fn.mask is not defined! time-mask.js has it as dependency!");
        } else {
            init.call(this);
        }

    }

    function init()
    {
        this.$element.mask( this.options.mask, this.options.jqueryMaskDefaults );
	}

    $.fn[pluginName] = function( options )
    {
        return this.each(function() {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
            }
        });
    }

})( jQuery, window, document );
