import { useState } from 'react';
import JsonData from 'data.json';

//fetch the current content according to page type and selected item
function useJsonData(pageType, sectionName) {  
  const [dataSet, setDataSet] = useState(getCurrentInfo(pageType, sectionName));

  function getCurrentInfo(pageType, sectionName){
        return JsonData[pageType].find(section => {return section.name === sectionName });
    }

  const handleDataChange = (pageType, sectionName) => {
    setDataSet(getCurrentInfo(pageType, sectionName));
  }

  return [dataSet, handleDataChange];
}

export default useJsonData;