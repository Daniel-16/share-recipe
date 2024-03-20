"use client";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

export default function Brand({
  state,
  setState,
}: {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="flex items-center justify-between py-5 md:block">
      <Link href="/">
        {/* <Image
          src="https://www.floatui.com/logo.svg"
          width={120}
          height={50}
          alt="Float UI logo"
        /> */}
        <svg
          width="150"
          height="65"
          viewBox="0 0 210 73"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.7261 30.302C26.9481 30.302 27.1393 30.3883 27.2996 30.561L28.8536 32.263C27.7683 33.5457 26.4425 34.5385 24.8761 35.2415C23.3221 35.9445 21.4475 36.296 19.2521 36.296C17.3281 36.296 15.583 35.963 14.0166 35.297C12.4626 34.631 11.1306 33.6998 10.0206 32.5035C8.92295 31.3072 8.07195 29.8765 7.46762 28.2115C6.86328 26.5465 6.56112 24.715 6.56112 22.717C6.56112 20.719 6.87562 18.8875 7.50462 17.2225C8.14595 15.5575 9.04012 14.1268 10.1871 12.9305C11.3341 11.7342 12.7031 10.803 14.2941 10.137C15.8975 9.471 17.6673 9.138 19.6036 9.138C21.4906 9.138 23.168 9.44633 24.6356 10.063C26.1033 10.6797 27.3798 11.4998 28.4651 12.5235L27.1701 14.355C27.0838 14.4907 26.9728 14.6017 26.8371 14.688C26.7138 14.7743 26.5473 14.8175 26.3376 14.8175C26.1033 14.8175 25.8258 14.7003 25.5051 14.466C25.1968 14.2317 24.7836 13.9727 24.2656 13.689C23.76 13.393 23.131 13.1278 22.3786 12.8935C21.6263 12.6592 20.689 12.542 19.5666 12.542C18.247 12.542 17.0383 12.7763 15.9406 13.245C14.843 13.7013 13.8933 14.3673 13.0916 15.243C12.3023 16.1063 11.6856 17.1732 11.2416 18.4435C10.81 19.7015 10.5941 21.126 10.5941 22.717C10.5941 24.3327 10.8223 25.7695 11.2786 27.0275C11.735 28.2855 12.364 29.3523 13.1656 30.228C13.9673 31.1037 14.9108 31.7697 15.9961 32.226C17.0815 32.6823 18.2531 32.9105 19.5111 32.9105C20.2758 32.9105 20.9603 32.8673 21.5646 32.781C22.1813 32.6823 22.7425 32.5405 23.2481 32.3555C23.7661 32.1705 24.2533 31.9362 24.7096 31.6525C25.166 31.3565 25.6161 31.005 26.0601 30.598C26.1588 30.5117 26.2636 30.4438 26.3746 30.3945C26.4856 30.3328 26.6028 30.302 26.7261 30.302ZM96.156 20.9225H97.451C97.9197 20.9225 98.2959 20.867 98.5795 20.756C98.8755 20.6327 99.1407 20.4292 99.375 20.1455L107.83 10.322C108.101 9.989 108.378 9.76083 108.662 9.6375C108.946 9.50183 109.297 9.434 109.717 9.434H113.084L103.242 20.756C102.995 21.0767 102.748 21.3357 102.502 21.533C102.267 21.7303 102.021 21.8968 101.762 22.0325C102.44 22.2668 103.032 22.7417 103.538 23.457L113.768 36H110.346C110.099 36 109.883 35.9815 109.698 35.9445C109.525 35.9075 109.371 35.8582 109.236 35.7965C109.112 35.7225 108.995 35.6362 108.884 35.5375C108.785 35.4388 108.693 35.3217 108.607 35.186L99.856 24.826C99.7327 24.6657 99.6094 24.53 99.486 24.419C99.3627 24.308 99.2209 24.2217 99.0605 24.16C98.9002 24.086 98.7152 24.0367 98.5055 24.012C98.2959 23.975 98.0492 23.9565 97.7655 23.9565H96.156V36H92.2155V9.434H96.156V20.9225Z"
            fill="#A7727D"
          />
          <path
            d="M57.5662 22.717C57.5662 24.7027 57.2455 26.528 56.6042 28.193C55.9752 29.8457 55.081 31.2763 53.9217 32.485C52.7624 33.6813 51.3749 34.6125 49.7592 35.2785C48.1435 35.9445 46.349 36.2775 44.3757 36.2775C42.4147 36.2775 40.6202 35.9445 38.9922 35.2785C37.3765 34.6125 35.989 33.6813 34.8297 32.485C33.6827 31.2763 32.7885 29.8457 32.1472 28.193C31.5059 26.528 31.1852 24.7027 31.1852 22.717C31.1852 20.7437 31.5059 18.9245 32.1472 17.2595C32.7885 15.5945 33.6827 14.1638 34.8297 12.9675C35.989 11.7588 37.3765 10.8215 38.9922 10.1555C40.6202 9.47717 42.4147 9.138 44.3757 9.138C46.349 9.138 48.1435 9.47717 49.7592 10.1555C51.3749 10.8215 52.7624 11.7588 53.9217 12.9675C55.081 14.1638 55.9752 15.5945 56.6042 17.2595C57.2455 18.9245 57.5662 20.7437 57.5662 22.717ZM53.5332 22.717C53.5332 21.1383 53.3174 19.72 52.8857 18.462C52.454 17.204 51.8374 16.1372 51.0357 15.2615C50.2464 14.3858 49.2844 13.7137 48.1497 13.245C47.0274 12.7763 45.7694 12.542 44.3757 12.542C42.982 12.542 41.7179 12.7763 40.5832 13.245C39.4609 13.7137 38.4989 14.3858 37.6972 15.2615C36.8955 16.1372 36.2789 17.204 35.8472 18.462C35.4155 19.72 35.1997 21.1383 35.1997 22.717C35.1997 24.308 35.4155 25.7325 35.8472 26.9905C36.2789 28.2362 36.8955 29.2968 37.6972 30.1725C38.4989 31.0482 39.4609 31.7203 40.5832 32.189C41.7179 32.6453 42.982 32.8735 44.3757 32.8735C45.7694 32.8735 47.0274 32.6453 48.1497 32.189C49.2844 31.7203 50.2464 31.0482 51.0357 30.1725C51.8374 29.2968 52.454 28.2362 52.8857 26.9905C53.3174 25.7325 53.5332 24.308 53.5332 22.717ZM87.2674 22.717C87.2674 24.7027 86.9467 26.528 86.3054 28.193C85.6764 29.8457 84.7822 31.2763 83.6229 32.485C82.4635 33.6813 81.076 34.6125 79.4604 35.2785C77.8447 35.9445 76.0502 36.2775 74.0769 36.2775C72.1159 36.2775 70.3214 35.9445 68.6934 35.2785C67.0777 34.6125 65.6902 33.6813 64.5309 32.485C63.3839 31.2763 62.4897 29.8457 61.8484 28.193C61.207 26.528 60.8864 24.7027 60.8864 22.717C60.8864 20.7437 61.207 18.9245 61.8484 17.2595C62.4897 15.5945 63.3839 14.1638 64.5309 12.9675C65.6902 11.7588 67.0777 10.8215 68.6934 10.1555C70.3214 9.47717 72.1159 9.138 74.0769 9.138C76.0502 9.138 77.8447 9.47717 79.4604 10.1555C81.076 10.8215 82.4635 11.7588 83.6229 12.9675C84.7822 14.1638 85.6764 15.5945 86.3054 17.2595C86.9467 18.9245 87.2674 20.7437 87.2674 22.717ZM83.2344 22.717C83.2344 21.1383 83.0185 19.72 82.5869 18.462C82.1552 17.204 81.5385 16.1372 80.7369 15.2615C79.9475 14.3858 78.9855 13.7137 77.8509 13.245C76.7285 12.7763 75.4705 12.542 74.0769 12.542C72.6832 12.542 71.419 12.7763 70.2844 13.245C69.162 13.7137 68.2 14.3858 67.3984 15.2615C66.5967 16.1372 65.98 17.204 65.5484 18.462C65.1167 19.72 64.9009 21.1383 64.9009 22.717C64.9009 24.308 65.1167 25.7325 65.5484 26.9905C65.98 28.2362 66.5967 29.2968 67.3984 30.1725C68.2 31.0482 69.162 31.7203 70.2844 32.189C71.419 32.6453 72.6832 32.8735 74.0769 32.8735C75.4705 32.8735 76.7285 32.6453 77.8509 32.189C78.9855 31.7203 79.9475 31.0482 80.7369 30.1725C81.5385 29.2968 82.1552 28.2362 82.5869 26.9905C83.0185 25.7325 83.2344 24.308 83.2344 22.717Z"
            fill="black"
          />
          <path
            d="M0.696958 35.1044C90.6527 65.1024 128.195 37.5009 123.587 30.3981"
            stroke="black"
            strokeWidth="3"
          />
        </svg>
      </Link>
      <div className="md:hidden">
        <button
          className="menu-btn text-gray-500 hover:text-gray-800"
          onClick={() => setState(!state)}
        >
          {state ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
