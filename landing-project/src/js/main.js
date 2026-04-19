import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const split = new SplitText(".split-text", {
  type: "chars",
});

gsap.from("h1", {
  y: 100,
  opacity: 0,
  duration: 2,
  ease: "power4.out",
  stagger: 0.1,
})

gsap.from("header p", {
  y: 100,
  opacity: 0,
  duration: 2,
  ease: "power4.out",
  delay: 0.5,
})

gsap.from("#view-solutions-link", {
  y: 100,
  opacity: 0,
  duration: 2,
  ease: "power4.out",
  delay: 1,
})