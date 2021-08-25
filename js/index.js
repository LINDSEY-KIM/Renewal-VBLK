$(document).ready(function(){

    $('.light').click(function(){

        $('.contact_us').css({
            backgroundColor: '#ff4800'  
        });

        $('.light').css({
            display: 'none'
        });

        $('.dark').css({
            display: 'block'
        });

        $('.logo_1').css({
            display: 'none'
        });

        $('.logo_2').css({
            display: 'block'
        });

        $('.fa, .fas').css({
            color: '#fff'
        });
        // $('header').css({
        //     backgroundColor : '#ffffff63'
        //     backdropFilter : 'blur(5px)'
        // })        

        // color

        $('h1,h2,h3,h4,h5,h6,p,a').css({
            color: '#fdfdfd'
        });


        $('.menu_btn').css({
            color: '#fdfdfd'
        });

        $('header, section').css({
            backgroundColor: '#181818'
        });

        $('.in_header, .container').css({
            backgroundColor: '#181818'
        });

        $('body').css({
            backgroundColor: '#181818'
        });

        $('.up_3 p').css({
            color: '#ff4800'
        });

        $('.mo_menu_wrap a').css({
            color: '#fff'
        });

        $('.mo_menu_wrap').css({
            backgroundColor: 'rgba(0 0 0 / 50%)',
            backdropFilter: 'blur(5px)',
        });

    });


    $('.dark').click(function(){

        $('.contact_us').css({
            backgroundColor: '#181818'  
        });

        $('.dark').css({
            display: 'none'
        });

        $('.light').css({
            display: 'block'
        });

        $('.logo_2').css({
            display: 'none'
        });

        $('.logo_1').css({
            display: 'block'
        });


        // color

        $('h1,h2,h3,h4,h5,h6,p,a').css({
            color: '#181818'
        });

        $('.light').css({
            color: '#fdfdfd'
        });

        $('.menu_btn').css({
            color: '#181818'
        });

        $('header, section').css({
            backgroundColor: '#fdfdfd'
        });

        $('.in_header, .container').css({
            backgroundColor: '#fdfdfd'
        });

        $('body').css({
            backgroundColor: '#fdfdfd'
        });

        $('.up_3 p').css({
            color: '#0000f5'
        });

        $('.in_footer h3, .in_footer h4, .in_footer p').css({
            color: '#c5c5c5'
        });
        
        $('.img_wrap_5 p').css({
            color: '#fdfdfd'
        });
        
        $('.fa, .fas').css({
            color: '#000'
        });

        $('.mo_menu_wrap a').css({
            color: '#000'
        });

        $('.mo_menu_wrap').css({
            backgroundColor: 'rgba(255 255 255 / 50%)',
            backdropFilter: 'blur(5px)',
        });
        
    });

    // dark light mode end

    $(window).scroll(function(){

        var sct = $(window).scrollTop();
        console.log(sct);

        // if(sct >= 'section_2'){
        //     $('.title_wrap_2 h2').css({
        //         transform: `translate(0px,0px)`
        //     });

        // }

        if(sct >= 600){
            $('.bespoke .img_wrap').addClass('active_1');
        }

        if(sct >= 900){
            $('.bespoke .txt_wrap').addClass('active_2');
        }

        if(sct >= 1500){
            $('.all_best .left_txt').addClass('active_3');
        }
        
        if(sct >= 1500){
            $('.all_best .left').addClass('active_3');
        }

        if(sct >= 1800){
            $('.all_best .right').addClass('active_4');
        }

        if(sct >= 2900){
            $('.up_3 .img_wrap').addClass('active_5');
        }

        if(sct >= 3500){
            $('.up_3 .txt_wrap').addClass('active_6');
        }

        if(sct >= 4130){
            $('.le_box .le_img').addClass('active_7');
        }
        
        if(sct >= 4630){
            $('.ri_box .ri_img').addClass('active_8');
        }
    });



    // $('.menu_btn').click(function(){
    //     $('.pop_menu').fadeIn(500);
    // });
    
    // $('.menu_btn').click(function(){
    //     $('.pop_menu').fadeOut(500);
    // });


});