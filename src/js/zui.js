/**
 * Created by zhangxin on 2018/6/22.
 */
(function ($) {
    $(".sidebar-elements").on("click",'li>a',function () {
        var _this = $(this),
            _this_parent_node = _this.parent(),
            _this_next_node = _this.next(),
            _isParent = _this_parent_node.hasClass('parent'),
            _isOpen = _this_parent_node.hasClass('open');
        if(_isParent && !_isOpen) {
            _this_next_node.slideDown(200,'linear',function () {
                _this_parent_node.addClass("open");
            });
        }else if(_isParent && _isOpen) {
            _this_next_node.slideUp(200,'linear',function () {
                _this_parent_node.removeClass("open");
            });
        }
    });
})(jQuery);