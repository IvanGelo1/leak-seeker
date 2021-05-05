const localURL: string = "http://localhost:3000/";

interface FaultObj {
  reg: string,
  make: string,
  model: string,
  summary: string,
  description: string,
  year: string,
  area: string,
  priceToFix: string,
  faultLogged: number | string | Date,
  rating: number,
}

interface CompleteObj {
  reg: string,
  make: string,
  model: string,
  faults?: Fault[]
}


interface VehicleFaults {
  reg: string,
  make: string,
  model: string,
  faults: Fault[]
}

interface Fault {
  summary: string,
  description: string,
  priceToFix: number,
  rating: number,
  area: string,
  year: number,
  faultLogged: string
}

export const getAllFaults = () => fetchRequest("getallfaults");
export const getFaultsByReg = (reg: string): Promise<void | VehicleFaults> => getRegFaultsRequest(`search/${reg}`);
export const saveFaultToDatabase = (faultObj: FaultObj) => postFaultToDatabase("addfault", faultObj);


// export const postNewEvent = (event) => createEvent(`events`, event);

// // GET REQUEST
const fetchRequest = (url: string): Promise<void | VehicleFaults> => {
  return fetch(`${localURL}${url}`)
    .then((result) => (result.status <= 400 ? result : Promise.reject(result)))
    .then((result) => result.json())
    .then((result) => sorter(result))
    .catch((err) => {
      console.log(`${err.message}`);
    });
};

const getRegFaultsRequest = (url: string): Promise<void | VehicleFaults> => {
  return fetch(`${localURL}${url}`)
    .then((result) => (result.status <= 400 ? result : Promise.reject(result)))
    .then((result) => result.json())
    .then((result) => sorter(result))
    .catch((err) => {
      console.log(`${err.message}`);
    });
};

// POST REQUEST -
const postFaultToDatabase = (url: string, faultObj: FaultObj): Promise<void | Response> => {
  console.log("inside post, faultob -> ", faultObj);
  return fetch(`${localURL}${url}`, {
    method: "POST",
    body: JSON.stringify(faultObj),
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
  })
    // .then((result) => result.json())
    .catch((err) => console.error(err));

};

// ################## HELPER FUNCTIONS ##################

// SORTS FAULTS BY HIGHEST RATING FIRST
export const sorter = (allFaultsObject: VehicleFaults) => {
  const sorted = allFaultsObject.faults.sort((a, b) => b.rating - a.rating);
  allFaultsObject.faults = sorted;
  return allFaultsObject;
};

// DATA AVERAGER FOR PIE CHART
export const priceAverager = (faults: number[]) => {
    const arr: number[] = Array(4).fill(0);
    faults.forEach((el) => {

      switch (true) {
        case el < 100:
        arr[0]++;
        break;
        case el < 500:
        arr[1]++;
        break;
        case el < 1000:
        arr[2]++;
        break;
        default: arr[3]++;
      }
    }
      );
    return arr;
  };

export const yearAverager = (faults: number[]) => {
    const arr: number[] = Array(4).fill(0);
    console.log(faults);
    faults.forEach((el) => {

      switch (true) {
        case el < 1990:
        arr[0]++;
        break;
        case el < 2000:
        arr[1]++;
        break;
        case el < 2010:
        arr[2]++;
        break;
        default: arr[3]++;
      }
    }
      );
    return arr;
  };

  export const areaAverager = (faults: string[]) => {
    const arr: number[] = Array(4).fill(0);
    faults.forEach((el) => {

      switch (true) {
        case el === "interior":
        arr[0]++;
        break;
        case el === "bodywork":
        arr[1]++;
        break;
        case el === "engine":
        arr[2]++;
        break;
        default: arr[3]++;
      }
    }
      );
    return arr;
  };