import React, { forwardRef } from 'react';
import { UserIcon } from "@heroicons/react/24/outline";

const SignBtn = forwardRef((props, ref) => {
    return (
        <button ref={ref} className='flex gap-1 items-center p-2 text-gray-500 dark:text-white dark:border-white border-gray-500 border rounded-full sm:px-4 hover:opacity-70'>
            <UserIcon width={20} />
            <span className='text-sm font-semibold hidden sm:block'>ورود و ثبت نام</span>

        </button>
    )
})

export default SignBtn;

