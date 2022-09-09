import { KeyboardEvent } from 'react';


const shuffle = (array:any) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

const getDateIntervalhour = (now:number ,old:number) => Math.floor((now-old) / 1000 / 60 / 60); 
const getDateIntervalMin = (now:number ,old:number) => Math.floor((now-old) / 1000 / 60); 
const getDateIntervalSec = (now:number ,old:number) => Math.floor((now-old) / 1000); 

const getDateIntervalHms = (now:number,old:number) => {
	return {
		hour : getDateIntervalhour(now,old),
		min : getDateIntervalMin(now, old),
		sec : getDateIntervalSec(now,old)
	}
}
const helper = {
	shuffle,
	date : {
		getDateIntervalhour,
		getDateIntervalMin,
		getDateIntervalSec,
		getDateIntervalHms
	}
	

};

export default helper;
