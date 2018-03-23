import mongoose, {Schema} from 'mongoose';

const DemoSchema = new Schema({
  text: String,
}, {
  timestamps: {createdAt: 'created', updatedAt: 'updated'},
});

export default mongoose.model('Demo', DemoSchema);
