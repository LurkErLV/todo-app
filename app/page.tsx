"use client"

import Image from 'next/image';
import {useEffect, useState} from "react";
import Task from "@/components/Task";

export default function Home() {

    const [allTasks, setAllTasks] = useState([
        {
            text: "1",
            isCompleted: false,
        },
        {
            text: "2",
            isCompleted: false,
        },
        {
            text: "3",
            isCompleted: false,
        },
        {
            text: "4",
            isCompleted: true,
        },
    ]);

    function countCompleted() {
        return allTasks.filter(task => task.isCompleted === true).length;
    }

    function toggleIsCompleted(key: number) {
        allTasks[key].isCompleted = !allTasks[key].isCompleted;
        setCompleted(countCompleted());
        setTasks(allTasks.length);
    }

    async function deleteTask(key: number) {
        const newAllTasks = allTasks.filter((_el, i) => i !== key);
        setAllTasks(newAllTasks);
    }

    useEffect(() => {
        setCompleted(countCompleted());
        setTasks(allTasks.length);
    }, [allTasks])

    const [tasks, setTasks] = useState(allTasks.length);
    const [completed, setCompleted] = useState(countCompleted());


    return (
        <>
            <header className="bg-gray-700 h-[200px] w-full flex justify-center items-center">
                <div className="relative w-full h-full max-w-[126px] max-h-[46px]">
                    <Image priority src="./todo.svg" fill={true} alt="Logo"/>
                </div>
            </header>
            <div className="px-5">
                <main className="w-full max-w-[736px] mx-auto mt-[-27px]">
                    <div className="flex justify-center items-center gap-2 w-full h-[52px]">
                        <input
                            className="w-full h-full rounded-lg px-4 bg-gray-500 border border-gray-700 outline-none placeholder:text-gray-300"
                            placeholder="Add a new task" type="text"/>
                        <button
                            className="h-full px-4 bg-blueDark text-gray-100 text-md font-bold rounded-lg flex justify-center items-center gap-2 transition hover:bg-blue">
                            <svg
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                fill="none">
                                <g clipPath="url(#clip0_5002_90)">
                                    <path
                                        d="M7.98373 1.45158C9.27565 1.45158 10.5386 1.83468 11.6128 2.55244C12.687 3.27019 13.5242 4.29037 14.0186 5.48395C14.513 6.67754 14.6424 7.99092 14.3903 9.25802C14.1383 10.5251 13.5161 11.689 12.6026 12.6026C11.6891 13.5161 10.5252 14.1382 9.25807 14.3903C7.99097 14.6423 6.67759 14.5129 5.484 14.0185C4.29042 13.5241 3.27025 12.6869 2.55249 11.6127C1.83473 10.5385 1.45163 9.2756 1.45163 7.98368C1.45832 6.25332 2.14867 4.59574 3.37223 3.37218C4.59579 2.14862 6.25337 1.45827 7.98373 1.45158ZM7.98373 5.77648e-06C6.40611 0.00645971 4.86578 0.480174 3.55717 1.36134C2.24857 2.24252 1.23037 3.49164 0.631106 4.95102C0.031846 6.4104 -0.121605 8.01461 0.190125 9.56114C0.501855 11.1077 1.26479 12.5272 2.38262 13.6404C3.50044 14.7537 4.92304 15.5108 6.47082 15.8162C8.01861 16.1217 9.62218 15.9617 11.0791 15.3564C12.536 14.7512 13.781 13.7279 14.6568 12.4158C15.5326 11.1036 16 9.5613 16.0001 7.98368C16.0001 6.93249 15.7925 5.89165 15.3892 4.92089C14.986 3.95014 14.395 3.06857 13.6502 2.32679C12.9053 1.58501 12.0214 0.997618 11.049 0.598327C10.0766 0.199035 9.0349 -0.00429452 7.98373 5.77648e-06Z"
                                        fill="#F2F2F2"/>
                                    <path
                                        d="M11.707 7.38129H8.4954V4.16968H7.41397V7.38129H4.19873V8.46271H7.41397V11.6743H8.4954V8.46271H11.707V7.38129Z"
                                        fill="#F2F2F2"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_5002_90">
                                        <rect width="16" height="16" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>

                    <div className="w-full mt-16">
                        <div className="flex justify-between items-center  mb-6">
                            <div className="flex justify-center items-center gap-2">
                                <p className="text-blue font-sm font-bold">Tasks</p>
                                <span
                                    className="bg-gray-400 rounded-full px-2 text-gray-200 text-sm font-bold">{tasks}</span>
                            </div>
                            <div className="flex justify-center items-center gap-2">
                                <p className="text-purple font-sm font-bold">Completed</p>
                                <span
                                    className="bg-gray-400 rounded-full px-2 text-gray-200 text-sm font-bold">{completed}</span>
                            </div>
                        </div>

                        {tasks === 0 &&
                            <>
                                <hr className="mb-16 border-none bg-gray-400 h-px rounded"/>

                                <div className="flex flex-col items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" href="http://www.w3.org/1999/xlink"
                                         width="56"
                                         height="56" viewBox="0 0 56 56" fill="none">
                                        <rect width="56" height="56" fill="url(#pattern0)"/>
                                        <defs>
                                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1"
                                                     height="1">
                                                <use href="#image0_4130_503" transform="scale(0.01)"/>
                                            </pattern>
                                            <image id="image0_4130_503" width="100" height="100"
                                                   href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAEFJJREFUeF7tXX20XFV13/vcvJhPWghtYlvko2Fp+VgVnhpf5p4zEwPUKPWjgkiwH1grCoIoH0KhJfiFtqgoftXaYq2CmFoVlwYx0Zm777zXSCNqMdiWLj8AZS0NURJfY3Lv2V2bNS/rzuG+zJwz82bee+lZa/6afc7++N1z7zn77LM3wixqo6OjI0uXLl1lrf3NQYi1YMGCXQDwcL1ezwbBrxse2A3RTNPEcTwKAFcg4gsA4Ndmmp8z/i8AYAsz35ym6Y4B834Su6ECIjNi8eLF70XEiwFgqLIAACPirUuXLr16y5YtvxoWMEMzQq1WW2CtvYuZNwxL+Wn43jU5OXnOjh07DgxDrqEBEsfxzYh4xTCU7oLnO4joui7o+k4yFEDWrVv39CzL7geABY5GvwSAzwDAg4iY913bwoDMHCmlTrTWvhwAlji8sjzPnzE+Pv4/MylD2dhDAcQY8z5mvqwoEDPfn+f5SycmJh4cpBHGxsZWR1H0OUQ8xeF7CxG9cZCyCK+hAKK1lifvhIKy8hE9nYh2DtoAwq9SqZyslPomACws8H+AiE4atDwDB0Q+5nmeCwCqoOzdRDTUj7sx5m5m/gNn1n5DKZVYaxuLFi2irVu3yhJ5RtvAAYnj+EhEfMzR6jYietWMatph8Gq1epu19s8OQSYP0WestR9qNpv/NlOyDhwQeU1qrfc5r4ftRPTcmVKym3G11mLkNd3QAsB2a+3lMwHMMAABY8y9zPwsR/mXENEXujRIX8m01i8GgM97DmoR8aaVK1fesHnz5r6tCIcCiNb6LwHg7Y4BdiulLmk0Gnd4GqYncmPMRmb+AAAc6Qz0EAA8tWRp7vL77K5duzbu3Llzf0+CtDr3DZA4jt+glHoFADyU5/mVzWbzR9MJ2PqOyPL2qBKaH8o+RFwZ/VDwEGOI7qsB4NgSmp9nWfa7SqkDURRpZj4HAM4r2a880ZWZb0/T9JX9kLkvgGitLweA9xYU6/hN0FqLAv88w0YPGt5a+8pms/mpYudarfbrWZaJA/Rq5/s3RfZGIroliGGhU8+AGGNOZObvAMCiojCTk5MLO/mD4ji+DhHfOqz9UInxZFZeT0TvmM6wtVrtlDzP5VtX3EcJ+b48z0/pdXffMyBa638BgJc5CnScIVP0WutzEPEWZv7tXp+uHvv/BAAuIyLR55CtUqk8TSnVAIDjioSIuDlJEnHFBLeeAKnVasfleS677uIm7wAzj/mcLYyOji5ZsmTJRqXUi621sjv+LXfGBWs4fUdZev8MAL6tlLoLEW+v1+t7u+UjZziIOAEAI4U+1lp7/KG+n53G7wmQOI7fiojXF5lYa29tNpttfqpOQszV/+M4/gAiXuLMkhuTJNkUqlMwIOeee2706KOP/gAAfqfAPI+i6Lh6vf5wqEBzqZ8x5hhmFhsU3xAPrVq16vjQvUkwIJVKJVZKkWPAbUR0xlwyaq+yGmO2MfPznFlSSZJkPGTsYEBaK6S3OUwvJKKPhwgyV/sYY/6cmT/mAHJNkiTvCtEpGJAS7yhnWXb0xMSE6zgMkWvO9Fm/fv2K/fv3/9RZun+ZiF4YokQQIC0Xuhh++RRTZv5emqa/FyLEXO+jtf4vADixoMcvVq1atSLkOxIKyDPyPH/AMeQ/EdGh3Ndz3e7Tym+M+SQzX1AkyLLsxJDTzyBA4jg+GxG/6Lw3X58kyQfnrdUPoZj48WRz69jjhUmSfNnXHkGAaK3lrPk9DrMziGibrwDzgV5rLSeNdxd1YeY3pGn6fl/9ggAp2xDleb66Vz+Or/Czhb4VRfO9ojyhG+QgQLTWWwDg+QUB7LJly5YMM+JvmODUarVFeZ5PFldaiLglSRIJjfVqQYAYY+5j5mdOcULER5IkKe7YvYSYD8Ra6x+3DrSm1PkmEUnMslcLAkRrLYdPxxQ43UtEz/HiPM+IS46lf0hEbd7gblQOBUSm5+ICg6GH8XSj7EzSxHF8DyKeWeDxSyJa5svTG5BarbYsz/M9zorijjRNN/oyn0/0xpg7mbntLCTLsiUTExP/66OnNyBr1649Nooi8XAW24eJSK4UHLYtjuOPIOJFRQMg4tOSJJFgia6bNyDGmFNbR7YHmSDi25MkaTsX6VqCeUIYx/FNiHiNo87JvuGx3oDEcbwGEd3IvTcT0d/ME9sGqWGMuYaZbyp2zvP8OePj4/f6DOgNSLVaXWet/VqRiVLqskajcasP4/lGWxJ5A4hYTZIk8dHVGxBjzAuY+UsOk9cQ0d/7MC7SGmPOkn0NInrLE8qz2I+Z5Trbt5IkuSd0PGPMRcz8kWL/KIo21Ov1NpdKp/G9DaC1lgiTtsgMZv6TNE2DYqyMMdczs4QCzYZ23aFCgA4loDHmT5m57XCOmf8oTdPP+SjmDUgcx3+MiJ9wnrCXp2m62YfxFK3W+pFWlElI97726cXjYIw5j5k/XRSoLOCuk8DegJQdWSqlXtRoNNrc8Z0YFwCRILtTu6WfYbrvENHvh/AoC9hWSr2q0Wjc5jOeNyBa678AgI86TJ5PRF/xYTxF21okyCuwLM43ZMjQPo9FUfSyer1eDxmgUqlsUEq1nX8g4quTJPkHn/G8ASn7eCmlzmo0Gl/1YVyk3bBhw1P27t37dGYuBp2FDufdDxEPLFu27D978VaXnYkopS5qNBruw3tI+bwBieP4YkR0TwYP28OpKeu2VoptbwlEfG2SJH/n84R4A6K1fj0AtO05EHF9kiRtexMfIeYDbRzHZyBi21uCmS9J0/RDPvp5AxLH8WWI+L4ikyiK1oW+e32Enc20xpjnMbN7hH0pEclloK6bNyD92pF2LeEcIazVarU8z79eFDfkXN0bkGq1+iZr7buLjK21utlspnPEdjMipjHGMLNcUSg270s83oBUKpUrlVJ/6zCOiag5I5rOkUErlYqWO+1FcZVSVzQaDTc6p7+rLK21XOlqi1tVSq1tNBpyV+KwbVrrCgC0vSWstVc1m82bfYziPUOMMW9m5nc6r6yxXu5sVyqV5VEUrbbWFsP6ffToiVYpZfM8f7DZbLadhPoMWqlUnquUch9K72MJb0Aqlcq1Sin3Dt4aIvqGjwJTtK0NlWQAOiKkfx/7PI6I54Z6fLXWEuSxvSgPIl6bJEnbw9tJXm9Ayq4hRFH07Hq9/u+dmJX9r7X+LgAMPMnLNLJ+l4jcrEBdqbV27dpnR1HkPpTe3mNvQKZxl48SkWTT8W5aazlzni0xXQ8TUTG8qWt9WncO2x5KRPyrJEncOzR9/6j/NQDc6EzN05Mkua9r6QuE06zaQobquQ8iXpkkSduSvttBjTGnMbP7UN5ARG/pdgyh854hWuu+AiJCyJJREr9EURT5CN8v2jzPJVfJ9maz6V7R65rF0ADp9yura41nOWHZK4uZr0/T1M3p0t9XVtkqq5eP+iy3c9fiDW2VVbYxlNdN6LK3a41nOeE0+5Cricj1avR3hhhjrpAs0MVRrbU9bQxnua27Es8Ys5aZ29xHg3KduJl/JP4o+F52V9rOAaKye/vMfHmapm1HFZ1U8V5lVavVS621bVe1/t/bC5Ilr8zbO/PnIcaYS1oZ2A6CHRKh1+lJmWv/l52HAMDriKgteK6TXt4zRGv9WgD4sDNwjYjcs4BOvOfV/9OcGHpHdIYA8moAaAsb7fVMXRIRiPsky7Jgb++iRYt2DSKv7nRPkdZ6PQBsLf4/kDCgarV6obX2H4uMmfnMNE3bhOn28W8d7HwWAH6j2z7T0EmI7rvSNL22x3GCuler1TOttW5ssHfuF+8ZUhbD2ktcltb6WwAQFC1YZjkJ2k7T9NtBVu2h0zR31b1jnr0BKUteGRLlPaV7ye3VHswC0MvD0QvjslsBiHhBkiS3+4zrDUi1Wj3fWusyCU6CrLUWz7E4LPvRHsiybNT3Xl8/GMdx/FJE/FfnG/KKJEnu9BnfG5AyxgBwPhG1RX77CFGtVv+QmddYa916Il0PE0XRIyMjI58Y1oe9lZC5LbUsAHg/qN6AlIVMAoD3x6trS88RQq11X1afIYA8yWcDABcTkbs3mSOm7I+YZR6MEKdrCCBPuoUb4kTrjxlmzyha66sAwL34OpBbuCcgolub6S1EdMPsMc/gJTHGvI2Z2wqJWWuP9c3h6z1DarXa0XmeS47Bg42ZP5imqUTFH7ZNay1R7q9z7HJUmqa7fYziDcimTZvUtm3bpNpMcUX0aSI634fxfKMtSa2xn4gkH75XlQdvQMSQJZu5e4iorX7TfDN4J3201nI3pJizOCikKAgQN18WANxHRKd3Eno+/6+1lhCg06Z0VErtaDQabhWhjiYIAqQko9xjRLSiI7d5TKC1lrS5xSo9XyKis31VDgVEvL0XFplFUXRkvV7/ua8A84F+bGzsqFYp8KI6HyMiubHs1YIAKUu0AgDB4aReEs9C4rK43pCrCKJaECCVSuVFSqm2imqI6O1Im4W2DRJpGj/W2UTk5oTpOH4QIK0yR5Jeu9iGUju2o4YDINBay63ktn0YIp6QJMn3fdkHAdKqHSLVaIp1pw7bRJha6x1Sy7dg/Mn169cv37Rpkx0IIMIkjuOvIeK6AsOs9WHvumyQr7CzkV5ufymlZIV1cKPMzF9N0/SsEHmDZogwKovx7SVNU4jws6GP1loKELgJZrxDSKd0CQakVqs9K89zN31dg4hqs8FQg5JBay1XGOIivzzPTxsfH5dYAe8WDEjLpyVVOYu3n8Rv80wikpRL8761EoJKQEXRjpJA+XhfH1bPM2S615YkyFy5cmUcUsxkjiGIcRx/xUmeLCp437wt6h08Q2SQlite0o4Xs1xL8LX37dM5BoZ8Q8sSKExmWXZML2WfegKkNUver5S61DEoW2uvazabbWlT55rRp5O3taCRm1Gu/Xrei/UMiBTtzfNcrjZLdU63fT7LsqtCSv/MRvDGxsZWK6VuloqkrnySr3HhwoUn9xr10jMgIpjWugoAch5QlhFO6ozfYa29c9++fVs7FSyebUCMjo6OLF26VMJEzxP30DSVog9Ya9f3cmm0Lx/1ovFaWTk/2aEgvBxnbkfEHcws16j/O4qiH9frdalJO/TW+ibKTJeKa7Lzlt8ax63uyplZay9oNpuSjaLn1pcZMiVFK2ZLgsWO9pRMCgX/RHa8eZ4/zsyPK6X2IKKUxZhq+6y1bZUGEPFXDo0Um1/CzE8p8ldKyaLjoJtHaKy1yxHxiCiKjrDWSgLOpwYURP4pM28MDTQvs1FfAREG8k2x1t4o6e0AYCj3zj0fhhBy8VF9KoqiN/V7dvcdkMJskfit10iYKQDMl9PEn1lr7xgZGflovV6/PwTJTn1mDJApxieddNLCFStWbBBHpNzWRUQ5dx5KOthOxij5/wAAyFn5hLX267t37757586dskiZsTbjgLiSj42NLV6wYMGpiCjuheOkIDwiHoOIRzGznElP/WYaNDG2LDJ2I+JuZhaP7Y8QUYrV/ICZv59l2X8MOpJ+4IB0+2hJcuU9e/YsmaK31o4opYo1ncTdfbAWr/MRf9xaK/lLnmjW2r1KKQHgibZ8+fLJXpImd6tDCN3/AYoPtL+XKSSCAAAAAElFTkSuQmCC"/>
                                        </defs>
                                    </svg>

                                    <p className="text-gray-300 text-center text-base font-bold mt-4">You don't have
                                        tasks
                                        registered yet</p>
                                    <p className="text-gray-300 text-center text-base font-normal">Create tasks and
                                        organize
                                        your to-do items</p>
                                </div>
                            </>
                        }
                        {
                            tasks > 0 &&
                            <>
                                {
                                    allTasks.map((el, i) => {
                                        return <Task key={i} isCompleted={el.isCompleted}
                                                     toggleIsCompleted={() => toggleIsCompleted(i)}
                                                     deleteTask={() => deleteTask(i)}>{el.text}</Task>
                                    })
                                }
                            </>
                        }

                    </div>
                </main>
            </div>
        </>
    )
}
