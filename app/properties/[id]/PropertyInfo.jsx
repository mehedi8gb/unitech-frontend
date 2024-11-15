import React from 'react';

const PropertyInfo = ({className,propertyDetails}) => { 
  return (
    <div className={`max-w-4xl w-[400px] mx-auto p-6 ${className}`}>
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200 p-4">
          <h2 className="text-xl font-semibold text-gray-800">AT A GLANCE</h2>
        </div>
        
        <div className="divide-y divide-gray-200">
          {propertyDetails.map((detail, index) => (
            <div 
              key={index} 
              className="flex items-center p-4 hover:bg-gray-50"
            >
              <span className="text-xl mr-3">{detail.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-700">
                  {detail.label}
                </p>
              </div>
              <div className="text-sm text-gray-900">
                {detail.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyInfo;