var tl = gsap.timeline();

tl.to(".text-1, .text-2, .text-3, .text-4, .text-5, .text-6, .text-7, .text-8, .text-9, .text-10, .text-23, .text-63, .text-97, .text-100", {
    opacity: 1,
    duration: 0.8,
    stagger: {
      each: 0.8, // 0.07 to show + 0.07 to hide = 0.14
      repeat: 1,
      yoyo: true
    }
  })
// tl.to (".text-1",{
//     opacity : 1,
//     duration : 0.07,
// })
//   .to(".text-1", {
//     duration : 0.07,
//     opacity : 0,
//   })
//   .to(".text-2",{
//     duration: 0.07 ,
//     opacity : 1,
//   })
//   .to(".text-2",{
//     duration: 0.07 ,
//     opacity : 0,
//   })
//   .to(".text-3",{
//     duration: 0.07 ,
//     opacity : 1,
//   })
//   .to(".text-3",{
//     duration: 0.07 ,
//     opacity : 0,
//   })
//   .to(".text-4",{
//     duration: 0.07 ,
//     opacity : 1,
//   })
//   .to(".text-4",{
//     duration: 0.07 ,
//     opacity : 0,
//   })
//   .to(".text-5",{
//     duration: 0.07 ,
//     opacity : 1,
//   })
//   .to(".text-5",{
//     duration: 0.07 ,
//     opacity : 0,
//   })
//   .to(".text-6",{
//     duration: 0.07 ,
//     opacity : 1,
//   })
//   .to(".text-6",{
//     duration: 0.07 ,
//     opacity : 0,
//   })
//   .to(".text-7",{
//     duration: 0.07 ,
//     opacity : 1,
//   })
//   .to(".text-7",{
//     duration: 0.07 ,
//     opacity : 0,
//   })
//   .to(".text-8",{
//     duration: 0.07 ,
//     opacity : 1,
//   })
//   .to(".text-8",{
//     duration: 0.07 ,
//     opacity : 0,
//   })
//   .to(".text-9",{
//     duration: 0.07 ,
//     opacity : 1,
//   })
//   .to(".text-9",{
//     duration: 0.07 ,
//     opacity : 0,
//   })
//   .to(".text-10",{
//     duration: 0.07 ,
//     opacity : 1,
//   })
//   .to(".text-10",{
//     duration: 0.07 ,
//     opacity : 0,
//   })
//   .to(".text-23",{
//     duration: 0.07 ,
//     opacity : 1,
//   })
//   .to(".text-23",{
//     duration: 0.07 ,
//     opacity : 0,
//   })
//   .to(".text-63",{
//     duration: 0.07 ,
//     opacity : 1,
//   })
//   .to(".text-63",{
//     duration: 0.07 ,
//     opacity : 0,
//   })
//   .to(".text-97",{
//     duration: 0.07 ,
//     opacity : 1,
//   })
//   .to(".text-97",{
//     duration: 0.07 ,
//     opacity : 0,
//   })
//   .to(".text-100",{
//     duration: 0.07 ,
//     opacity : 1,
//   })
