$(function() {
    //インプット入力用
    $('.text-area').on('keyup', function() {
        if ($(this).val()) {
            console.log('success');
            $('.js-form-submit').prop("disabled", false);
        } else {
            console.log('error');
            $('.js-form-submit').prop("disabled", true);
        }
    });
    
    //flexボタン表示
    $('.js-form-submit').on('click', function() {
        $('.select-button').fadeIn(1000);
        $('.flex-title').fadeIn();
        $('.formation').fadeIn();
        
    });

    //flexbox用
    $('.js-btn1').hover(
        function() {
            console.log('縦に並ぶ');
            $('.flex-title').text('縦に並ぶ');
            $('.formation').css('flex-direction', 'column-reverse');
        },
        function() {
            console.log('縦に並ぶ　もとにもどる');
            $('.flex-title').text('');
            $('.formation').css('flex-direction', 'row');
            $('.formation').css('flex-wrap', 'row');
        }
        
    );

    $('.js-btn2').hover(
        function() {
            console.log('並び変更');
            $('.flex-title').text('並び変更');
            $('.ko1').css('order', '3');
            $('.ko2').css('order', '2');
            $('.ko3').css('order', '1');
            $('.ko4').css('order', '6');
            $('.ko5').css('order', '4');
            $('.ko6').css('order', '5');
        },
        function() {
            console.log('並び変更　もとにもどる');
            $('.flex-title').text('');
            $('.ko1').css('order', '1');
            $('.ko2').css('order', '2');
            $('.ko3').css('order', '3');
            $('.ko4').css('order', '4');
            $('.ko5').css('order', '5');
            $('.ko6').css('flex', '10 10 10 100%');
            $('.formation').css('flex-wrap', 'row');
        }
    );

    $('.js-btn3').hover(
        function() {
            console.log('縦方向変更');
            $('.flex-title').text('縦方向変更');
            $('.ko1').css('align-self', 'flex-start');
            $('.ko2').css('align-self', 'flex-end');
            $('.ko3').css('align-self', 'stretch');
            $('.ko4').css('align-self', 'flex-end');
            $('.ko5').css('align-self', 'baseline');
            

        },
        function() {
            console.log('縦方向変更　もとにもどる');
            $('.flex-title').text('');
            $('.ko1').css('align-self', 'auto');
            $('.ko2').css('align-self', 'auto');
            $('.ko3').css('align-self', 'auto');
            $('.ko4').css('align-self', 'auto');
            $('.ko5').css('align-self', 'auto');
            $('.ko6').css('align-self', 'auto');
        }
    );
});