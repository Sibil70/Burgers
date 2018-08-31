const sections = $('.section');
const display = $('.maincontent');
let inScroll = false;
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();
const performTransition = sectionEq => {
    if (inScroll)  return;
        inScroll = true;

        const position = `${sectionEq*-100}%`;
    
        sections
            .eq(sectionEq)
            .addClass('active')
            .siblings()
            .removeClass('active');

        setTimeout(() => {
        inScroll = false;
        },700);

        display.css ({
            'transform' : `translateY(${position})`,
            "-webkit-transform": `translate(0, ${position})` //section num*-100%
        });
};

const defineSections = sections => {
    const activeSection = sections.filter(".active");

    return {
        activeSection: activeSection,
        nextSection: activeSection.next(),
        prevSection: activeSection.prev()
    }
}

const scrollToSection = direction => {
    const section = defineSections(sections);

    if(direction === "up" && section.nextSection.length) {
        performTransition(section.nextSection.index());
    }
    if(direction === "down" && section.prevSection.length) {
        performTransition(section.prevSection.index());
    }
};

$('.wrapper').on('wheel', e=>{
    const deltaY = e.originalEvent.deltaY;

    if (deltaY>0){// скролл наверх
        scrollToSection("up");
    }

    if (deltaY<0){ // скролл вниз
        scrollToSection("down");
    }
})
$('.wrapper').on('touchmove', e=>{
    e.preventDefault();
    }
)

$(document).on('keydown', e =>{

    switch(e.keyCode) {
        case 40:
            scrollToSection('up')
            break;
        
        case 38:
            scrollToSection('down')
            break;

    }
});

$('[data-scroll-to]').on('click', e=>{
    e.preventDefault();
    const sectionsNum = $(e.currentTarget).attr('data-scroll-to');

    performTransition(sectionsNum);
})

if (isMobile){
$(window).swipe( {
    swipe:function(event, direction) {
        scrollToSection(direction);  
    }
});
};
