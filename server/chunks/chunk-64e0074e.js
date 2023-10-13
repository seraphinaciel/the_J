import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import PropTypes from "prop-types";
import { forwardRef, useRef, useEffect, Fragment as Fragment$1 } from "react";
import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import { C as CM, T as Text } from "./chunk-7cdbbd50.js";
gsap.registerPlugin(ScrollTrigger);
const SvgLineIdList = [
  // pen circle
  // name rule :
  // `circle/option1.option2.option....`
  // 1. 타원인 정도를 수로 표기
  // 2. endpoint 방향
  // 나머지 동일하게 "." 으로 이어 적기.
  "circle/20.down.fill",
  "circle/18.up",
  "circle/16.up",
  "circle/14.up",
  "circle/8.up",
  "circle/6.up",
  "circle/4.down",
  // shape
  "tail arrow",
  // typo
  // shape의 대소문자 동일하게 반영.
  "typo/thej",
  "typo/difference"
];
const SvgLine = forwardRef(function SvgLine2({ shape, className, color = "black", style }, ref) {
  switch (shape) {
    case "circle/20.down.fill":
      return /* @__PURE__ */ jsx("svg", { ref, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 252 55", fill: "none", className, children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M38.6064 41.0944C27.7081 39.2469 16.6821 36.4277 7.79082 31.5385C4.4703 29.8276 1.8603 27.5214 1.15047 24.9454C-0.847375 18.3321 8.75274 14.4424 16.4332 11.8829C35.737 5.5203 58.0017 2.54457 80.4826 1.29207C100.398 0.167237 120.718 0.578295 141.042 1.39279C147.724 1.80857 154.424 2.43848 161.108 2.92744C168.119 3.68816 175.12 4.60743 182.129 5.42352C201.104 7.78167 232.342 12.9708 246.42 22.381C266.595 38.126 221.875 44.6326 206.16 47.9548C203.308 48.507 200.451 49.0517 197.589 49.5922C195.295 50.0158 193.803 47.8902 195.963 47.3657C210.108 44.2072 224.988 41.8184 238.005 37.2971C247.042 33.7855 252.486 29.2571 243.601 22.3714C236.997 17.9748 228.006 15.2784 219.509 13.0005C200.747 8.17974 181.109 6.43694 161.766 4.29833C155.188 3.86485 148.612 3.456 142.032 3.03276C135.11 2.8983 128.17 2.76851 121.253 2.63478C88.8579 2.42169 56.1514 4.12354 27.4292 11.7667C19.6841 14.085 6.71261 17.261 4.8532 22.9861C4.15991 25.8343 6.60979 28.5885 10.2904 30.5721C15.2499 33.4101 21.0533 35.5836 27.1164 37.1518C34.6406 39.1743 42.4679 40.302 50.2808 41.2367C61.1143 42.6276 71.96 43.8812 82.8133 45.0767C111.042 48.203 139.426 51.221 167.573 51.5058C173.17 51.6203 178.828 51.3921 184.426 52.5418C185.663 52.7621 185.996 53.9378 184.911 54.241C184.355 54.4325 183.7 54.2568 183.086 54.1491C181.859 53.9406 180.637 53.7327 179.393 53.6088C173.022 53.185 166.714 53.3251 160.362 53.0669C152.679 52.8647 144.958 52.4872 137.239 51.9121C122.785 50.8969 108.339 49.3826 93.9051 47.8247C75.4632 45.7514 56.9866 43.7709 38.6111 41.1019L38.6064 41.0944Z",
          fill: color,
          stroke: color,
          strokeWidth: "0.3"
        }
      ) });
    case "circle/16.up":
      return /* @__PURE__ */ jsx(
        "svg",
        {
          ref,
          className,
          viewBox: "0 0 345 90",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              d: "M167.071 11.3825C114.038 10.8715 58.5416 10.9539 11.5558 36.2693C7.5723 38.4119 3.41285 41.0324 1.74906 45.334C-1.89846 54.7778 8.48418 63.4141 17.571 67.3531C49.5668 81.2304 84.7142 85.2024 119.366 87.2461C172.255 90.3611 225.368 89.3227 278.113 84.1641C295.886 82.4171 313.916 80.1261 330.25 72.726C336.681 69.8088 343.288 65.5072 345.352 58.585C348.632 47.5755 338.873 37.1758 329.338 31.1766C306.301 16.7224 279.265 10.6903 252.548 6.81714C184.541 -3.05519 114.838 -0.335788 47.743 14.7776",
              stroke: color,
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        }
      );
    case "circle/18.up":
      return /* @__PURE__ */ jsx(
        "svg",
        {
          ref,
          className,
          viewBox: "0 0 368 83",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              d: "M59.2465 10.3111C43.6873 13.0265 28.6167 18.5686 14.9965 26.6355C9.81008 29.7004 4.52909 33.4956 2.40093 39.1647C-0.420855 46.6918 0.966391 52.2656 7.05136 57.4742C13.1363 62.6828 32.274 70.1781 52.7674 73.3541C129.681 85.2799 177.304 82.882 253.146 77.9434C286.077 75.7996 319.276 71.6073 350.237 60.0944C356.921 57.6171 363.936 54.6476 366.474 47.9463C371.597 34.4484 338.099 20.9505 317.605 16.1866C244.176 -0.88428 180.457 -4.45723 92.6665 10.057",
              stroke: color,
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        }
      );
    case "circle/4.down":
      return /* @__PURE__ */ jsx(
        "svg",
        {
          ref,
          className,
          viewBox: "0 0 152.2 67.79",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              d: "M74.3522 65.7749C51.531 66.4804 27.9212 66.9405 7.73796 52.1694C4.7005 49.9443 1.49665 46.8522 0.738525 41.4701C-0.375553 33.5532 4.36141 25.9189 8.94311 21.7677C15.3584 15.958 22.4237 12.7886 29.4469 10.206C59.0879 -0.698337 89.5456 -2.18439 118.56 5.87378C129.125 8.8076 139.724 13.1426 148.391 22.7418C151.289 25.9454 154.189 30.8923 153.375 36.8011C152.725 41.5153 149.924 44.7936 147.24 46.9736C141.913 51.2914 136.135 53.4391 130.406 55.2547C99.4103 65.087 67.8413 66.3742 37.4631 59.0592",
              stroke: color,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        }
      );
    case "circle/8.up":
      return /* @__PURE__ */ jsx(
        "svg",
        {
          ref,
          className,
          viewBox: "0 0 173 60",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              d: "M114.385 6.6519C90.2765 3.8312 65.6607 5.14755 42.0295 10.5141C32.1235 12.7707 22.3219 15.7505 13.4453 20.5819C6.52306 24.3428 -0.51856 31.0402 1.2866 38.5331C2.45026 43.3789 7.00046 46.7204 11.5208 49.0493C24.2465 55.6165 38.9414 57.5837 53.323 58.4517C80.7286 60.0862 108.373 58.0611 135.227 52.4486C146.087 50.1776 157.142 47.1688 165.899 40.5582C168.137 38.8658 170.271 36.8552 171.315 34.2948C172.881 30.4037 171.613 25.8472 169.017 22.5202C166.421 19.1932 162.677 16.8932 158.888 14.926C133.078 1.54571 102.51 0.677818 73.2394 1.06838",
              stroke: color,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        }
      );
    case "circle/14.up":
      return /* @__PURE__ */ jsx(
        "svg",
        {
          ref,
          className,
          viewBox: "0 0 382 95",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              d: "M149.963 11.0847C115.297 8.64405 80.1982 12.2936 46.7623 21.7825C33.5064 25.5461 20.1138 30.4502 9.95547 39.7795C4.92186 44.4099 0.617097 50.6598 1.02707 57.5027C1.68759 68.383 13.2581 74.8382 23.5303 78.3965C60.0638 91.1016 99.3077 93.5879 137.982 93.9984C180.984 94.4546 224.009 92.4474 266.761 88.0223C300.219 84.5552 333.929 79.4914 364.905 66.3985C372.125 63.342 380.165 58.5291 380.803 50.6826C381.509 42.3114 373.355 36.1071 365.93 32.2522C325.41 11.2216 278.445 7.48075 232.915 4.40142C187.681 1.3449 141.763 -1.41508 97.3717 7.84571",
              stroke: color,
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        }
      );
    case "circle/6.up":
      return /* @__PURE__ */ jsx(
        "svg",
        {
          ref,
          className,
          viewBox: "0 0 201 77",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              d: "M31.9904 19.7448C23.1655 21.5246 14.8061 25.5899 7.93614 31.4537C5.23655 33.758 2.68591 36.4745 1.58745 39.8653C-0.0881514 44.9985 1.99705 50.8061 5.60891 54.7965C9.22077 58.7868 14.1731 61.2972 19.1068 63.4141C55.8212 79.1508 97.6369 78.3265 136.827 70.7579C154.421 67.367 172.127 62.5149 187.003 52.4547C193.221 48.2395 199.272 42.3944 199.942 34.8821C200.538 28.1378 196.479 21.6557 191.061 17.6654C185.643 13.675 179.015 11.7266 172.499 10.078C125.471 -1.78068 75.5934 -2.02423 28.453 9.36613",
              stroke: color,
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        }
      );
    case "tail arrow":
      return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
        "svg",
        {
          ref,
          className,
          xmlns: "http://www.w3.org/2000/svg",
          width: "237",
          height: "252",
          viewBox: "0 0 237 252",
          fill: "none",
          children: [
            /* @__PURE__ */ jsx(
              "path",
              {
                d: "M144.681 37C158.133 51.0405 161.017 73.1784 155.035 91.7412C149.054 110.304 135.374 125.536 119.706 137.025C114.118 141.12 108.061 144.878 101.274 146.146C94.4874 147.414 86.7898 145.703 82.3565 140.371C74.7652 131.22 80.9749 115.896 91.7545 110.915C99.7557 107.218 109.609 107.859 117.064 112.596C128.208 119.654 132.656 134.443 130.743 147.552C128.83 160.66 121.664 172.379 113.784 182.997C106.967 192.194 99.4824 200.887 91.4205 209",
                stroke: color,
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            ),
            /* @__PURE__ */ jsx(
              "path",
              {
                d: "M91 192L91.1152 210C100.415 207.372 101.7 206.628 111 204",
                stroke: color,
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            )
          ]
        }
      ) });
    case "icon/x":
      return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 30 30", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...style, children: [
        /* @__PURE__ */ jsx("path", { d: "M3 3L27 27", stroke: "black", strokeWidth: "1.5" }),
        /* @__PURE__ */ jsx("path", { d: "M27 3L3 27", stroke: "black", strokeWidth: "1.5" })
      ] });
    case "typo/thej":
      return /* @__PURE__ */ jsxs(
        "svg",
        {
          ref,
          className,
          width: "322",
          height: "292",
          viewBox: "0 0 322 292",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            /* @__PURE__ */ jsx(
              "path",
              {
                d: "M14.8022 78.8677L104.14 81.2018",
                stroke: color,
                strokeWidth: "12",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            ),
            /* @__PURE__ */ jsx(
              "path",
              {
                d: "M82.5807 26.6116C82.5807 26.6116 6.32764 205.833 6.32764 225.969",
                stroke: color,
                strokeWidth: "12",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            ),
            /* @__PURE__ */ jsx(
              "path",
              {
                d: "M124.93 6.87622C124.93 6.87622 60.2364 172.546 59.4565 179.13C66.7699 164.028 97.2018 105.205 119.922 112.172C142.642 119.14 95.2781 206.617 95.2781 206.617",
                stroke: color,
                strokeWidth: "12",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            ),
            /* @__PURE__ */ jsx(
              "path",
              {
                d: "M147.274 143.126C152.663 144.676 176.163 158.994 186.163 130.741C196.162 102.488 137.552 106.999 138.99 165.352C139.527 187.178 154.604 195.783 167.29 191.097C185.227 184.478 196.908 166.362 204.568 155.476",
                stroke: color,
                strokeWidth: "12",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            ),
            /* @__PURE__ */ jsx(
              "path",
              {
                d: "M315.181 82.7529L311.455 92.281",
                stroke: color,
                strokeWidth: "12",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            ),
            /* @__PURE__ */ jsx(
              "path",
              {
                d: "M258.968 168.295C258.968 168.295 286.315 157.078 306.332 113.322C293.23 156.294 261.654 266.223 210.825 284.409C175.696 291.916 167.309 236.803 167.309 236.803",
                stroke: color,
                strokeWidth: "12",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            )
          ]
        }
      );
    case "typo/difference":
      return /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 211 52", fill: "none", children: [
        /* @__PURE__ */ jsxs("g", { clipPath: "url(#clip0_1561_2525)", children: [
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M15.7455 0.928964C11.8905 0.859875 8.21442 2.33148 5.35068 4.9016C4.70359 5.79285 5.63981 6.98119 6.26625 7.65136C6.85139 8.23862 8.16623 9.25423 9.00607 8.56333C13.7698 4.12089 21.5969 3.91362 26.8011 7.69281C29.1761 11.2371 27.5102 16.3497 26.629 20.2325C22.9461 28.7927 12.393 35.7845 4.33186 39.9437C6.68617 31.4043 9.27455 22.7266 13.46 14.8366C14.9814 14.9748 14.9194 13.7243 14.1966 12.4807C13.2191 10.788 11.0231 9.09532 9.94918 10.8778C6.28002 17.1442 4.20106 24.219 1.95688 31.0865C0.676466 35.5151 -2.54523 42.7487 3.82244 44.5658C11.1263 44.5174 23.7584 33.3111 28.35 27.6527C36.0394 14.6916 32.1293 1.64058 15.7455 0.928964Z",
              fill: "black"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M42.554 2.4493C40.4131 4.83288 39.6559 8.29426 38.4994 11.2513C38.3479 12.4189 39.3736 13.4829 40.2341 14.1461C40.599 14.4018 41.2117 14.7472 41.7348 14.7472C42.0859 14.7472 42.3888 14.5952 42.5471 14.153C43.3663 11.6727 44.2681 9.20623 45.5486 6.91938C47.7514 5.68268 44.4058 1.77913 42.554 2.45621V2.4493Z",
              fill: "black"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M37.354 16.578C35.6399 19.9496 34.6211 23.6666 33.4852 27.273C32.7693 31.2595 28.2328 41.5607 34.3664 42.597H34.3733C34.7312 42.597 35.1443 42.4036 35.1856 41.996C35.5573 36.8212 36.9823 31.826 38.5312 26.9C39.2815 24.7858 40.025 22.1121 41.1471 20.067C41.7047 19.7216 41.4156 18.706 41.0989 18.1671C40.4449 17.0824 38.5036 15.1962 37.354 16.578Z",
              fill: "black"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M83.3837 19.1757C83.1979 17.6073 81.5526 15.8386 79.9005 15.9354C77.6769 16.2048 75.4465 16.4535 73.223 16.7092C75.4328 12.4602 78.2208 8.59809 82.0207 5.44071C82.0345 5.98651 82.0207 6.53923 81.9932 7.09194C81.9312 7.68611 81.8693 8.26646 81.7385 8.85372C80.9606 10.4566 83.0946 12.4464 84.6091 12.7296C86.1442 12.9645 85.8964 10.6017 86.0685 9.59988C86.9083 2.37314 81.1258 -2.77401 75.8045 4.07965C74.9715 4.92254 74.2143 5.81379 73.4984 6.72577C72.2868 0.735723 68.0187 -3.25764 62.1742 3.61675C58.0438 8.15592 55.4555 13.6278 53.3559 19.3208C50.6918 19.7007 48.0208 20.0255 45.336 20.1844C42.9955 20.7233 46.107 24.2883 47.6422 24.2883C47.6766 24.2883 47.711 24.2883 47.7454 24.2883C49.0878 24.1915 50.4233 24.0672 51.7657 23.929C50.8639 26.6442 50.0103 29.3732 49.0947 32.0332C47.2567 37.0767 45.1089 42.5693 43.9042 47.9237C43.7871 49.1052 44.7578 50.1553 45.6389 50.8255C46.2309 51.2538 46.6853 51.4404 47.0364 51.4404C48.3856 51.4404 48.248 48.7735 48.8606 47.3572C50.9602 40.2548 53.8859 33.4288 55.9787 26.3195C56.3297 25.3246 56.6877 24.309 57.0594 23.2865C59.9576 22.8927 62.8557 22.4574 65.7539 22.0429C64.3014 26.2919 63.0967 30.6514 61.7337 34.8658C60.0677 39.3083 58.45 43.7715 57.0319 48.3037C56.612 49.9342 58.4638 51.62 59.9163 51.9793C59.9989 51.9931 60.0815 52 60.1572 52C61.3895 52 61.2724 50.0448 61.7405 49.1466C65.4235 40.469 67.3854 30.3405 71.1027 21.3243C72.156 21.2 73.2161 21.0756 74.2762 20.972C75.7563 20.4676 83.6522 20.7509 83.4044 19.1757H83.3837ZM67.4749 17.3793C66.0912 17.5452 64.7075 17.7248 63.3307 17.9113C61.8507 18.0841 60.3706 18.2913 58.8975 18.5055C61.2449 12.9507 64.3289 7.68611 69.3542 4.356C69.4231 4.74981 69.4781 5.13671 69.5332 5.53052C69.6915 7.40284 69.7535 9.25444 69.6709 11.1337C69.5263 11.5689 69.5676 12.0456 69.7397 12.5155C68.8999 14.0907 68.1564 15.7212 67.4749 17.3862V17.3793Z",
              fill: "black"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M97.2376 28.5236C99.5024 26.1745 102.036 23.0863 101.506 19.5972C100.748 16.5919 97.4578 13.8697 94.2912 14.6988C85.5486 18.5954 75.1125 39.1979 88.3572 43.592C88.9561 43.7509 89.5413 43.8269 90.1264 43.8269C93.1898 43.8269 95.9778 41.7956 98.4422 40.0615C99.3303 39.419 98.5042 38.1132 97.9879 37.4983C97.3133 36.759 96.1981 35.7503 95.1379 36.1441C92.584 37.7746 89.6721 40.4691 86.4366 39.5019C85.6312 37.2703 86.4022 34.8107 87.0011 32.6068C90.3329 35.9369 94.6354 30.5755 97.2444 28.5167L97.2376 28.5236ZM88.9492 27.9571C91.0764 24.399 93.4858 20.302 97.4716 18.6784C96.2325 23.2244 92.2191 26.4509 88.4467 28.9519C88.6051 28.6203 88.7772 28.2887 88.9561 27.964L88.9492 27.9571Z",
              fill: "black"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M110.507 24.5025C111.223 22.4436 111.835 20.212 113.205 18.4641C114.878 18.5608 114.733 17.4485 113.942 16.3292C113.123 15.1685 111.608 14.0078 110.713 14.222C106.686 15.5692 104.552 29.5875 103.347 33.7743C102.735 37.0353 100.697 41.7956 105.206 43.053C105.275 43.0668 105.337 43.0668 105.399 43.0668C106.796 43.0668 106.865 40.4276 107.567 39.4396C110.279 34.0714 112.923 26.4854 119.284 24.8203C120.42 24.5992 119.662 23.0378 119.284 22.4989C116.909 18.8303 112.462 21.96 110.493 24.4956L110.507 24.5025Z",
              fill: "black"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M138.092 33.4218C137.005 32.8069 134.671 34.6102 132.151 36.4134C129.797 38.1061 127.284 39.7919 125.488 39.5017C125.488 39.4948 125.474 39.481 125.467 39.474C124.552 37.4566 124.696 35.1214 124.965 32.9727C126.355 34.6585 128.069 33.9469 129.577 32.8898C131.787 31.5702 133.976 30.147 135.924 28.4543C141.61 24.8409 139.717 13.8695 132.516 14.0284C122.163 17.0407 114.859 37.9679 126.679 43.3638C127.195 43.4812 127.704 43.5296 128.207 43.5296C132.654 43.5296 136.385 39.3359 140.082 37.201C141.3 35.9298 139.242 33.9883 138.085 33.4218H138.092ZM135.105 18.1323C136.289 23.7769 129.625 26.6718 125.784 29.2695C127.512 24.7995 130.451 19.8941 135.105 18.1323Z",
              fill: "black"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M160.413 17.3311C156.813 19.9842 153.391 22.9343 150.665 26.5131C151.216 24.247 151.822 21.9878 152.517 19.7631C152.517 19.7493 152.524 19.7354 152.531 19.7216C153.736 18.5471 151.973 16.4192 150.824 15.8043C150.342 15.521 149.254 15.065 148.903 15.8043C147.919 18.0635 147.451 20.5507 146.804 22.9274C145.86 26.6513 145.041 30.4097 144.236 34.1682C143.933 36.7521 142.033 40.0961 144.663 42.0168C146.046 43.2673 147.272 43.1567 147.946 41.319C151.278 34.5966 154.892 28.0054 161.033 23.3557C160.75 27.736 156.372 41.3604 161.012 43.3778C161.301 43.592 161.762 43.7578 162.169 43.7578C162.644 43.7578 163.043 43.5367 163.029 42.9287C162.933 40.027 163.277 37.5052 163.683 34.5206C163.896 29.4356 167.469 22.9205 163.91 18.4987C163.063 17.6213 161.652 16.6886 160.427 17.3242L160.413 17.3311Z",
              fill: "black"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M186.791 30.4576C186.233 29.9878 185.042 29.2279 184.492 30.0431C182.612 35.1143 176.665 40.3927 171.171 40.6345C167.529 35.5081 177.401 19.0648 183.314 18.2288C183.383 19.8248 182.936 21.3586 182.578 22.8924C182.709 24.3225 184.574 26.3468 186.061 25.6283C188.491 20.8335 186.061 12.9297 179.618 14.8366C174.193 17.151 171.185 23.0029 168.624 28.0257C165.808 33.3525 165.595 41.5188 172.114 44.0682C172.548 44.3101 173.071 44.4137 173.67 44.4137C179.397 44.4137 191.61 34.3266 186.798 30.4576H186.791Z",
              fill: "black"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M201.121 31.3837C204.908 29.0623 209.251 25.974 209.995 21.2759C210.201 17.3585 205.892 14.1252 202.175 14.7815C191.924 16.9371 185.075 39.0526 197.762 42.2791C198.12 42.3274 198.478 42.3481 198.836 42.3481C202.285 42.3481 205.458 40.2893 208.074 38.1821C208.728 37.2908 207.785 36.0956 207.159 35.4323C206.574 34.845 205.266 33.8294 204.419 34.5134C201.927 36.4548 198.767 38.6933 195.456 38.1406C194.609 36.0472 195.098 33.6843 195.456 31.5288C197.087 33.7603 199.256 32.5927 201.115 31.3837H201.121ZM205.906 18.8025C204.708 23.3279 200.24 26.0569 196.433 28.2677C196.406 28.2677 196.372 28.2539 196.344 28.2539C197.989 24.1224 201.011 19.072 205.906 18.8094V18.8025Z",
              fill: "black"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "clip0_1561_2525", children: /* @__PURE__ */ jsx("rect", { width: "211", height: "52", fill: "white" }) }) })
      ] });
    default:
      return "No icon";
  }
});
SvgLine.propTypes = {
  shape: PropTypes.oneOf(SvgLineIdList),
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
};
const tweenSVGLine = (pathElement, config = {}) => {
  const tl = gsap.timeline();
  const pathLength = pathElement.getTotalLength();
  const setValue = {
    ...config,
    // never override value
    opacity: 0,
    strokeDasharray: pathLength,
    strokeDashoffset: pathLength,
    repeat: 0
  };
  tl.set(pathElement, setValue);
  return tl;
};
function LineMotionText({
  styleId,
  children,
  color = "black",
  extendLineStyle = null,
  slicePoint = 0.6,
  cutoffRatio = 0.9,
  animateDelegation = true
}) {
  const lineRef = useRef(null);
  useEffect(() => {
    if (!animateDelegation)
      return;
    const pathElement = lineRef.current instanceof SVGPathElement ? lineRef.current : lineRef.current.querySelector("path");
    const animate2 = tweenSVGLine(pathElement);
    const callback = (entries, observer) => {
      const [{ intersectionRatio }] = entries;
      if (cutoffRatio < intersectionRatio) {
        const stream = [
          [{ duration: 2, opacity: 1 }, "start"],
          [{ duration: 1, strokeDashoffset: 0 }, `start+=${slicePoint}`]
        ];
        stream.map((chuck) => animate2.to(pathElement, ...chuck));
        observer.disconnect();
      }
    };
    const intersectionObserver = new IntersectionObserver(callback, {
      threshold: [cutoffRatio]
    });
    const cleanUp = () => {
      intersectionObserver.unobserve(pathElement);
      animate2.revert();
    };
    return cleanUp;
  }, [slicePoint, cutoffRatio]);
  return /* @__PURE__ */ jsxs("span", { className: CM("line-motion", "inline-grid grid-cols-1 grid-rows-1 place-items-center"), children: [
    /* @__PURE__ */ jsx(Text, { tagName: "span", className: "row-span-1 col-span-1 row-start-1 col-start-1", children }),
    /* @__PURE__ */ jsx(
      SvgLine,
      {
        ref: lineRef,
        shape: styleId,
        color,
        className: CM("svg", "row-span-1 col-span-1 row-start-1 col-start-1", extendLineStyle)
      }
    )
  ] });
}
LineMotionText.propTypes = {
  styleId: PropTypes.oneOf(SvgLineIdList).isRequired,
  children: PropTypes.node.isRequired,
  extendLineStyle: PropTypes.string,
  color: PropTypes.string,
  slicePoint: PropTypes.number,
  cutoffRatio: PropTypes.number,
  animateDelegation: PropTypes.bool
};
function animateSvg(pathElements, duration) {
  let tl = gsap.timeline();
  console.log(pathElements);
  pathElements.forEach((path) => {
    const pathLength = path.getTotalLength();
    tl.from(path, { duration: 1e-6, opacity: 0 }, ">").set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength
    }).to(
      path,
      {
        duration,
        opacity: 1,
        ease: "power3.out",
        strokeDashoffset: 0
      },
      ">"
    );
  });
}
gsap.registerPlugin(ScrollTrigger);
const splitTypeList = ["none", "word", "letter"];
const animationTypeList = ["fade in", "fade up", "fill"];
const unitClass = "split-unit";
const animationConfigSet = {
  title: { arrange: { start: "top 70%", end: "+=70%" } },
  description: {
    arrange: {
      start: "top 95%"
    }
  }
};
const contentToArray = (split, content) => {
  switch (split) {
    case "letter":
      return [...content];
    case "word":
      return content.split(" ");
    case "none":
    default:
      return [content];
  }
};
const animate = ({ context, type, target, trigger, options }) => {
  const { duration, markers, ease, arrange } = options;
  const pathElements = gsap.utils.toArray(`${target} path`);
  const config = (() => {
    switch (type) {
      case "fade in":
        return {
          api: "from",
          params: [
            {
              x: 0,
              z: 0,
              y: trigger.offsetHeight * 1,
              willChange: "opacity",
              opacity: 0,
              stagger: 0.15,
              duration,
              ease
            }
          ]
        };
      case "fade up":
        return {
          api: "from",
          params: [
            {
              x: 0,
              y: trigger.offsetHeight * 1.1,
              z: 0,
              willChange: "opacity",
              opacity: 0,
              stagger: 0.03,
              duration,
              ease
            }
          ]
        };
      case "fill":
        return {
          api: "to",
          params: [
            {
              willChange: "opacity",
              opacity: 1,
              stagger: 1
            }
          ]
        };
      default:
        return {};
    }
  })();
  if (null == (config == null ? void 0 : config.api))
    return;
  const tl = gsap.timeline({
    scrollTrigger: {
      start: arrange.start,
      end: arrange.end,
      toggleActions: "restart pause resume reverse",
      trigger,
      markers,
      scrub: type === "fill" ? 1.5 : false
    },
    onComplete: 0 < pathElements.length && (() => animateSvg(pathElements, duration))
  });
  if (0 < pathElements.length) {
    tl.set(pathElements, { opacity: 0 });
  }
  tl[config.api](gsap.utils.toArray(target), ...config.params);
};
function Word({
  // component
  content,
  tagName = "span",
  splitType = "word",
  // animation
  animationConfig,
  animationType = "fade up",
  // animation:svg path
  location = null,
  styleId = null,
  color = "black",
  // rest : className...
  ...props
}) {
  const Wrapper = tagName;
  const wrap = useRef(null);
  const splitContent = contentToArray(splitType, content);
  useEffect(() => {
    const ctx = gsap.context((context) => {
      const options = {
        duration: 1,
        ease: "circ.out",
        arrange: {
          start: "top center",
          end: "bottom center"
        },
        markers: false,
        ...animationConfig
      };
      context.add(
        splitType,
        () => animate({
          context,
          type: animationType,
          target: `.${unitClass}`,
          trigger: wrap.current,
          options
        })
      );
      context[splitType]();
    }, wrap);
    return () => ctx.revert();
  }, [content, splitType, animationType, animationConfig]);
  return /* @__PURE__ */ jsx(
    Wrapper,
    {
      ref: wrap,
      className: CM(
        // base
        {
          "overflow-hidden ": location,
          "flex flex-wrap items-center gap-x-[0.25em]": animationType === "fade up"
        },
        // possible override by props
        props.className
      ),
      children: splitContent.map((word, index) => {
        return /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx(
          "span",
          {
            className: CM(unitClass, {
              "opacity-[0.1]": splitType === "letter"
            }),
            style: {
              "--index": index
            },
            children: word.includes(location) ? /* @__PURE__ */ jsx(LineMotionText, { styleId, color, animateDelegation: false, children: word }) : `${word}${splitType === "word" ? " " : ""}`
          }
        ) }, index);
      })
    }
  );
}
Word.propTypes = {
  // component render props
  content: PropTypes.string.isRequired,
  tagName: PropTypes.string,
  splitType: PropTypes.oneOf(splitTypeList),
  className: PropTypes.string,
  // animation props
  animationConfig: PropTypes.shape({
    arrange: PropTypes.shape({
      start: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      end: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
    }),
    markers: PropTypes.bool
  }),
  animationType: PropTypes.oneOf(animationTypeList),
  // SVG props
  location: PropTypes.string,
  styleId: PropTypes.oneOf(SvgLineIdList),
  color: PropTypes.string
};
export {
  LineMotionText as L,
  SvgLine as S,
  Word as W,
  animationConfigSet as a,
  animateSvg as b
};
