
export default function Matchs() {
    return (
        <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900  p-6 text-center">
                <span className="block">
                    Table of
                    <span className="text-transparent bg-clip-text bg-gradient-to-tr to-cyan-500 from-blue-600">
                        &nbsp;Matchs
                    </span>
                </span>
            </h1>

            <div className="rounded-lg border border-gray-200">
                <div className="overflow-x-auto rounded-t-lg">
                    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                        <thead className="text-left">
                            <tr>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">N°</td>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Team 1</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Team 2</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date Match</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                            <tr>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">1</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">Team  1</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">Team 2</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">01-01-2024</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
                    <ol className="flex justify-end gap-1 text-xs font-medium">
                        <li>
                            <a
                                href="#"
                                className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                            >
                                <span className="sr-only">Prev Page</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3 w-3"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                            >
                                1
                            </a>
                        </li>

                        <li className="block size-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
                            2
                        </li>

                        <li>
                            <a
                                href="#"
                                className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                            >
                                3
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                            >
                                4
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                            >
                                <span className="sr-only">Next Page</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3 w-3"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}
