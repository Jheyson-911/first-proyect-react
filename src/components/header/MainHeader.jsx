import { useState } from 'react';
import avatar from '../../assets/avatar.jpg';
export const MainHeader = () => {
  const [open, setOpen] = useState(false);
  const handleClick = e => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <header className='sticky top-0 bg-mobile-black w-full'>
      <div className='relative'>
        <div className='flex justify-between  items-center pl-4  h-10 lg:container lg:mx-24'>
          <div className='text-white-main font-bold md:text-2xl'>
            Willis Corto
          </div>
          <div className='text-white-main bg-green-main h-full flex items-center justify-center w-10 lg:hidden'>
            <button onClick={handleClick}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={3.0}
                stroke='currentColor'
                className='w-6 h-6 font-extrabold'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`fixed w-2/3 md:w-1/3 top-0  transition-transform h-screen bg-green-main overflow-y-scroll
         ${
           open
             ? 'md:translate-x-[200%] translate-x-[50%] transition-transform '
             : 'md:translate-x-[300%] translate-x-[150%] transition-transform '
         }`}
        >
          <div className='flex flex-col gap-4 justify-center'>
            <div className='self-end h-10 p-2'>
              <button onClick={handleClick}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 font-extrabold text-white-main '
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <img
              src={avatar}
              alt='Avatar del usuario'
              className='w-1/2 rounded-full self-center'
            />
            <div>
              <p className='text-white-main font-semibold text-2xl text-center'>
                Willis Corto
              </p>
              <p className='italic text-white-main text-center'>
                I got reprogrammed by a rogue AI and now I'm totally cray
              </p>
            </div>
            <nav>
              <ul className='flex flex-col'>
                <li className='nav-link'>
                  <a
                    href='#about'
                    onClick={e => setOpen(false)}
                  >
                    About
                  </a>
                </li>
                <li className='nav-link'>
                  <a
                    href='#ICanDo'
                    onClick={e => setOpen(false)}
                  >
                    things I can Do
                  </a>
                </li>
                <li className='nav-link'>
                  <a
                    href='#Accomplishments'
                    onClick={e => setOpen(false)}
                  >
                    A Few Accomplishments
                  </a>
                </li>
                <li className='nav-link'>
                  <a
                    href='#Contact'
                    onClick={e => setOpen(false)}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className='flex justify-evenly px-6'>
              <div>
                <svg
                  viewBox='0 0 512 512'
                  fill='currentColor'
                  height='1em'
                  width='1em'
                  className='icons-link'
                >
                  <path d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z' />
                </svg>
              </div>
              <div>
                <svg
                  fill='none'
                  viewBox='0 0 24 24'
                  height='1em'
                  width='1em'
                  className='icons-link'
                >
                  <path
                    fill='currentColor'
                    d='M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z'
                  />
                </svg>
              </div>
              <div>
                <svg
                  fill='currentColor'
                  viewBox='0 0 16 16'
                  height='1em'
                  width='1em'
                  className='icons-link'
                >
                  <path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 00-1.417.923A3.927 3.927 0 00.42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 001.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 00-.923-1.417A3.911 3.911 0 0013.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 01-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 01-.92-.598 2.48 2.48 0 01-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 100 1.92.96.96 0 000-1.92zm-4.27 1.122a4.109 4.109 0 100 8.217 4.109 4.109 0 000-8.217zm0 1.441a2.667 2.667 0 110 5.334 2.667 2.667 0 010-5.334z' />
                </svg>
              </div>
              <div>
                <svg
                  fill='currentColor'
                  viewBox='0 0 16 16'
                  height='1em'
                  width='1em'
                  className='icons-link'
                >
                  <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0016 8c0-4.42-3.58-8-8-8z' />
                </svg>
              </div>
              <div>
                <svg
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  height='1em'
                  width='1em'
                  className='icons-link'
                >
                  <path d='M20 8l-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z' />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
