// Create a file in lib/hooks/useGsapAnimation.js
import { useEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

// Register plugins once
gsap.registerPlugin(SplitText);

/**
 * Hook for easily applying GSAP animations
 * @param {Object} options - Animation options
 * @param {string} options.selector - CSS selector for target element(s)
 * @param {string} options.animationType - Type of animation ('splitText', 'fadeIn', 'slideIn', etc)
 * @param {Object} options.animationProps - GSAP animation properties
 * @param {Array} dependencies - Effect dependencies
 */
export function useGsapAnimation(
    {
        selector,
        animationType = "fadeIn",
        animationProps = {},
        scrollTrigger = null, // New parameter for ScrollTrigger options
    },
    dependencies = []
) {
    useEffect(() => {
        let animation;
        let ctx = gsap.context(() => {
            // Base animation properties with ScrollTrigger if provided
            const baseProps = scrollTrigger
                ? { ...animationProps, scrollTrigger }
                : animationProps;
            // Handle different animation types
            switch (animationType) {
                case "splitText":
                    const splitType = animationProps.splitType || "chars";
                    const splitText = SplitText.create(selector, {
                        type: splitType, // Use the splitType property
                    });

                    // Choose which split elements to animate based on the type
                    let elements;
                    if (splitType.includes("chars")) {
                        elements = splitText.chars;
                    } else if (splitType.includes("words")) {
                        elements = splitText.words;
                    } else if (splitType.includes("lines")) {
                        elements = splitText.lines;
                    } else {
                        elements = splitText.chars; // Default to chars
                    }

                    animation = gsap.from(elements, {
                        autoAlpha: 0,
                        stagger: 0.05,
                        ...baseProps,
                    });
                    break;

                case "fadeIn":
                    animation = gsap.from(selector, {
                        autoAlpha: 0,
                        duration: 1,
                        ...baseProps,
                    });
                    break;
                case "slideIn":
                    animation = gsap.from(selector, {
                        x: animationProps.direction === "left" ? -100 : 100,
                        autoAlpha: 0,
                        duration: 1,
                        ...baseProps,
                    });
                    break;
                default:
                    // Default animation or custom animation
                    animation = gsap.from(selector, baseProps);
            }
        });
        // Cleanup function
        return () => {
            if (ctx) ctx.revert(); // This will automatically kill all animations in the context
        };
    }, dependencies);
}
