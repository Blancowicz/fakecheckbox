(function ( $ ) {

    $.fn.fakecheckbox = function( options ) {
        var settings = {
            // These are the defaults.
            cursorDefault: 'cursor',
            iconClasses: '',
            css: {
                'width': '15px',
                'height': '15px',
                'backgroundColor': '#fff',
                'border': '1px solid #eee',
                'display': 'inline-block',
                'cursor': 'pointer',
                'vertical-align': 'middle',
                'margin': '5px',
                '-moz-user-select': 'none',
                '-khtml-user-select': 'none',
                '-webkit-user-select': 'none',
                '-o-user-select': 'none'
            }
        };
        settings = $.extend(true, {}, settings, options);

        this.filter('input').each(function() {
            var $checkbox = $(this);
            $checkbox.hide();
            var $div = $('<div><i class="fa fa-check ' + settings.iconClasses + '" ' + (!$(this).prop('checked') ? 'style="display:none"' : '') + '></i></div>');
            $div.css(settings.css);
            $div.addClass(settings.customClasses);

            $checkbox.before($div);
            $div.hover(
                function() {
                    $(this).css({cursor: settings.cursor});
                },
                function() {
                    $(this).css({cursor: settings.cursorDefault});
                }
            );

            $div.click(function() {
                $icon = $(this).children('i');
                $icon.is(':visible') ? $icon.hide() : $icon.show();
                $(this).next('input').prop('checked', !$(this).next('input').prop('checked'));
            });
        });

    };

}( jQuery ));
