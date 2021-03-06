    ;(function ( $, window, document, undefined ) {

    'use strict';

    var pluginName = 'moneyBehavior',
        defaults = {
            debug: false,
            selectOnFocus: false,
        };

    var numberKeys = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
    var numericPadKeys = [96, 97, 98, 99, 100, 101, 102, 103, 104, 105];
    var byPassKeys = [8, 9, 16, 17, 18, 36, /*37, 38, 39, 40*/, 91 ].concat(numberKeys).concat(numericPadKeys);

    function Plugin( element, options )
    {
        this.$element  = $(element);
        this.element   = element;
        this.options   = $.extend({}, defaults, options) ;
        this._defaults = defaults;
        this._name     = pluginName;

        this.value = [];
        
        if (this.$element.attr("value") && this.$element.attr("value").length !== 0) {
            this.value = this.$element.val().replace(/[^0-9]/g, "").split("");
        }

        init.call(this);
    }

    function init()
    {
        // attach_events.call(this);
        var self = this;

        this.$element.on("keydown", function(event)
        {
            var value = event.which;

            if (numberKeys.indexOf(value) !== -1) {
                self.value.push( value - 48 );
            }
            else if (numericPadKeys.indexOf(value) !== -1) {
                self.value.push( value - 96 );
            }
            else if (value === 8) {
                self.value.pop();
            }

            if (self.value === undefined) {
                self.value = [];
            }

                console.log( event.which );
            if (checkValidKeys.call(self, event)) {
                render.call(self);
            }

            // prevent rendering...
            return false;
        });
    }

    function checkValidKeys( event )
    {
        if (byPassKeys.indexOf( event.which ) !== -1) {
            return true;
        } else {
            return false;
        }
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
