/**
 * Created by tom on 03/02/17.
 * @flow
 */
import TimerNode from './TimerNode'
import React from 'react'

export default class TimerSetDetails extends TimerNode {

  constructor({id = '', repetitions = 1, children = []} = {}) {
    super({id: id, type: TimerNode.setType, repetitions: repetitions});
    this.children = children;
  }

  totalDuration() {
    return this.children.reduce((a, v) => a + v.totalDuration(), 0) * this.repetitions;
  }

}
