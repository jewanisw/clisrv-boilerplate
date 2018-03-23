import {Router} from 'express';

import * as Controller from '../controllers/Demo.controller';

const router = new Router();

router.route('/').get(Controller.demo);

export default router;
