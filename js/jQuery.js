//index.html    
$(document).ready(function(){
    $('.dialogue').click(function(){
        $(this).html('您的性別是？').css({
            width: "220px",
            fontSize: '30px',
            color: "#00adc5",
            marginBottom: '50px',
        });
    });
});

// product.html
$(document).ready(function() {    
    var productInWrap = $('.product_inner_wrapper');          
    $('.product_slider_prev').on('click', function() {          
        productInWrap.animate({left: '0%'}, 300, function(){          
            productInWrap.css('left', '-100%');          
        $('.product_slide').first().before($('.product_slide').last());          
        });
    });
    
    $('.product_slider_next').on('click', function() {
        productInWrap.animate({left: '-200%'}, 300, function(){
            productInWrap.css('left', '-100%');
        $('.product_slide').last().after($('.product_slide').first());
        });
    });
})

// blog.html
$(document).ready(function() {    
    var articleInWrap = $('.select_article_inner_wrapper');          
    $('.select_article_slider_prev').on('click', function() {          
        articleInWrap.animate({left: '0%'}, 300, function(){          
            articleInWrap.css('left', '-100%');          
        $('.select_article_slide').first().before($('.select_article_slide').last());          
        });
    });
    
    
    $('.select_article_slider_next').on('click', function() {
        articleInWrap.animate({left: '-200%'}, 300, function(){
            articleInWrap.css('left', '-100%');
        $('.select_article_slide').last().after($('.select_article_slide').first());
        });
    });
})