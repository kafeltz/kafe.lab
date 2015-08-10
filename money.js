;(function ( $, window, document, undefined ) {

    'use strict';

    var pluginName = 'moneyBehavior',
        defaults = {
            debug: false,
            selectOnFocus: false,
        };

    var byPassKeys = [9, 16, 17, 18, 36, 37, 38, 39, 40, 91];


    function Plugin( element, options )
    {
        this.$element  = $(element);
        this.element   = element;
        this.options   = $.extend({}, defaults, options) ;
        this._defaults = defaults;
        this._name     = pluginName;

        this.value = [];

        init.call(this);
    }

    function init()
    {
        // attach_events.call(this);
        var self = this;

        this.$element.on("keydown", function(event)
        {
            var value = event.which;

            if(value >= 48 && value <= 57) {
                self.value.push( value - 48 );
            }
            else if (value >= 96 && value <= 105) {
                self.value.push( value - 96 );
            }
            else if (value === 8) {
                self.value.pop();
            }

            if (self.value === undefined) {
                self.value = [];
            }

            render.call(self);

            return byPassKeys.indexOf(value) !== -1;
        });
    }

    function render()
    {
        var v = 0.0;

        if (this.value.length > 0)
        {
            v = parseFloat(this.value.join(""));

            v = v / 100;

            v = _format( v );

            this.$element.val( v );
        }
        else
        {
            this.$element.val( "0,00" );
        }
    }

    // http://blog.tompawlak.org/number-currency-formatting-javascript
    function _format(num) {
        return num
           .toFixed(2) // always two decimal digits
           .replace(".", ",") // replace decimal point character with ,
           .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }

    $.fn[pluginName] = function ( options )
    {
        return this.each(function ()
        {
            if (!$.data(this, 'plugin_' + pluginName))
            {
                $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );