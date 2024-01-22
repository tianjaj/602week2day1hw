var stats =[
    {
        'city': 'San Juan', 
        'zip': '00926', 
        'state': 'PR', 
        'income': '34781',
        'age': '44'
    },
    {
        'city': 'Corona', 
        'zip': '11368', 
        'state': 'NY', 
        'income': '50797',
        'age': '32'
    },
    {
        'city': 'Chicago', 
        'zip': '60629', 
        'state': 'IL', 
        'income': '42019',
        'age': '31'
    },
    {
        'city': 'El Paso', 
        'zip': '79936', 
        'state': 'TX', 
        'income': '54692',
        'age': '31'
    },
    {
        'city': 'Los Angeles', 
        'zip': '90011', 
        'state': 'CA', 
        'income': '36954',
        'age': '28'
    },
    {
        'city': 'Norwalk', 
        'zip': '90650', 
        'state': 'CA', 
        'income': '66453',
        'age': '35'
    }
]

db.uscensus.insertMany([
    { 'city': 'San Juan', 'zip': '00926', 'state': 'PR', 'income': '34781', 'age': '44' },
    { 'city': 'Corona', 'zip': '11368', 'state': 'NY', 'income': '50797', 'age': '32' },
    { 'city': 'Chicago', 'zip': '60629', 'state': 'IL', 'income': '42019', 'age': '31' },
    { 'city': 'El Paso', 'zip': '79936', 'state': 'TX', 'income': '54692', 'age': '31' },
    { 'city': 'Los Angeles', 'zip': '90011', 'state': 'CA', 'income': '36954', 'age': '28' },
    { 'city': 'Norwalk', 'zip': '90650', 'state': 'CA', 'income': '66453', 'age': '35' }
  ])
  db.uscensus.insertMany([
    { 'city': 'Pacoima', 'zip': '91331', 'state': 'CA', 'income': '60360', 'age': '33' },
    { 'city': 'Ketchikan', 'zip': '99950', 'state': 'AK', 'income': '00000', 'age': '00' }
  ])
  db.uscensus.findOne({ 'city': 'Corona', 'state': 'NY' }, { 'zip': 1, '_id': 0 })

  db.uscensus.find({ 'state': 'CA' }, { 'income': 1, '_id': 0 })

  db.uscensus.updateMany({ 'state': 'AK' }, { $set: { 'income': '38910', 'age': '46' } })

  db.uscensus.find().sort({ 'state': 1 })
