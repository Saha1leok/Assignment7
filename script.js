// --- Task 0: Setup ---
$(document).ready(function() {
    console.log("jQuery is ready!");

    // --- Task 1: Selectors & CSS ---

    $('#title').text('New Title (Set by ID)');

    $('.content-box').html('<strong>Content changed by Class!</strong><p>This is new HTML.</p>');

    $('p').css('font-style', 'italic');

    $('p').css({
        'color': 'blue',
        'border-bottom': '1px solid blue',
        'padding-bottom': '5px'
    });

    $('#title').css('color', '#D946EF');

    // --- Task 2: Visibility Methods ---

    $('#btn-hide').click(function() {
        $('#visibility-target').hide();
    });

    $('#btn-show').click(function() {
        $('#visibility-target').show();
    });

    $('#btn-toggle-visibility').click(function() {
        $('#visibility-target').toggle();
    });

    // --- Task 3: Fade Methods ---

    $('#btn-fade-in').click(function() {
        $('#fade-target').fadeIn('slow');
    });

    $('#btn-fade-out').click(function() {
        $('#fade-target').fadeOut(1000); // 1000ms = 1 second
    });

    $('#btn-fade-toggle').click(function() {
        $('#fade-target').fadeToggle();
    });

    // --- Task 4: Slide Methods ---

    $('#slide-header').click(function() {
        $('#slide-panel').slideToggle('medium');
    });

    $('#btn-slide-up').click(function() {
        $('#slide-panel').slideUp();
    });

    $('#btn-slide-down').click(function() {
        $('#slide-panel').slideDown();
    });

    // --- Task 5: Add & Remove Elements ---
    let itemCounter = 3; 

    $('#btn-add-append').click(function() {
        $('#item-list').append('<li>Appended Item ' + itemCounter + '</li>');
        itemCounter++;
    });

    $('#btn-add-prepend').click(function() {
        $('#item-list').prepend('<li>Prepended Item</li>');
    });

    $('#btn-remove-last').click(function() {
        $('#item-list li:last-child').remove();
    });

    // --- Task 6: Modifying Attributes ---

    $('#btn-change-img').click(function() {
        $('#attr-image').attr('src', 'https://placehold.co/400x150/a5f3fc/0c4a6e?text=Image+2');
    });

    $('#btn-change-link').click(function() {
        $('#attr-link')
            .attr('href', 'https://bing.com')
            .text('Go to Bing');
    });

    // --- Task 7: Form Interaction ---
    $('#input-name').on('input', function() {
        
        let name = $(this).val();
       
        $('#output-name').text(name);
    });

    $('#input-email').on('input', function() {
        let email = $(this).val();
        $('#output-email').text(email);
    });

    // --- Task 8: Basic Animation ---
    $('#btn-animate-basic').click(function() {
        
        $('#animate-box').stop(true, true).animate({
            width: '200px',
            height: '200px',
            left: '100px'
        }, 1000); 
    });

    // --- Task 9: Sequential Animations ---
    $('#btn-animate-sequential').click(function() {
        let box = $('#animate-box');
        box.stop(true, true)
           .animate({ left: '200px' }, 'slow')
           .animate({ top: '100px' }, 'slow')
           .animate({ width: '50px', height: '50px' }, 'slow')
           .animate({ top: '0px', left: '0px', width: '100px', height: '100px' }, 'slow'); // Return to original
    });

    // --- Task 10: Combined Animation ---
    $('#btn-animate-combined').click(function() {
        $('#animate-box').stop(true, true).animate({
            width: '300px',
            height: '150px',
            left: '50px',
            top: '50px',
            opacity: 0.5
        }, 2000); 
    });

    // --- Animation Reset Button ---
    $('#btn-animate-reset').click(function() {
        $('#animate-box').stop(true, true).css({
            width: '100px',
            height: '100px',
            left: '0px',
            top: '0px',
            opacity: 1
        });
    });

    // --- Task 11: Bouncing Ball ---
    let $ball = $('#ball');
    let $wrapper = $('#bounce-wrapper');
    let x = 100, y = 50; 
    let dx = 3, dy = 3; 
    let animationFrameId; 
    let isAnimating = false;

    function ballLoop() {
        let wrapperWidth = $wrapper.width();
        let wrapperHeight = $wrapper.height();
        let ballWidth = $ball.width();
        let ballHeight = $ball.height();

        x += dx;
        y += dy;

        
        if (x + ballWidth > wrapperWidth) {
            x = wrapperWidth - ballWidth; 
            dx = -dx; 
        }
        if (x < 0) {
            x = 0;
            dx = -dx;
        }
       
        if (y + ballHeight > wrapperHeight) {
            y = wrapperHeight - ballHeight;
            dy = -dy; 
        }
        if (y < 0) {
            y = 0;
            dy = -dy;
        }

        $ball.css({
            top: y + 'px',
            left: x + 'px'
        });

        if (isAnimating) {
            animationFrameId = requestAnimationFrame(ballLoop);
        }
    }

    $('#btn-start-bounce').click(function() {
        if (!isAnimating) {
            isAnimating = true;
            animationFrameId = requestAnimationFrame(ballLoop);
        }
    });

    $('#btn-stop-bounce').click(function() {
        if (isAnimating) {
            isAnimating = false;
            cancelAnimationFrame(animationFrameId);
        }
    });

});

