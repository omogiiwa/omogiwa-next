"use client";

import { useEffect, useRef } from "react";
import "./desk-hero.css";

export default function DeskHero() {
  const deskRef = useRef(null);

  useEffect(() => {
    const desk = deskRef.current;

    if (!desk || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const interactiveItems = desk.querySelectorAll(
      ".desk-item, a .lift"
    );

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let animationFrame;

    const handlePointerMove = (event) => {
      mouseX = event.clientX / window.innerWidth - 0.5;
      mouseY = event.clientY / window.innerHeight - 0.5;
    };

    window.addEventListener("pointermove", handlePointerMove);

    const animate = () => {
      currentX += (mouseX - currentX) * 0.035;
      currentY += (mouseY - currentY) * 0.035;

      interactiveItems.forEach((item, index) => {
        const strength = index % 3 === 0 ? 2.2 : 1.4;

        const x = currentX * strength;
        const y = currentY * strength;

        item.style.translate = `${x}px ${y}px`;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="desk-hero-canvas" ref={deskRef}>
      <svg
        viewBox="0 0 1200 800"
        role="img"
        aria-label="OmoGiwa's creative workspace desk"
      >
        <defs>

          <path
            id="dp"
            d="M100 40H1100Q1140 40 1140 80V700Q1140 740 1100 740H870C800 740 800 590 600 590C400 590 400 740 330 740H100Q60 740 60 700V80Q60 40 100 40Z"
          />

          <clipPath id="dc">
            <use href="#dp" />
          </clipPath>

          <linearGradient id="w" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#a06f3d" />
            <stop offset="1" stopColor="#6e4624" />
          </linearGradient>

          <linearGradient id="fl" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#25212f" />
            <stop offset="1" stopColor="#15121b" />
          </linearGradient>

          <filter
            id="g"
            x="0"
            y="0"
            width="100%"
            height="100%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency=".006 .2"
              numOctaves="3"
              seed="7"
            />

            <feColorMatrix
              values="
                0 0 0 0 .22
                0 0 0 0 .11
                0 0 0 0 .04
                0 0 0 1.6 -.6
              "
            />
          </filter>

          <filter
            id="s"
            x="-20%"
            y="-20%"
            width="150%"
            height="150%"
          >
            <feDropShadow
              dx="3"
              dy="5"
              stdDeviation="3.5"
              floodColor="#000"
              floodOpacity=".4"
            />
          </filter>

          <filter id="b">
            <feGaussianBlur stdDeviation="10" />
          </filter>

          <pattern
            id="k"
            width="22"
            height="18"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="1.5"
              y="1.5"
              width="19"
              height="15"
              rx="3"
              fill="#2d2d35"
            />
          </pattern>

          <g id="pad">

            <rect
              width="150"
              height="172"
              rx="5"
              fill="#f8f4e9"
            />

            <rect
              width="150"
              height="24"
              rx="5"
              fill="#2b2b36"
            />

            <g fill="#f8f4e9">
              <circle cx="25" cy="12" r="4" />
              <circle cx="55" cy="12" r="4" />
              <circle cx="85" cy="12" r="4" />
              <circle cx="115" cy="12" r="4" />
            </g>

            <path
              d="M12 64H138M12 88H138M12 112H138M12 136H138M12 160H138"
              stroke="#aebfe0"
            />

          </g>

        </defs>

        {/* FLOOR / BACKGROUND */}

        <rect
          width="1200"
          height="800"
          fill="url(#fl)"
        />

        {/* DESK SHADOW */}

        <use
          href="#dp"
          transform="translate(8 14)"
          fill="#000"
          opacity=".5"
          filter="url(#b)"
        />

        {/* WOODEN DESK */}

        <use
          href="#dp"
          fill="url(#w)"
        />

        <rect
          width="1200"
          height="800"
          filter="url(#g)"
          opacity=".55"
          clipPath="url(#dc)"
        />

        <use
          href="#dp"
          fill="none"
          stroke="#3f2711"
          strokeWidth="5"
        />

        <use
          href="#dp"
          fill="none"
          stroke="#d9b36a"
          strokeOpacity=".55"
          strokeWidth="1.5"
          transform="translate(600 390) scale(.965) translate(-600 -390)"
        />

        {/* COFFEE RING */}

        <circle
          cx="975"
          cy="520"
          r="27"
          fill="none"
          stroke="#4a2a12"
          strokeOpacity=".35"
          strokeWidth="3"
        />

        {/* COFFEE */}

        <g
          transform="translate(1010 590)"
          filter="url(#s)"
          className="desk-item"
        >

          <circle
            r="31"
            fill="#f4f1ea"
          />

          <rect
            x="26"
            y="-9"
            width="20"
            height="18"
            rx="8"
            fill="none"
            stroke="#f4f1ea"
            strokeWidth="6"
          />

          <circle
            r="23"
            fill="#3b2314"
          />

          <path
            d="M-14-10A18 18 0 0 1 8-17"
            stroke="#6b4428"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />

        </g>

        {/* BOOKS */}

        <g
          transform="translate(88 92) rotate(-6)"
          filter="url(#s)"
          className="desk-item"
        >

          <rect
            width="160"
            height="210"
            rx="3"
            fill="#2f5d62"
          />

          <rect
            width="12"
            height="210"
            fill="#1f4247"
          />

          <text
            className="desk-hand"
            x="82"
            y="105"
            textAnchor="middle"
            fontSize="23"
            fill="#cfe3e0"
          >
            HUMAN
          </text>

          <text
            className="desk-hand"
            x="82"
            y="132"
            textAnchor="middle"
            fontSize="23"
            fill="#cfe3e0"
          >
            ANATOMY
          </text>

        </g>

        <g
          transform="translate(98 104) rotate(2)"
          filter="url(#s)"
          className="desk-item"
        >

          <rect
            width="150"
            height="200"
            rx="3"
            fill="#8c3028"
          />

          <rect
            width="12"
            height="200"
            fill="#68241f"
          />

          <text
            className="desk-hand"
            x="82"
            y="88"
            textAnchor="middle"
            fontSize="25"
            fill="#f3d5cf"
          >
            MAKE
          </text>

          <text
            className="desk-hand"
            x="82"
            y="117"
            textAnchor="middle"
            fontSize="25"
            fill="#f3d5cf"
          >
            SOMETHING
          </text>

        </g>

        <g
          transform="translate(110 120) rotate(-3)"
          filter="url(#s)"
          className="desk-item"
        >

          <rect
            width="135"
            height="185"
            rx="3"
            fill="#f0e6d2"
          />

          <rect
            width="12"
            height="185"
            fill="#d6c8a8"
          />

          <rect
            x="12"
            y="62"
            width="123"
            height="34"
            fill="#401e97"
          />

          <text
            x="76"
            y="86"
            textAnchor="middle"
            fontFamily="Georgia,serif"
            fontSize="20"
            fontWeight="700"
            fill="#fff"
          >
            OmoGiwa
          </text>

          <text
            x="76"
            y="130"
            textAnchor="middle"
            fontFamily="Georgia,serif"
            fontSize="12"
            fill="#6a5d44"
          >
            design + code
          </text>

        </g>

        {/* PROJECTS / WORK */}

        <a
          href="/work"
          aria-label="View OmoGiwa's work"
        >

          <g
            transform="translate(105 335) rotate(-5)"
          >

            <g
              className="lift"
              filter="url(#s)"
            >

              <use href="#pad" />

              <text
                className="desk-hand"
                x="14"
                y="56"
                fontSize="28"
                fill="#401e97"
              >
                Work
              </text>

              <path
                d="M14 62q40 6 80 0"
                stroke="#401e97"
                fill="none"
              />

              <text
                className="desk-hand"
                x="14"
                y="84"
                fontSize="19"
                fill="#5633a9"
              >
                brand identity
              </text>

              <text
                className="desk-hand"
                x="14"
                y="108"
                fontSize="19"
                fill="#5633a9"
              >
                web + visual
              </text>

              <text
                className="desk-hand"
                x="14"
                y="132"
                fontSize="19"
                fill="#5633a9"
              >
                selected projects
              </text>

            </g>

          </g>

        </a>

        {/* ABOUT */}

        <a
          href="/about"
          aria-label="Learn about OmoGiwa"
        >

          <g
            transform="translate(890 80) rotate(4)"
          >

            <g
              className="lift"
              filter="url(#s)"
            >

              <use href="#pad" />

              <text
                className="desk-hand"
                x="14"
                y="56"
                fontSize="28"
                fill="#401e97"
              >
                About me
              </text>

              <path
                d="M14 62q40 6 80 0"
                stroke="#401e97"
                fill="none"
              />

              <text
                className="desk-hand"
                x="14"
                y="84"
                fontSize="19"
                fill="#5633a9"
              >
                anatomy → design
              </text>

              <text
                className="desk-hand"
                x="14"
                y="108"
                fontSize="19"
                fill="#5633a9"
              >
                code + curiosity
              </text>

              <text
                className="desk-hand"
                x="14"
                y="132"
                fontSize="19"
                fill="#5633a9"
              >
                still figuring it out
              </text>

            </g>

          </g>

        </a>

        {/* CONTACT */}

        <a
          href="/contact"
          aria-label="Contact OmoGiwa"
        >

          <g
            transform="translate(280 78) rotate(3)"
          >

            <g
              className="lift"
              filter="url(#s)"
            >

              <use href="#pad" />

              <text
                className="desk-hand"
                x="14"
                y="56"
                fontSize="28"
                fill="#401e97"
              >
                Contact
              </text>

              <path
                d="M14 62q40 6 80 0"
                stroke="#401e97"
                fill="none"
              />

              <text
                className="desk-hand"
                x="14"
                y="84"
                fontSize="19"
                fill="#5633a9"
              >
                say hello
              </text>

              <text
                className="desk-hand"
                x="14"
                y="108"
                fontSize="19"
                fill="#5633a9"
              >
                let's build
              </text>

            </g>

          </g>

        </a>

        {/* BRAND NOTE */}

        <g
          transform="translate(348 262) rotate(6)"
          filter="url(#s)"
          className="desk-item"
        >

          <rect
            width="68"
            height="68"
            fill="#eee7ff"
          />

          <circle
            cx="18"
            cy="20"
            r="8"
            fill="#401e97"
          />

          <text
            className="desk-hand"
            x="8"
            y="48"
            fontSize="17"
            fill="#333"
          >
            #401e97
          </text>

          <text
            className="desk-hand"
            x="8"
            y="62"
            fontSize="13"
            fill="#555"
          >
            obviously.
          </text>

        </g>

        {/* TYPOGRAPHY NOTE */}

        <g
          transform="translate(354 342) rotate(-4)"
          filter="url(#s)"
          className="desk-item"
        >

          <rect
            width="64"
            height="64"
            fill="#eee7ff"
          />

          <text
            className="desk-hand"
            x="7"
            y="26"
            fontSize="17"
            fill="#333"
          >
            kerning?
          </text>

          <text
            className="desk-hand"
            x="7"
            y="50"
            fontSize="22"
            fill="#401e97"
          >
            Aa
          </text>

          <path
            d="M26 46h28"
            stroke="#401e97"
            strokeWidth="2"
          />

        </g>

        {/* BUILD NOTE */}

        <g
          transform="translate(792 268) rotate(-5)"
          filter="url(#s)"
          className="desk-item"
        >

          <rect
            width="68"
            height="68"
            fill="#e7ddff"
          />

          <text
            className="desk-hand"
            x="8"
            y="28"
            fontSize="18"
            fill="#401e97"
          >
            build it
          </text>

          <path
            d="M10 48l8 8 18-20"
            stroke="#401e97"
            strokeWidth="3"
            fill="none"
          />

        </g>

        {/* DESIGN NOTE */}

        <g
          transform="translate(812 346) rotate(5)"
          filter="url(#s)"
          className="desk-item"
        >

          <rect
            width="66"
            height="62"
            fill="#f0e7ff"
          />

          <g
            fill="none"
            stroke="#401e97"
          >

            <rect
              x="8"
              y="8"
              width="22"
              height="28"
            />

            <rect
              x="36"
              y="8"
              width="22"
              height="12"
            />

            <rect
              x="36"
              y="24"
              width="22"
              height="12"
            />

          </g>

          <text
            className="desk-hand"
            x="8"
            y="54"
            fontSize="15"
            fill="#401e97"
          >
            wireframe v3
          </text>

        </g>

        {/* LAPTOP */}

        <g
          transform="translate(440 60)"
          filter="url(#s)"
          className="desk-item"
        >

          {/* BASE */}

          <rect
            y="168"
            width="320"
            height="110"
            rx="10"
            fill="#c9cad1"
          />

          <rect
            x="14"
            y="178"
            width="292"
            height="62"
            fill="url(#k)"
          />

          <rect
            x="120"
            y="248"
            width="80"
            height="22"
            rx="5"
            fill="#b4b5bd"
          />

          {/* SCREEN */}

          <rect
            width="320"
            height="172"
            rx="10"
            fill="#1b1b22"
          />

          <rect
            x="8"
            y="8"
            width="304"
            height="156"
            rx="3"
            fill="#2a2a33"
          />

          {/* LEFT SIDEBAR */}

          <rect
            x="12"
            y="12"
            width="56"
            height="148"
            fill="#1f1f27"
          />

          <g fill="#6c6c7a">

            <circle
              cx="26"
              cy="28"
              r="5"
            />

            <rect
              x="38"
              y="24"
              width="20"
              height="8"
            />

            <rect
              x="20"
              y="46"
              width="38"
              height="5"
            />

            <rect
              x="20"
              y="58"
              width="30"
              height="5"
            />

            <rect
              x="20"
              y="70"
              width="34"
              height="5"
            />

          </g>

          {/* RIGHT SIDEBAR */}

          <rect
            x="250"
            y="12"
            width="58"
            height="148"
            fill="#1f1f27"
          />

          <g>

            <rect
              x="258"
              y="22"
              width="12"
              height="12"
              fill="#401e97"
            />

            <rect
              x="274"
              y="22"
              width="12"
              height="12"
              fill="#fff"
            />

            <rect
              x="290"
              y="22"
              width="12"
              height="12"
              fill="#111"
            />

            <rect
              x="258"
              y="44"
              width="42"
              height="5"
              fill="#6c6c7a"
            />

            <rect
              x="258"
              y="56"
              width="32"
              height="5"
              fill="#6c6c7a"
            />

          </g>

          {/* WEBSITE / DESIGN PREVIEW */}

          <rect
            x="82"
            y="24"
            width="150"
            height="124"
            fill="#fff"
          />

          <circle
            cx="157"
            cy="64"
            r="22"
            fill="#111"
          />

          <text
            className="desk-ui"
            x="157"
            y="73"
            textAnchor="middle"
            fontSize="26"
            fontWeight="800"
            fill="#401e97"
          >
            O
          </text>

          <text
            className="desk-hand"
            x="157"
            y="96"
            textAnchor="middle"
            fontSize="13"
            fill="#401e97"
          >
            OmoGiwa
          </text>

          <rect
            x="102"
            y="108"
            width="110"
            height="5"
            fill="#ddd"
          />

          <rect
            x="112"
            y="120"
            width="90"
            height="5"
            fill="#e6e6e6"
          />

          <rect
            x="125"
            y="132"
            width="64"
            height="12"
            rx="6"
            fill="#401e97"
          />

          {/* DESIGN SELECTION */}

          <rect
            x="78"
            y="20"
            width="158"
            height="132"
            fill="none"
            stroke="#6a3fd0"
            strokeDasharray="3 3"
          />

          <g fill="#6a3fd0">

            <rect
              x="75"
              y="17"
              width="6"
              height="6"
            />

            <rect
              x="233"
              y="17"
              width="6"
              height="6"
            />

            <rect
              x="75"
              y="149"
              width="6"
              height="6"
            />

            <rect
              x="233"
              y="149"
              width="6"
              height="6"
            />

          </g>

        </g>

      

        {/* PENCIL */}

        <g
          transform="translate(284 566) rotate(-12)"
          filter="url(#s)"
          className="desk-item"
        >

          <rect
            width="18"
            height="10"
            rx="3"
            fill="#cfc4ff"
          />

          <rect
            x="18"
            y="0"
            width="8"
            height="10"
            fill="#b9b9c2"
          />

          <rect
            x="26"
            width="110"
            height="10"
            fill="#401e97"
          />

          <path
            d="M136 0L160 5L136 10Z"
            fill="#e8c9a0"
          />

          <path
            d="M152 3.2L160 5L152 6.8Z"
            fill="#222"
          />

        </g>

        {/* PEN */}

        <g
          transform="translate(905 548) rotate(8)"
          filter="url(#s)"
          className="desk-item"
        >

          <rect
            width="130"
            height="9"
            rx="4.5"
            fill="#1a1a22"
          />

          <rect
            x="40"
            y="2"
            width="30"
            height="2.5"
            fill="#401e97"
          />

          <rect
            x="128"
            y="2"
            width="12"
            height="5"
            fill="#999"
          />

        </g>

        {/* BUSINESS CARD */}

        <g
          transform="translate(135 548) rotate(-8)"
          filter="url(#s)"
          className="desk-item"
        >

          <rect
            width="124"
            height="70"
            rx="3"
            fill="#fff"
          />

          <circle
            cx="24"
            cy="33"
            r="15"
            fill="#111"
          />

          <text
            className="desk-ui"
            x="24"
            y="40"
            textAnchor="middle"
            fontSize="19"
            fontWeight="800"
            fill="#401e97"
          >
            O
          </text>

          <text
            className="desk-ui"
            x="48"
            y="30"
            fontSize="9.5"
            fontWeight="700"
            fill="#111"
          >
            Omogbolahan Giwa
          </text>

          <text
            className="desk-ui"
            x="48"
            y="42"
            fontSize="6.5"
            fill="#666"
          >
            Designer + Software Engineer
          </text>

          <rect
            y="64"
            width="124"
            height="6"
            fill="#401e97"
          />

        </g>

        {/* MAIN WORK BUTTON */}

        <a
          href="/work"
          aria-label="View OmoGiwa's work"
        >

          <g
            className="lift"
            filter="url(#s)"
          >

            <rect
              x="110"
              y="655"
              width="200"
              height="54"
              rx="27"
              fill="#401e97"
              stroke="#d9b36a"
              strokeWidth="2"
            />

            <text
              className="desk-ui"
              x="210"
              y="688"
              textAnchor="middle"
              fontSize="18"
              fontWeight="600"
              fill="#fff"
            >
              View my work
            </text>

          </g>

        </a>

        {/* CONTACT BUTTON */}

        <a
          href="/contact"
          aria-label="Work with OmoGiwa"
        >

          <g
            className="lift"
            filter="url(#s)"
          >

            <rect
              x="890"
              y="655"
              width="200"
              height="54"
              rx="27"
              fill="#0d0d0f"
              stroke="#d9b36a"
              strokeWidth="2"
            />

            <text
              className="desk-ui"
              x="990"
              y="688"
              textAnchor="middle"
              fontSize="18"
              fontWeight="600"
              fill="#fff"
            >
              Let's work together
            </text>

          </g>

        </a>

      </svg>
    </div>
  );
}