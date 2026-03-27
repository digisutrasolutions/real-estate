"use client";

import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

export default function SmartContactDock() {
  const phone = "+18886445402";
  const displayPhone = "+1-888-644-5402";
  const whatsappNumber = "919953900123";
  const message =
    "Hi DigiSutra Solutions 👋 I’m interested in your digital marketing services.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <>
      <style jsx>{`
        /* Floating motion */
        @keyframes floatPremium {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .float {
          animation: floatPremium 3s ease-in-out infinite;
        }

        /* Inside Glow (NO OVERFLOW) */
        @keyframes glowSandInside {
          0% {
            box-shadow: inset 0 0 0 rgba(214, 180, 145, 0.32);
          }
          50% {
            box-shadow: inset 0 0 20px rgba(214, 180, 145, 0.72);
          }
          100% {
            box-shadow: inset 0 0 0 rgba(214, 180, 145, 0.32);
          }
        }

        @keyframes glowAmberInside {
          0% {
            box-shadow: inset 0 0 0 rgba(246, 107, 5, 0.4);
          }
          50% {
            box-shadow: inset 0 0 20px rgba(246, 107, 5, 0.84);
          }
          100% {
            box-shadow: inset 0 0 0 rgba(246, 107, 5, 0.4);
          }
        }

        .animate-glowSand {
          animation: glowSandInside 2.5s ease-in-out infinite;
        }

        .animate-glowAmber {
          animation: glowAmberInside 2.5s ease-in-out infinite;
        }

        /* Shine sweep */
        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 200%;
          }
        }

        .shine::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          height: 100%;
          width: 40%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.6),
            transparent
          );
          transform: skewX(-20deg);
          animation: shine 3.5s infinite;
        }

        /* Hover effect */
        .hover-grow {
          transition: all 0.3s ease;
        }

        .hover-grow:hover {
          transform: translateX(-4px) scale(1.05);
        }
      `}</style>

      <div className="fixed right-3.5 top-[300px] -translate-y-1/2 z-50 flex flex-col gap-2">
        <div
          className="flex"
          style={{
            transform: "rotate(-90deg) translateX(30px)",
            transformOrigin: "right center",
          }}
        >
          {/* WhatsApp */}
          <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <div className="relative overflow-hidden border border-white/20 bg-gradient-to-r from-[#7e5d44] to-[#b58e6c] text-[#fff6ec] px-4 py-2 shadow-[0_10px_24px_rgba(47,30,20,0.24)] float hover-grow shine transition hover:from-[#73543d] hover:to-[#a88261]">
              <span className="absolute inset-0 pointer-events-none animate-glowSand"></span>

              <div className="relative flex items-center gap-2 z-10">
                <MessageCircle className="h-4 w-4" />
                <span className="text-[14px] font-semibold whitespace-nowrap">
                  WhatsApp
                </span>
              </div>
            </div>
          </Link>

          {/* Call */}
          <a href={`tel:${phone}`}>
            <div className="relative overflow-hidden border border-[#f8b57f]/55 bg-gradient-to-r from-[#f66b05] to-[#e25f04] text-white px-4 py-2 shadow-[0_10px_24px_rgba(100,48,14,0.3)] float hover-grow shine transition hover:from-[#e76304] hover:to-[#ce5604]">
              <span className="absolute inset-0 pointer-events-none animate-glowAmber"></span>

              <div className="relative flex items-center gap-2 z-10">
                <Phone className="h-4 w-4" />
                <span className="text-[14px] font-semibold whitespace-nowrap">
                  Call {displayPhone}
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
