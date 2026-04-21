import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const h1Split = new SplitText("h1", { type: "lines" });
const paragraphSplit = new SplitText("header p", { type: "lines" });

const tl = gsap.timeline({
  defaults: {
    opacity: 0,
    ease: "power3.out",
    duration: 1,
  },
});

tl.from("nav span", {
  x: -50,
  duration: 0.8,
})
  .from(
    h1Split.lines,
    {
      y: 50,
      stagger: 0.1,
    },
    "-=0.4",
  )
  .from(
    paragraphSplit.lines,
    {
      y: 30,
      stagger: 0.05,
    },
    "-=0.6",
  )
  .from(
    "#view-solutions-link",
    {
      y: 20,
    },
    "-=0.8",
  );
