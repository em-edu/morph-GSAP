import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);
//MorphSVGPlugin.convertToPath("#rect");

const mainTL = gsap.timeline();

mainTL.from("#rect",{duration:1, drawSVG:"50% 50%"})
.from("#rect",{duration:1, fill:"#fff"}, "-=75%")
.to("#rect",{duration:1, fill:"green"})
.to("#rect",{duration:1, morphSVG:"#tria", fill:"#FF0000"})
.to("#rect",{duration:1, morphSVG:"#star", fill:"#0060EF"})

;






