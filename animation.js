gsap 


.timeline( {
    defaults:{

        duration:1,
        delay:0,}
})
.from('.hero-clipped',{
    duration:2,
    x:50,
    easy:"expo",
})

.to('.hero-clipped',{
    
    x:0,
    easy:"expo",
})

.from('.title',{
    y:-100,
    easy:"back.out",
    opacity:0
})

.to('.title',{
    y:0,
    easy:"back.out",
    opacity:1
})

.from('.logo',{
    opacity:0,
})

.to('.logo',{
    opacity:1,
})

.from('.sectionMap .map-container',{
    duration:2,
    y:0,
    easy:"expo",
})

.to('.sectionMap .map-container',{
    y:100,
    easy:"expo",
})
