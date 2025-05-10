import React from 'react'

const TabsComponent = ({ activeTab, setActiveTab, tabs, contents }) => {
    return (
        <div className="max-w-5xl mx-auto my-8 px-4">
            {/* Tabs */}
            <div className="relative bg-gradient-to-r from-blue-50 to-purple-50 rounded-full p-1 flex justify-between items-center shadow-lg overflow-hidden">
                <div
                    className={`absolute h-10 w-1/3 rounded-full bg-gradient-to-r from-blue-300 to-purple-400 shadow-lg transition-transform duration-300`}
                    style={{
                        transform: `translateX(${activeTab * 100}%)`,
                    }}
                ></div>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`flex-1 z-10 py-2 text-sm font-medium outline-none ${
                            activeTab === index ? "text-white" : "text-blue-700"
                        } sm:text-base md:text-lg`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div
                className="mt-4 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg shadow-md transition-opacity duration-500 ease-in-out"
                key={activeTab}
            >
                {contents[activeTab].map((content, index) => (
                    <div key={index} className="mb-4">
                        <h3 className="text-md sm:text-lg md:text-lg font-semibold text-blue-700">
                            {content.title}
                        </h3>
                        <p className="text-base sm:text-md md:text-lg text-gray-700 mt-2">
                            {content.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TabsComponent