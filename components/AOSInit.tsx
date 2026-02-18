"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
    useEffect(() => {
        AOS.init({
            duration: 600,
            once: true,
            easing: "ease-out-cubic",
            offset: 50,
            // disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            mirror: false,
        });
    }, []);

    return null;
}
