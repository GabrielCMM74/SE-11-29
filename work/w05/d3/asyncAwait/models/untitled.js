


const parentSchema = new mongoose.Schema({
  name: String,
  dogs: [{
    type: mongoose.object.ID,
    ref: 'Dogs'
  }]
});

const Parent = mongoos.model('Parent', parentSchema)
