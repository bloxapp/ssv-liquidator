import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

import { LiquidationTask } from '../tasks/liquidation.task';

@Injectable()
export class LiquidationCron {
  constructor(private _liquidationTask: LiquidationTask) {}

  @Cron('0 * * * * *')
  async liquidate(): Promise<void> {
    try {
      await this._liquidationTask.liquidate();
    } catch (e) {
      console.log(e);
    }
  }
}
