import Demo from '../models/Demo';

export function demo(req, res) {
  Demo.findOne().sort({created: -1}).limit(1).then(text => res.json(text), err => res.status(500).send(err));
}
