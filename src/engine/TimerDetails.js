/**
 * Created by tom on 03/02/17.
 * @flow
 */

import TimerNode from './TimerNode'

export default class TimerDetails extends TimerNode {

  constructor({id = '', repetitions = 1, duration = 30000} = {}) {
    super({id: id, repetitions: repetitions, type: TimerNode.timerType});
    this.duration = duration
  }

  totalDuration() {
    return this.duration * this.repetitions;
  }
}
