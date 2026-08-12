import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useEffect } from "react";

// Ensure plugins are registered
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Helper function to kill all ScrollTriggers
export const killAllScrollTriggers = () => {
    const triggers = ScrollTrigger.getAll();
    triggers.forEach((trigger) => trigger.kill(false));
};

// Helper function to initialize ScrollSmoother
export const initScrollSmoother = () => {
    // Clear any existing instances first
    ScrollSmoother.get() && ScrollSmoother.get().kill();

    // Create new instance
    return ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1,
        effects: true,
        normalizeScroll: true,
        onUpdate: (self) => {
            // Force ScrollTrigger to update
            ScrollTrigger.update();
        },
    });
};

// Create a custom hook for GSAP animations with proper cleanup
export const useGsapWithCleanup = (callback, dependencies = []) => {
    useEffect(() => {
        // Create a new context for animations
        const ctx = gsap.context(() => {
            // Run the animation callback
            callback();
        });

        // Cleanup function
        return () => {
            // Kill all animations in this context
            ctx.revert();

            // Force refresh after cleanup
            setTimeout(() => {
                ScrollTrigger.refresh(true);
            }, 0);
        };
    }, dependencies);
};
