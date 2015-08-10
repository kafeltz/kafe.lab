;(function ( $, window, document, undefined )
{
    "use strict";

    var pluginName = "selectOnClickBehavior";
    var defaults = {
        debug: false,
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

        init.call(this);
    }

    function init()
    {
        var self = this;

        this.$element.on("click", function(event) { self.$element.select(); })
	}

    $.fn[pluginName] = function( options )
    {
        return this.each(function() {
            if (!$.data(this, 'plugin_' + pluginName))
            {
                $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
            }
        });
    }

})( jQuery, window, document );
