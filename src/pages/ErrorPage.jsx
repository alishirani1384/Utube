import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
      <main class="grid w-full h-screen place-items-center bg-white dark:bg-gray-900 py-24 px-6 sm:py-32 lg:px-8">
          <div class="text-center">
              <p class="text-base font-semibold text-indigo-600 dark:text-white">404</p>
              <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">صفحه پیدا نشد</h1>
              <p class="mt-6 text-base leading-7 text-gray-600">متاسفیم ما نتوانستیم صفحه ای را که دنبالش هستید را پیدا کنیم</p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
                  <Link to={"/"} class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">به خانه برگردید</Link>
              </div>
          </div>
      </main>
  )
}

export default ErrorPage