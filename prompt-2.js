const entities = {
	fund: {
		1: { id: 1, name: 'VCPT Ventures III' },
		2: { id: 2, name: 'Huron Oak Equity V' },
		3: { id: 3, name: 'Pacific Capital Partners I' },
	},
	company: {
		15: { id: 15, name: 'FidoFarm', fund_id: 2, exited: false },
		23: { id: 23, name: 'Accumentor', fund_id: 2, exited: true },
		52: { id: 52, name: 'Dronez', fund_id: 1, exited: true },
		63: { id: 63, name: 'CoffeeBuilders', fund_id: 3, exited: false },
	},
}


// helper function for the below functions
const objectToArray = (object) => {
  return Object.keys(object).map(key => object[key]);
}


const getFundsAlphabetical = (entitiesObj) => {
  return objectToArray(entitiesObj.fund).sort((a, b) => a.name.localeCompare(b.name));
}

const getCompaniesInFund = (entitiesObj, fundId) => {
  return objectToArray(entitiesObj.company).filter(company => company.fund_id === fundId);
}

const getExitedCompanies = (entitiesObj) => {
  return objectToArray(entitiesObj.company).filter(company => company.exited).map(company => company.name);
}


console.log('Prompt 2.1:', getFundsAlphabetical(entities));
console.log('Prompt 2.2:', getCompaniesInFund(entities, 2));
console.log('Prompt 2.3:', getExitedCompanies(entities));
