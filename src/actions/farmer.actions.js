let farmer_id=0;
const updateForm = (name, father_name, cnic, owned_acerage, cultivated_acerage) => {
  return{
    type: 'UPDATE_PRAC_FORM',
    id: farmer_id++,
    name,
    father_name,
    cnic,
    owned_acerage,
    cultivated_acerage
  }
}

export default updateForm;
