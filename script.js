let tl = gsap.timeline();

tl.from('#nav h3, #icon-menu', {
    y: -50,
    opacity: 0,
    duration: .7,
    delay: .2,
    stagger: .2 // each element came one by one after an finish
});
tl.from('#section h1', {
    x: -500,
    opacity: 0,
    duration: .7,
    stagger: .2
});
tl.from('#section img', {
    x: 100,
    rotate: 45,
    opacity: 0,
    stagger: .4,
    duration: .7
});
tl.from('#bottom-section h3', {
    y: 10,
    opacity: 0,
    duration: .5,
    stagger: .3
})